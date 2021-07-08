
#include "gui/new_selection_details_widget/models/data_table_model.h"
#include <algorithm>
#include <QToolTip>
#include "gui/code_editor/syntax_highlighter/python_qss_adapter.h"


namespace hal
{
    DataTableModel::DataTableModel(QObject* parent) : QAbstractTableModel(parent) 
    {
        mKeyFont = QFont("Iosevka");
        mKeyFont.setBold(true);
        mKeyFont.setPixelSize(13);
    }

    int DataTableModel::columnCount(const QModelIndex &parent) const
    {
        Q_UNUSED(parent)
        return 2;
    }

    int DataTableModel::rowCount(const QModelIndex &parent) const
    {
        Q_UNUSED(parent)
        return mDataEntries.size();
    }

    QVariant DataTableModel::data(const QModelIndex &index, int role) const
    {
        DataEntry entry = mDataEntries[index.row()];
        RowStyle style = mEntryToRowStyle[QPair(entry.category, entry.key)];

        if (role == Qt::DisplayRole){
            if(index.column() == 0){
                return (entry.key + ":");
            }
            else{
                return style.valueString;
            }
        }

        if (role == Qt::ForegroundRole){
            if(index.column() == 1){
                if(style.valueColor.isValid())
                    return style.valueColor;
            }
        }

        else if (role == Qt::TextAlignmentRole){
            return Qt::AlignLeft;
        }

        else if (role == Qt::FontRole){
            if (index.column() == 0 && style.keyFont != QFont()){
                return mKeyFont;
            }
        }

        else if (role == Qt::ToolTipRole){
            if (index.column() == 0){
                if(!style.keyToolTip.isEmpty())
                    return style.keyToolTip;
            }
            else {
                if(!style.valueToolTip.isEmpty())
                    return style.valueToolTip;
            }
        }

        return QVariant();
    }

    QVariant DataTableModel::headerData(int section, Qt::Orientation orientation, int role) const
    {
        Q_UNUSED(section)
        Q_UNUSED(orientation)
        Q_UNUSED(role)
        return QVariant();
    }

    bool DataTableModel::setData(const QModelIndex &index, const QVariant &value, int role)
    {
        Q_UNUSED(index)
        Q_UNUSED(value)
        Q_UNUSED(role)
        return false;
    }

    DataTableModel::DataEntry DataTableModel::getEntryAtRow(int row) const
    {
        return mDataEntries.at(row);
    }

    void DataTableModel::updateData(const std::map<std::tuple<std::string, std::string>, std::tuple<std::string, std::string>>& dataMap)
    {
        Q_EMIT layoutAboutToBeChanged();
        mDataEntries.clear();
        mEntryToRowStyle.clear();
        for(const auto& [key, value] : dataMap)
        {
            DataEntry e;
            e.category  = QString::fromStdString(std::get<0>(key));
            e.key       = QString::fromStdString(std::get<1>(key));
            e.dataType  = QString::fromStdString(std::get<0>(value));
            e.value     = QString::fromStdString(std::get<1>(value));
            
            mDataEntries.append(e);
        }
        // The data is sorted by category first and then by key. However the category generic is always displayed first.
        qSort(mDataEntries.begin(), mDataEntries.end(), 
            [](const DataEntry a, const DataEntry b) -> bool 
                { 

                    if(a.category == b.category)
                    {
                        return (a.key < b.key);
                    }
                    else
                    {
                        if(a.category == "generic")
                            return true;
                        else if(b.category == "generic")
                            return false;
                        else
                            return (a.category < b.category);
                    }
                });

        // Compute the appearance
        for(const DataEntry entry : mDataEntries)
        {
            mEntryToRowStyle[QPair(entry.category, entry.key)] = getRowStyleByEntry(entry);
        }

        Q_EMIT layoutChanged();
    }

    DataTableModel::RowStyle DataTableModel::getRowStyleByEntry(const DataEntry& entry) const
    {
        RowStyle style;
        style.keyFont = QFont();
        style.keyToolTip = QString();
        style.valueToolTip = QString();
        style.valueColor = QColor();

        // Sets the value string and color considering its data type
        if(entry.dataType == "string")
        {
            style.valueString = QString("\"%1\"").arg(entry.value);
            style.valueColor = PythonQssAdapter::instance()->doubleQuotedStringColor();
        }
        else if(entry.dataType == "bit_value" || entry.dataType == "bit_vector")
        {
            style.valueString = QString("0x%1").arg(entry.value);
            style.valueColor = PythonQssAdapter::instance()->numberColor();
        }
        else if(entry.dataType == "integer")
        {
            style.valueString = entry.value;
            style.valueColor = PythonQssAdapter::instance()->numberColor();
        }
        else
        {
            style.valueString = entry.value;
            // Sets value tooltips if the data type is unknown
            style.valueToolTip = entry.dataType;
        }

        if(entry.category == "generic")
        {
            style.keyFont = mKeyFont;
        }
        // If the category is not "generic" the font is not fat and a tooltip displays the category.
        else
        {
            style.keyToolTip = entry.category;
        }
        
        return style;
    }

} // namespace hal


