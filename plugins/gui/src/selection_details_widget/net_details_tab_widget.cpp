#include "gui/selection_details_widget/net_details_tab_widget.h"

#include "gui/new_selection_details_widget/details_frame_widget.h"
#include "gui/new_selection_details_widget/new_net_details_widget/net_info_table.h"

#include "gui/new_selection_details_widget/new_net_details_widget/net_endpoint_table.h"
#include "gui/new_selection_details_widget/models/endpoint_table_model.h"

#include "gui/new_selection_details_widget/new_net_details_widget/net_module_table.h"
#include "gui/new_selection_details_widget/models/module_table_model.h"

#include "hal_core/netlist/net.h"

namespace hal
{
    NetDetailsTabWidget::NetDetailsTabWidget(QWidget* parent) : DetailsTabWidget(parent)
    {
        setIcon(":/icons/sel_net");

        //create all widgets and replace the qWidgets in the frames with them
        mNetInfoTable = new NetInfoTable(this);

        //general tab
        mNetInformationFrame = new DetailsFrameWidget(mNetInfoTable, "Net Information", this);
        mGroupingsFrame = new DetailsFrameWidget(new QWidget(this), "Groupings", this); //replace QWidget

        ModuleTableModel* moduleModel = new ModuleTableModel(this);
        mNetModuleTable = new NetModuleTable(moduleModel, this);

        mModulesFrame = new DetailsFrameWidget(mNetModuleTable, "Modules", this);

        QList<DetailsFrameWidget*> framesGeneralTab({mNetInformationFrame, mGroupingsFrame, mModulesFrame});
        addTab("General", framesGeneralTab);

        //sources / destinations tab

        EndpointTableModel* sourceModel = new EndpointTableModel(EndpointTableModel::Type::source, this);
        mSourcesTable = new NetEndpointTable(sourceModel, this);

        EndpointTableModel* destinationModel = new EndpointTableModel(EndpointTableModel::Type::destination, this);
        mDestinationsTable = new NetEndpointTable(destinationModel, this);

        mSourcesFrame = new DetailsFrameWidget(mSourcesTable, "Sources", this);
        mDestinationsFrame = new DetailsFrameWidget(mDestinationsTable, "Destinations", this);

        QList<DetailsFrameWidget*> framesSrcDstTab({mSourcesFrame, mDestinationsFrame});
        addTab("Src / Dst", framesSrcDstTab);

        //data tab
        mDataFrame = new DetailsFrameWidget(new QWidget(this), "Data", this); //replace QWidget

        QList<DetailsFrameWidget*> framesDataTab({mDataFrame});
        addTab("Data", framesDataTab);

        //connect widgets with frames for refreshing the headers when necessary
        connect(mNetModuleTable, &NetModuleTable::updateText, mModulesFrame, &DetailsFrameWidget::setText);

        connect(mSourcesTable, &NetEndpointTable::updateText, mSourcesFrame, &DetailsFrameWidget::setText);
        connect(mDestinationsTable, &NetEndpointTable::updateText, mDestinationsFrame, &DetailsFrameWidget::setText);
    }
 
    void NetDetailsTabWidget::setNet(Net* net)
    {
        //pass net or other stuff to widgets
        mNetInfoTable->setNet(net);

        mNetModuleTable->setNet(net);

        mSourcesTable->setNet(net);
        mDestinationsTable->setNet(net);
    }
}
