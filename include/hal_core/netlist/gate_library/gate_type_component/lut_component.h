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

#include "hal_core/netlist/gate_library/gate_type_component/gate_type_component.h"

namespace hal
{
    class LUTComponent : public GateTypeComponent
    {
    public:
        /**
         * Construct a new LUTComponent with given child component and bit-order.
         * 
         * @param[in] component - Another component to be added as a child component.
         * @param[in] init_ascending - True if ascending bit-order, false otherwise.
         */
        LUTComponent(std::unique_ptr<GateTypeComponent> component, bool init_ascending);

        /**
         * Get the type of the gate type component.
         * 
         * @returns The type of the gate type component.
         */
        ComponentType get_type() const override;

        /**
         * Check whether a component is a LUTComponent.
         * 
         * @param[in] component - The component to check.
         * @returns True if component is a LUTComponent, false otherwise.
         */
        static bool is_class_of(const GateTypeComponent* component);

        /**
         * Get the sub-components of the gate type component.
         * A user-defined filter may be applied to the result vector, but is disabled by default.
         * 
         * @param[in] filter - The user-defined filter function applied to all candidate components.
         * @returns The sub-components of the gate type component.
         */
        std::vector<GateTypeComponent*> get_components(const std::function<bool(const GateTypeComponent*)>& filter = nullptr) const override;

        /**
         * Get the bit-order of the initialization string.
         *
         * @returns True if ascending bit-order, false otherwise.
         */
        bool is_init_ascending() const;

        /**
         * Set the bit-order of the initialization string.
         *
         * @param[in] init_ascending - True if ascending bit-order, false otherwise.
         */
        void set_init_ascending(bool init_ascending = true);

    private:
        static constexpr ComponentType m_type          = ComponentType::lut;
        std::unique_ptr<GateTypeComponent> m_component = nullptr;

        bool m_init_ascending = true;
    };
}    // namespace hal