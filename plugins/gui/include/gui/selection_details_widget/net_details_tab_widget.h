//  MIT License
//
//  Copyright (c) 2019 Ruhr University Bochum, Chair for Embedded Security. All Rights reserved.
//  Copyright (c) 2021 Max Planck Institute for Security and Privacy. All Rights reserved.
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.

#pragma once

#include "gui/selection_details_widget/details_tab_widget.h"
#include "gui/new_selection_details_widget/data_table_widget.h"
#include "gui/new_selection_details_widget/groupings_of_item_widget.h"

namespace hal
{
    class Net;
    class DetailsFrameWidget;
    class NetInfoTable;
    class GroupingsOfItemWidget;
    class DataTableWidget;

    class NetDetailsTabWidget : public DetailsTabWidget
    {
        Q_OBJECT

    public:

        /**
         * The constructor.
         *
         * @param parent - The widget's parent.
         */
         NetDetailsTabWidget(QWidget* parent = nullptr);

        /**
         * Sets the net which details are shown in the tabs and various widgets.
         *
         * @param net - The net.
         */
        void setNet(Net* net);

    private:
        DetailsFrameWidget* mNetInformationFrame;

        GroupingsOfItemWidget* mGroupingsOfItemTable;
        DetailsFrameWidget* mGroupingsFrame;

        DetailsFrameWidget* mModulesFrame;

        DetailsFrameWidget* mSourcesFrame;

        DetailsFrameWidget* mDestinationsFrame;

        DataTableWidget* mDataTable;
        DetailsFrameWidget* mDataFrame;

        NetInfoTable* mNetInfoTable;
    };
}
