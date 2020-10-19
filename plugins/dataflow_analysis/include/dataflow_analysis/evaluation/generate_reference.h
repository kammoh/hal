#pragma once

#include "dataflow_analysis/common/grouping.h"
#include "hal_core/defines.h"

namespace hal
{
    namespace evaluation
    {
        std::shared_ptr<Grouping> generate_reference(const NetlistAbstraction& netlist_abstr);

    }    // namespace evaluation
}    // namespace hal