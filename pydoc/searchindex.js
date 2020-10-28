Search.setIndex({docnames:["base_plugin_interface","boolean_function","core_utils","data_container","endpoint","gate","gate_library","gate_type","gate_type_lut","gate_type_sequential","graph_algorithm","grouping","gui","gui_plugin_interface","hal_py","hdl_writer_manager","index","module","net","netlist","netlist_factory","netlist_simulator","netlist_utils","path","plugin_manager","plugins"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,sphinx:55},filenames:["base_plugin_interface.rst","boolean_function.rst","core_utils.rst","data_container.rst","endpoint.rst","gate.rst","gate_library.rst","gate_type.rst","gate_type_lut.rst","gate_type_sequential.rst","graph_algorithm.rst","grouping.rst","gui.rst","gui_plugin_interface.rst","hal_py.rst","hdl_writer_manager.rst","index.rst","module.rst","net.rst","netlist.rst","netlist_factory.rst","netlist_simulator.rst","netlist_utils.rst","path.rst","plugin_manager.rst","plugins.rst"],objects:{"graph_algorithm.GraphAlgorithmPlugin":{get_communities:[10,1,1,""],get_communities_fast_greedy:[10,1,1,""],get_communities_multilevel:[10,1,1,""],get_communities_spinglass:[10,1,1,""],get_graph_cut:[10,1,1,""],get_name:[10,1,1,""],get_strongly_connected_components:[10,1,1,""],get_version:[10,1,1,""],name:[10,2,1,""],version:[10,2,1,""]},"hal_gui.GuiApi":{deselect:[12,1,1,""],deselect_all_items:[12,1,1,""],deselect_gate:[12,1,1,""],deselect_module:[12,1,1,""],deselect_net:[12,1,1,""],get_selected_gate_ids:[12,1,1,""],get_selected_gates:[12,1,1,""],get_selected_item_ids:[12,1,1,""],get_selected_items:[12,1,1,""],get_selected_module_ids:[12,1,1,""],get_selected_modules:[12,1,1,""],get_selected_net_ids:[12,1,1,""],get_selected_nets:[12,1,1,""],select:[12,1,1,""],select_gate:[12,1,1,""],select_module:[12,1,1,""],select_net:[12,1,1,""]},"hal_py.BasePluginInterface":{get_name:[0,1,1,""],get_version:[0,1,1,""],name:[0,2,1,""],version:[0,2,1,""]},"hal_py.BooleanFunction":{Value:[1,0,1,""],__and__:[1,1,1,""],__call__:[1,1,1,""],__eq__:[1,1,1,""],__iand__:[1,1,1,""],__init__:[1,1,1,""],__invert__:[1,1,1,""],__ior__:[1,1,1,""],__ixor__:[1,1,1,""],__ne__:[1,1,1,""],__or__:[1,1,1,""],__str__:[1,1,1,""],__xor__:[1,1,1,""],evaluate:[1,1,1,""],from_string:[1,3,1,""],get_dnf_clauses:[1,1,1,""],get_truth_table:[1,1,1,""],get_variables:[1,1,1,""],is_constant_one:[1,1,1,""],is_constant_zero:[1,1,1,""],is_dnf:[1,1,1,""],is_empty:[1,1,1,""],optimize:[1,1,1,""],substitute:[1,1,1,""],to_dnf:[1,1,1,""],variables:[1,2,1,""]},"hal_py.BooleanFunction.Value":{name:[1,2,1,""]},"hal_py.CoreUtils":{get_base_directory:[2,5,1,""],get_binary_directory:[2,5,1,""],get_default_log_directory:[2,5,1,""],get_gate_library_directories:[2,5,1,""],get_library_directory:[2,5,1,""],get_plugin_directories:[2,5,1,""],get_share_directory:[2,5,1,""],get_user_config_directory:[2,5,1,""],get_user_share_directory:[2,5,1,""]},"hal_py.DataContainer":{data:[3,2,1,""],data_keys:[3,2,1,""],delete_data:[3,1,1,""],get_data:[3,1,1,""],get_data_by_key:[3,1,1,""],get_data_keys:[3,1,1,""],set_data:[3,1,1,""]},"hal_py.Endpoint":{__init__:[4,1,1,""],gate:[4,2,1,""],get_gate:[4,1,1,""],get_net:[4,1,1,""],get_pin:[4,1,1,""],is_destination:[4,2,1,""],is_destination_pin:[4,1,1,""],is_source:[4,2,1,""],is_source_pin:[4,1,1,""],net:[4,2,1,""],pin:[4,2,1,""]},"hal_py.GUIPluginInterface":{exec:[13,1,1,""]},"hal_py.Gate":{add_boolean_function:[5,1,1,""],boolean_functions:[5,2,1,""],data:[5,2,1,""],data_keys:[5,2,1,""],delete_data:[5,1,1,""],fan_in_nets:[5,2,1,""],fan_out_nets:[5,2,1,""],get_boolean_function:[5,1,1,""],get_boolean_functions:[5,1,1,""],get_data:[5,1,1,""],get_data_by_key:[5,1,1,""],get_data_keys:[5,1,1,""],get_fan_in_endpoint:[5,1,1,""],get_fan_in_endpoints:[5,1,1,""],get_fan_in_net:[5,1,1,""],get_fan_in_nets:[5,1,1,""],get_fan_out_endpoint:[5,1,1,""],get_fan_out_endpoints:[5,1,1,""],get_fan_out_net:[5,1,1,""],get_fan_out_nets:[5,1,1,""],get_grouping:[5,1,1,""],get_id:[5,1,1,""],get_input_pins:[5,1,1,""],get_location:[5,1,1,""],get_location_x:[5,1,1,""],get_location_y:[5,1,1,""],get_module:[5,1,1,""],get_name:[5,1,1,""],get_netlist:[5,1,1,""],get_output_pins:[5,1,1,""],get_predecessor:[5,1,1,""],get_predecessors:[5,1,1,""],get_successor:[5,1,1,""],get_successors:[5,1,1,""],get_type:[5,1,1,""],get_unique_predecessors:[5,1,1,""],get_unique_successors:[5,1,1,""],has_location:[5,1,1,""],id:[5,2,1,""],input_pins:[5,2,1,""],is_gnd_gate:[5,1,1,""],is_vcc_gate:[5,1,1,""],location:[5,2,1,""],location_x:[5,2,1,""],location_y:[5,2,1,""],mark_gnd_gate:[5,1,1,""],mark_vcc_gate:[5,1,1,""],module:[5,2,1,""],name:[5,2,1,""],netlist:[5,2,1,""],output_pins:[5,2,1,""],predecessors:[5,2,1,""],set_data:[5,1,1,""],set_location:[5,1,1,""],set_location_x:[5,1,1,""],set_location_y:[5,1,1,""],set_name:[5,1,1,""],successors:[5,2,1,""],type:[5,2,1,""],unique_predecessors:[5,2,1,""],unique_successors:[5,2,1,""],unmark_gnd_gate:[5,1,1,""],unmark_vcc_gate:[5,1,1,""]},"hal_py.GateLibrary":{__init__:[6,1,1,""],add_include:[6,1,1,""],contains_gate_type:[6,1,1,""],gate_types:[6,2,1,""],get_gate_types:[6,1,1,""],get_gnd_gate_types:[6,1,1,""],get_includes:[6,1,1,""],get_name:[6,1,1,""],get_path:[6,1,1,""],get_vcc_gate_types:[6,1,1,""],gnd_gate_types:[6,2,1,""],includes:[6,2,1,""],name:[6,2,1,""],path:[6,2,1,""],vcc_gate_types:[6,2,1,""]},"hal_py.GateType":{BaseType:[7,0,1,""],__init__:[7,1,1,""],add_boolean_function:[7,1,1,""],add_boolean_functions:[7,1,1,""],add_input_pin:[7,1,1,""],add_input_pins:[7,1,1,""],add_output_pin:[7,1,1,""],add_output_pins:[7,1,1,""],assign_input_pin_group:[7,1,1,""],assign_input_pin_groups:[7,1,1,""],assign_output_pin_group:[7,1,1,""],assign_output_pin_groups:[7,1,1,""],base_type:[7,2,1,""],boolean_functions:[7,2,1,""],get_base_type:[7,1,1,""],get_boolean_functions:[7,1,1,""],get_id:[7,1,1,""],get_input_pin_groups:[7,1,1,""],get_input_pins:[7,1,1,""],get_name:[7,1,1,""],get_output_pin_groups:[7,1,1,""],get_output_pins:[7,1,1,""],id:[7,2,1,""],input_pin_groups:[7,2,1,""],input_pins:[7,2,1,""],name:[7,2,1,""],output_pin_groups:[7,2,1,""],output_pins:[7,2,1,""]},"hal_py.GateType.BaseType":{name:[7,2,1,""]},"hal_py.GateTypeLut":{BaseType:[8,0,1,""],__init__:[8,1,1,""],add_boolean_function:[8,1,1,""],add_boolean_functions:[8,1,1,""],add_input_pin:[8,1,1,""],add_input_pins:[8,1,1,""],add_output_from_init_string_pin:[8,1,1,""],add_output_pin:[8,1,1,""],add_output_pins:[8,1,1,""],assign_input_pin_group:[8,1,1,""],assign_input_pin_groups:[8,1,1,""],assign_output_pin_group:[8,1,1,""],assign_output_pin_groups:[8,1,1,""],base_type:[8,2,1,""],boolean_functions:[8,2,1,""],config_data_ascending_order:[8,2,1,""],config_data_category:[8,2,1,""],config_data_identifier:[8,2,1,""],get_base_type:[8,1,1,""],get_boolean_functions:[8,1,1,""],get_config_data_category:[8,1,1,""],get_config_data_identifier:[8,1,1,""],get_id:[8,1,1,""],get_input_pin_groups:[8,1,1,""],get_input_pins:[8,1,1,""],get_name:[8,1,1,""],get_output_from_init_string_pins:[8,1,1,""],get_output_pin_groups:[8,1,1,""],get_output_pins:[8,1,1,""],id:[8,2,1,""],input_pin_groups:[8,2,1,""],input_pins:[8,2,1,""],is_config_data_ascending_order:[8,1,1,""],name:[8,2,1,""],output_from_init_string_pins:[8,2,1,""],output_pin_groups:[8,2,1,""],output_pins:[8,2,1,""],set_config_data_ascending_order:[8,1,1,""],set_config_data_category:[8,1,1,""],set_config_data_identifier:[8,1,1,""]},"hal_py.GateTypeLut.BaseType":{name:[8,2,1,""]},"hal_py.GateTypeSequential":{BaseType:[9,0,1,""],SetResetBehavior:[9,0,1,""],__init__:[9,1,1,""],add_boolean_function:[9,1,1,""],add_boolean_functions:[9,1,1,""],add_clock_pin:[9,1,1,""],add_input_pin:[9,1,1,""],add_input_pins:[9,1,1,""],add_inverted_state_output_pin:[9,1,1,""],add_output_pin:[9,1,1,""],add_output_pins:[9,1,1,""],add_state_output_pin:[9,1,1,""],assign_input_pin_group:[9,1,1,""],assign_input_pin_groups:[9,1,1,""],assign_output_pin_group:[9,1,1,""],assign_output_pin_groups:[9,1,1,""],base_type:[9,2,1,""],boolean_functions:[9,2,1,""],clock_pins:[9,2,1,""],get_base_type:[9,1,1,""],get_boolean_functions:[9,1,1,""],get_clock_pins:[9,1,1,""],get_id:[9,1,1,""],get_init_data_category:[9,1,1,""],get_init_data_identifier:[9,1,1,""],get_input_pin_groups:[9,1,1,""],get_input_pins:[9,1,1,""],get_inverted_state_output_pins:[9,1,1,""],get_name:[9,1,1,""],get_output_pin_groups:[9,1,1,""],get_output_pins:[9,1,1,""],get_set_reset_behavior:[9,1,1,""],get_state_output_pins:[9,1,1,""],id:[9,2,1,""],init_data_category:[9,2,1,""],init_data_identifier:[9,2,1,""],input_pin_groups:[9,2,1,""],input_pins:[9,2,1,""],inverted_state_output_pins:[9,2,1,""],name:[9,2,1,""],output_pin_groups:[9,2,1,""],output_pins:[9,2,1,""],set_init_data_category:[9,1,1,""],set_init_data_identifier:[9,1,1,""],set_set_reset_behavior:[9,1,1,""],state_output_pins:[9,2,1,""]},"hal_py.GateTypeSequential.BaseType":{name:[9,2,1,""]},"hal_py.GateTypeSequential.SetResetBehavior":{name:[9,2,1,""]},"hal_py.Grouping":{assign_gate:[11,1,1,""],assign_gate_by_id:[11,1,1,""],assign_module:[11,1,1,""],assign_module_by_id:[11,1,1,""],assign_net:[11,1,1,""],assign_net_by_id:[11,1,1,""],contains_gate:[11,1,1,""],contains_gate_by_id:[11,1,1,""],contains_module:[11,1,1,""],contains_module_by_id:[11,1,1,""],contains_net:[11,1,1,""],contains_net_by_id:[11,1,1,""],gate_ids:[11,2,1,""],gates:[11,2,1,""],get_gate_ids:[11,1,1,""],get_gates:[11,1,1,""],get_id:[11,1,1,""],get_module_ids:[11,1,1,""],get_modules:[11,1,1,""],get_name:[11,1,1,""],get_net_ids:[11,1,1,""],get_netlist:[11,1,1,""],get_nets:[11,1,1,""],id:[11,2,1,""],module_ids:[11,2,1,""],modules:[11,2,1,""],name:[11,2,1,""],net_ids:[11,2,1,""],netlist:[11,2,1,""],nets:[11,2,1,""],remove_gate:[11,1,1,""],remove_gate_by_id:[11,1,1,""],remove_module:[11,1,1,""],remove_module_by_id:[11,1,1,""],remove_net:[11,1,1,""],remove_net_by_id:[11,1,1,""],set_name:[11,1,1,""]},"hal_py.HalPath":{__init__:[23,1,1,""],__str__:[23,1,1,""]},"hal_py.Module":{assign_gate:[17,1,1,""],contains_gate:[17,1,1,""],contains_module:[17,1,1,""],data:[17,2,1,""],data_keys:[17,2,1,""],delete_data:[17,1,1,""],gates:[17,2,1,""],get_data:[17,1,1,""],get_data_by_key:[17,1,1,""],get_data_keys:[17,1,1,""],get_gate_by_id:[17,1,1,""],get_gates:[17,1,1,""],get_grouping:[17,1,1,""],get_id:[17,1,1,""],get_input_nets:[17,1,1,""],get_input_port_name:[17,1,1,""],get_input_port_names:[17,1,1,""],get_input_port_net:[17,1,1,""],get_internal_nets:[17,1,1,""],get_name:[17,1,1,""],get_netlist:[17,1,1,""],get_output_nets:[17,1,1,""],get_output_port_name:[17,1,1,""],get_output_port_names:[17,1,1,""],get_output_port_net:[17,1,1,""],get_parent_module:[17,1,1,""],get_submodules:[17,1,1,""],get_type:[17,1,1,""],id:[17,2,1,""],input_nets:[17,2,1,""],input_port_names:[17,2,1,""],internal_nets:[17,2,1,""],name:[17,2,1,""],netlist:[17,2,1,""],output_nets:[17,2,1,""],output_port_names:[17,2,1,""],parent_module:[17,2,1,""],remove_gate:[17,1,1,""],set_data:[17,1,1,""],set_input_port_name:[17,1,1,""],set_name:[17,1,1,""],set_output_port_name:[17,1,1,""],set_parent_module:[17,1,1,""],set_type:[17,1,1,""],submodules:[17,2,1,""],type:[17,2,1,""]},"hal_py.Net":{add_destination:[18,1,1,""],add_source:[18,1,1,""],data:[18,2,1,""],data_keys:[18,2,1,""],delete_data:[18,1,1,""],destinations:[18,2,1,""],get_data:[18,1,1,""],get_data_by_key:[18,1,1,""],get_data_keys:[18,1,1,""],get_destinations:[18,1,1,""],get_grouping:[18,1,1,""],get_id:[18,1,1,""],get_name:[18,1,1,""],get_netlist:[18,1,1,""],get_num_of_destinations:[18,1,1,""],get_num_of_sources:[18,1,1,""],get_source:[18,1,1,""],get_sources:[18,1,1,""],id:[18,2,1,""],is_a_destination:[18,1,1,""],is_a_source:[18,1,1,""],is_global_input_net:[18,1,1,""],is_global_output_net:[18,1,1,""],is_unrouted:[18,1,1,""],mark_global_input_net:[18,1,1,""],mark_global_output_net:[18,1,1,""],name:[18,2,1,""],netlist:[18,2,1,""],num_of_destinations:[18,2,1,""],num_of_sources:[18,2,1,""],remove_destination:[18,1,1,""],remove_source:[18,1,1,""],set_data:[18,1,1,""],set_name:[18,1,1,""],sources:[18,2,1,""],unmark_global_input_net:[18,1,1,""],unmark_global_output_net:[18,1,1,""]},"hal_py.Netlist":{GateLibrary:[19,2,1,""],clear_caches:[19,1,1,""],create_gate:[19,1,1,""],create_grouping:[19,1,1,""],create_module:[19,1,1,""],create_net:[19,1,1,""],delete_gate:[19,1,1,""],delete_grouping:[19,1,1,""],delete_module:[19,1,1,""],delete_net:[19,1,1,""],design_name:[19,2,1,""],device_name:[19,2,1,""],gates:[19,2,1,""],get_design_name:[19,1,1,""],get_device_name:[19,1,1,""],get_free_gate_ids:[19,1,1,""],get_free_grouping_ids:[19,1,1,""],get_free_module_ids:[19,1,1,""],get_free_net_ids:[19,1,1,""],get_gate_by_id:[19,1,1,""],get_gate_library:[19,1,1,""],get_gates:[19,1,1,""],get_global_input_nets:[19,1,1,""],get_global_output_nets:[19,1,1,""],get_gnd_gates:[19,1,1,""],get_grouping_by_id:[19,1,1,""],get_groupings:[19,1,1,""],get_id:[19,1,1,""],get_input_filename:[19,1,1,""],get_module_by_id:[19,1,1,""],get_modules:[19,1,1,""],get_net_by_id:[19,1,1,""],get_nets:[19,1,1,""],get_next_gate_id:[19,1,1,""],get_next_grouping_id:[19,1,1,""],get_next_module_id:[19,1,1,""],get_next_net_id:[19,1,1,""],get_top_module:[19,1,1,""],get_unique_gate_id:[19,1,1,""],get_unique_grouping_id:[19,1,1,""],get_unique_module_id:[19,1,1,""],get_unique_net_id:[19,1,1,""],get_used_gate_ids:[19,1,1,""],get_used_grouping_ids:[19,1,1,""],get_used_module_ids:[19,1,1,""],get_used_net_ids:[19,1,1,""],get_vcc_gates:[19,1,1,""],global_input_nets:[19,2,1,""],global_output_nets:[19,2,1,""],gnd_gates:[19,2,1,""],groupings:[19,2,1,""],id:[19,2,1,""],input_filename:[19,2,1,""],is_gate_in_netlist:[19,1,1,""],is_global_input_net:[19,1,1,""],is_global_output_net:[19,1,1,""],is_gnd_gate:[19,1,1,""],is_grouping_in_netlist:[19,1,1,""],is_module_in_netlist:[19,1,1,""],is_net_in_netlist:[19,1,1,""],is_vcc_gate:[19,1,1,""],mark_global_input_net:[19,1,1,""],mark_global_output_net:[19,1,1,""],mark_gnd_gate:[19,1,1,""],mark_vcc_gate:[19,1,1,""],modules:[19,2,1,""],nets:[19,2,1,""],set_design_name:[19,1,1,""],set_device_name:[19,1,1,""],set_free_gate_ids:[19,1,1,""],set_free_grouping_ids:[19,1,1,""],set_free_module_ids:[19,1,1,""],set_free_net_ids:[19,1,1,""],set_id:[19,1,1,""],set_input_filename:[19,1,1,""],set_next_gate_id:[19,1,1,""],set_next_grouping_id:[19,1,1,""],set_next_module_id:[19,1,1,""],set_next_net_id:[19,1,1,""],set_used_gate_ids:[19,1,1,""],set_used_grouping_ids:[19,1,1,""],set_used_module_ids:[19,1,1,""],set_used_net_ids:[19,1,1,""],top_module:[19,2,1,""],unmark_global_input_net:[19,1,1,""],unmark_global_output_net:[19,1,1,""],unmark_gnd_gate:[19,1,1,""],unmark_vcc_gate:[19,1,1,""],vcc_gates:[19,2,1,""]},"hal_py.NetlistFactory":{create_netlist:[20,5,1,""],load_netlist:[20,5,1,""],load_netlists:[20,5,1,""]},"hal_py.NetlistUtils":{copy_netlist:[22,5,1,""],get_subgraph_function:[22,5,1,""]},"hal_py.hdl_writer_manager":{get_cli_options:[15,5,1,""],write:[15,5,1,""]},"hal_py.plugin_manager":{get_plugin_instance:[24,5,1,""],get_plugin_names:[24,5,1,""],load:[24,5,1,""],load_all_plugins:[24,5,1,""],unload:[24,5,1,""],unload_all_plugins:[24,5,1,""]},"netlist_simulator.Event":{__eq__:[21,1,1,""],__init__:[21,1,1,""],__lt__:[21,1,1,""],affected_net:[21,2,1,""],id:[21,2,1,""],new_value:[21,2,1,""],time:[21,2,1,""]},"netlist_simulator.NetlistSimulator":{add_clock_frequency:[21,1,1,""],add_clock_period:[21,1,1,""],add_gates:[21,1,1,""],generate_vcd:[21,1,1,""],get_gates:[21,1,1,""],get_input_nets:[21,1,1,""],get_output_nets:[21,1,1,""],get_simulation_state:[21,1,1,""],get_simulation_timeout:[21,1,1,""],load_initial_values:[21,1,1,""],reset:[21,1,1,""],set_input:[21,1,1,""],set_iteration_timeout:[21,1,1,""],set_simulation_state:[21,1,1,""],simulate:[21,1,1,""]},"netlist_simulator.NetlistSimulatorPlugin":{create_simulator:[21,1,1,""],get_name:[21,1,1,""],get_version:[21,1,1,""],name:[21,2,1,""],version:[21,2,1,""]},"netlist_simulator.SignalValue":{name:[21,2,1,""]},"netlist_simulator.Simulation":{__init__:[21,1,1,""],add_event:[21,1,1,""],get_events:[21,1,1,""],get_net_value:[21,1,1,""]},graph_algorithm:{GraphAlgorithmPlugin:[10,0,1,""]},hal_gui:{GuiApi:[12,0,1,""]},hal_py:{BasePluginInterface:[0,0,1,""],BooleanFunction:[1,0,1,""],CoreUtils:[2,4,0,"-"],DataContainer:[3,0,1,""],Endpoint:[4,0,1,""],GUIPluginInterface:[13,0,1,""],Gate:[5,0,1,""],GateLibrary:[6,0,1,""],GateType:[7,0,1,""],GateTypeLut:[8,0,1,""],GateTypeSequential:[9,0,1,""],Grouping:[11,0,1,""],HalPath:[23,0,1,""],Module:[17,0,1,""],Net:[18,0,1,""],Netlist:[19,0,1,""],NetlistFactory:[20,4,0,"-"],NetlistUtils:[22,4,0,"-"],hdl_writer_manager:[15,4,0,"-"],plugin_manager:[24,4,0,"-"]},netlist_simulator:{Event:[21,0,1,""],NetlistSimulator:[21,0,1,""],NetlistSimulatorPlugin:[21,0,1,""],SignalValue:[21,0,1,""],Simulation:[21,0,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","attribute","Python attribute"],"3":["py","staticmethod","Python static method"],"4":["py","module","Python module"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:attribute","3":"py:staticmethod","4":"py:module","5":"py:function"},terms:{"1st":5,"2nd":5,"boolean":[5,6,7,8,9,14,22],"case":[9,21],"class":[0,1,3,4,5,6,7,8,9,10,11,12,13,17,18,19,21,23],"default":[2,9,19,24],"float":[5,19],"function":[2,5,6,7,8,9,12,14,18,19,20,22,23,24],"int":[5,7,8,9,10,11,12,17,18,19,21],"new":[1,5,7,8,9,11,17,18,19,20,21],"return":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,17,18,19,20,21,22,24],"static":[1,2],"true":[1,3,4,5,6,8,11,12,13,15,17,18,19,21,24],"try":2,AND:1,For:[17,21],IDs:[10,11,19,22],NOT:1,ONE:[1,21],The:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,17,18,19,20,21,22,24],Use:[2,18,21],Useful:21,__and__:1,__call__:1,__eq__:[1,21],__iand__:1,__init__:[1,4,6,7,8,9,21,23],__invert__:1,__ior__:1,__ixor__:1,__lt__:21,__ne__:1,__or__:1,__str__:[1,23],__xor__:1,abort:[18,21],about:[5,7,8,9,18,19],accur:4,act:11,activ:9,add:[3,5,6,7,8,9,17,18,19,21],add_boolean_funct:[5,7,8,9],add_clock_frequ:21,add_clock_period:21,add_clock_pin:9,add_destin:18,add_ev:21,add_gat:21,add_includ:6,add_input_pin:[7,8,9],add_inverted_state_output_pin:9,add_output_from_init_string_pin:8,add_output_pin:[7,8,9],add_sourc:18,add_state_output_pin:9,added:[12,17,21],addit:[8,9],advanc:21,affect:21,affected_net:21,algorithm:[1,25],all:[1,3,5,6,7,8,9,11,12,17,18,19,21,22,24],allow:11,alphabet:1,alreadi:11,also:[1,17],alwai:1,ani:11,anoth:[1,11,17],api:25,appli:[1,11,17,19,21],applic:19,arg0:[1,21,23],arg:[1,12,18,19,20,23],ascend:[1,8],assign:[5,7,8,9,11,17,18,19],assign_g:[11,17],assign_gate_by_id:11,assign_input_pin_group:[7,8,9],assign_modul:11,assign_module_by_id:11,assign_net:11,assign_net_by_id:11,assign_output_pin_group:[7,8,9],associ:[3,4,5,11,17,18,19,21,24],automat:[8,17,19,21,22],avail:5,base:[2,5,7,8,9,14,17,18],base_typ:[7,8,9],baseplugininterfac:[0,24],basetyp:[7,8,9],basic:24,been:19,befor:[1,12,21],beforehand:[8,9],behavior:9,being:10,between:21,binari:2,bit:8,bool:[1,3,4,5,6,8,11,12,13,15,17,18,19,21,24],boolean_funct:[5,7,8,9],booleanfunct:[1,5,7,8,9,22],both:[1,9,21],bracket:1,bunction:1,cach:19,call:[13,19,24],callabl:[5,11,17,18,19],camera:12,can:[1,5,7,8,9,10,11,17,18,19,21],carri:21,categori:[3,5,8,9,17,18],caus:21,cell:10,chang:[9,17],channel:[3,5,17,18],check:[1,4,5,6,11,17,18,19],claus:1,clear:[12,19],clear_cach:19,clear_current_select:12,clock:[9,21],clock_net:21,clock_pin:9,cluster:10,collect:[6,8,9,11],combin:[1,22],combinatori:[7,8,9],command:15,commun:10,compon:10,compris:[1,4],condit:[11,17,19],config:2,config_data_ascending_ord:8,config_data_categori:8,config_data_identifi:8,configur:2,connect:[4,5,9,10,11,22],consid:21,constant:[1,5],construct:[1,6,7,8,9,21],contain:[1,2,5,6,7,8,9,11,14,17,18,19],contains_g:[11,17],contains_gate_by_id:11,contains_gate_typ:6,contains_modul:[11,17],contains_module_by_id:11,contains_net:11,contains_net_by_id:11,content:16,contrast:11,control:21,convert:[1,8],coordin:[5,19],copi:22,copy_netlist:22,core:16,coreutil:2,correspond:[6,17],creat:[19,20,21],create_g:19,create_group:19,create_modul:19,create_net:19,create_netlist:20,create_simul:21,current:[2,12,19,21],custom:21,cut:10,cycl:21,data:[5,8,9,14,17,18],data_kei:[3,5,17,18],data_typ:[3,5,17,18],datacontain:[3,5,17,18],declar:[8,9],deep:22,defin:[5,9,15,22],delet:[3,5,17,18],delete_data:[3,5,17,18],delete_g:19,delete_group:19,delete_modul:19,delete_net:19,depend:9,deprec:18,depth:10,describ:[1,6,9],deselect:12,deselect_all_item:12,deselect_g:12,deselect_modul:12,deselect_net:12,design:[11,19],design_nam:19,desir:24,destin:[4,17,18,21],determin:[2,12],devic:19,device_nam:19,dict:[1,3,5,6,7,8,9,10,17,18,21],dictionari:[5,17],direct:[5,17],directori:[2,24],directory_nam:24,disabl:21,disjunct:1,dispatch:15,distanc:10,divice_nam:19,dnf:1,doe:[11,21],done:21,driven:[18,21],durat:21,dure:[1,11,21],each:[1,8,10,11,17,20],edg:21,either:[7,8,9,17],element:[18,21],empti:[1,5,18,20,24],enabl:17,end:21,end_tim:21,endpoint:[5,14,18],entir:22,entiti:[3,11],entri:[3,5,17,18],environ:2,equal:[1,21],error:[1,18,19],evalu:1,event:[3,5,17,18,21],ever:19,exampl:[1,5,21],exec:13,execut:2,exist:[3,5,7,8,9,12,17,18],explicit:[3,5,17,18],explicitli:19,explor:11,exponenti:1,express:1,extract:1,factori:14,fail:11,fals:[1,3,4,5,6,8,11,12,17,18,19,21,24],fan:5,fan_in_net:5,fan_out_net:5,fast:10,faster:18,file:[2,6,15,19,20,21,24],file_nam:15,file_path:24,filenam:19,filter:[5,11,17,18,19],find:[2,8,9],first:[1,5,17,18],fit:12,flip:[10,21],flop:[10,21],follow:19,forc:[3,5,11,17,18],form:1,format:15,found:[1,17],foundat:8,fpga:21,framework:24,freed:19,frequenc:21,from:[1,3,5,6,7,8,9,10,11,17,18,19,20,21],from_str:1,func:5,further:10,gate:[2,4,10,11,12,14,17,18,19,20,21,22],gate_id:[11,12,19],gate_librari:20,gate_library_fil:20,gate_typ:[5,6,19],gatelibrari:[6,19,20],gatetyp:[5,6,7,8,9,19],gatetypelut:8,gatetypesequenti:9,gener:[8,9,13,21,22],generate_vcd:21,gerner:21,get:[0,1,2,3,4,5,6,7,8,9,10,11,12,17,18,19,21,22,24],get_base_directori:2,get_base_typ:[7,8,9],get_binary_directori:2,get_boolean_funct:[5,7,8,9],get_cli_opt:15,get_clock_pin:9,get_commun:10,get_communities_fast_greedi:10,get_communities_multilevel:10,get_communities_spinglass:10,get_config_data_categori:8,get_config_data_identifi:8,get_data:[3,5,17,18],get_data_by_kei:[3,5,17,18],get_data_kei:[3,5,17,18],get_default_log_directori:2,get_design_nam:19,get_destin:18,get_device_nam:19,get_dnf_claus:1,get_ev:21,get_fan_in_endpoint:5,get_fan_in_net:5,get_fan_out_endpoint:5,get_fan_out_net:5,get_free_gate_id:19,get_free_grouping_id:19,get_free_module_id:19,get_free_net_id:19,get_gat:[4,10,11,17,19,21],get_gate_by_id:[17,19],get_gate_id:11,get_gate_librari:19,get_gate_library_directori:2,get_gate_typ:6,get_global_input_net:19,get_global_output_net:19,get_gnd_gat:19,get_gnd_gate_typ:6,get_graph_cut:10,get_group:[5,17,18,19],get_grouping_by_id:19,get_id:[5,7,8,9,11,17,18,19],get_includ:6,get_init_data_categori:9,get_init_data_identifi:9,get_input_filenam:19,get_input_net:[17,21],get_input_pin:[5,7,8,9],get_input_pin_group:[7,8,9],get_input_port_nam:17,get_input_port_net:17,get_internal_net:17,get_inverted_state_output_pin:9,get_library_directori:2,get_loc:5,get_location_i:5,get_location_x:5,get_modul:[5,11,19],get_module_by_id:19,get_module_id:11,get_nam:[0,5,6,7,8,9,10,11,17,18,21],get_net:[4,11,19],get_net_by_id:19,get_net_id:11,get_net_valu:21,get_netlist:[5,11,17,18],get_next_gate_id:19,get_next_grouping_id:19,get_next_module_id:19,get_next_net_id:19,get_num_of_destin:18,get_num_of_sourc:18,get_output_from_init_string_pin:8,get_output_net:[17,21],get_output_pin:[5,7,8,9],get_output_pin_group:[7,8,9],get_output_port_nam:17,get_output_port_net:17,get_parent_modul:17,get_path:6,get_pin:4,get_plugin_directori:2,get_plugin_inst:24,get_plugin_nam:24,get_predecessor:5,get_selected_g:12,get_selected_gate_id:12,get_selected_item:12,get_selected_item_id:12,get_selected_modul:12,get_selected_module_id:12,get_selected_net:12,get_selected_net_id:12,get_set_reset_behavior:9,get_share_directori:2,get_simulation_st:21,get_simulation_timeout:21,get_sourc:18,get_state_output_pin:9,get_strongly_connected_compon:10,get_subgraph_funct:22,get_submodul:17,get_successor:5,get_top_modul:19,get_truth_t:1,get_typ:[5,17],get_unique_gate_id:19,get_unique_grouping_id:19,get_unique_module_id:19,get_unique_net_id:19,get_unique_predecessor:5,get_unique_successor:5,get_used_gate_id:19,get_used_grouping_id:19,get_used_module_id:19,get_used_net_id:19,get_user_config_directori:2,get_user_share_directori:2,get_vari:1,get_vcc_gat:19,get_vcc_gate_typ:6,get_vers:[0,10,21],given:[1,3,5,6,17,18,19,20,21,22],global:[5,17,18,19,21],global_input_net:19,global_output_net:19,gnd:[5,6,19],gnd_gate:19,gnd_gate_typ:6,graph:[12,25],graph_algorithm:10,graphalgorithmplugin:10,greedi:10,group:[5,7,8,9,14,17,18,19,22],group_nam:[7,8,9],grouping_id:19,gui:[3,5,14,17,18,25],guiapi:12,guiplugininterfac:13,hal:[2,4,5,7,8,9,15,16,17,18,19,20,21,22,24],hal_base_path:2,hal_fil:20,hal_gui:12,hal_path:[2,6,15,19,20,21,24],hal_pi:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,15,17,18,19,20,21,22,23,24],halpath:[2,6,15,19,20,21,23,24],handl:[1,7,8,9,21],happen:21,has:[8,9,17,18],has_loc:5,have:[19,21],hdl:[2,14],hdl_file:20,hdl_writer_manag:15,help:4,hertz:21,hierarch:[11,17],high:21,highest:19,hold:3,home:2,identifi:[8,9,22],ids:[12,19],igraph:10,imped:21,inc:6,includ:[1,5,6,17,18,19,22],index:[7,8,9,10,16],index_to_pin:[7,8,9],indic:[7,8,9],indirect:17,infinit:21,influenc:21,info:[3,5,17,18],inform:[5,7,8,9,18,19],init_data_categori:9,init_data_identifi:9,initi:[4,8,9,21,24],input:[1,4,5,7,8,9,15,17,18,19,21,22],input_filenam:19,input_net:17,input_pin:[5,7,8,9],input_pin_group:[7,8,9],input_port_nam:17,inspect:21,instal:2,instanc:[1,21],instead:18,intend:1,interfac:[14,15,24],intern:[7,8,9,17,19,21],internal_net:17,interpret:[1,2],invalid:19,invert:9,inverted_state_output_pin:9,is_a_destin:18,is_a_sourc:18,is_config_data_ascending_ord:8,is_constant_on:1,is_constant_zero:1,is_destin:4,is_destination_pin:4,is_dnf:1,is_empti:1,is_gate_in_netlist:19,is_global_input_net:[18,19],is_global_output_net:[18,19],is_gnd_gat:[5,19],is_grouping_in_netlist:19,is_module_in_netlist:19,is_net_in_netlist:19,is_sourc:4,is_source_pin:4,is_unrout:18,is_vcc_gat:[5,19],item:12,iter:21,its:[2,5,6,7,8,9,17,18,19,22,24],kei:[3,5,17,18],known:1,kwarg:[1,12,18,19,20,23],lambda:[5,11,17,18,19],latch:[7,8,9],layout:5,least:17,leav:[5,18],len:18,level:[3,5,17,18],libnetlist_simul:21,librari:[2,14,19,20],like:5,limit:10,line:15,list:[1,2,3,5,6,7,8,9,10,11,12,15,17,18,19,20,21,22,24],load:[20,21,24],load_all_plugin:24,load_initial_valu:21,load_netlist:20,local:2,locat:5,location_i:5,location_x:5,log:[2,3,5,17,18],log_with_info_level:[3,5,17,18],logic:[1,21],loop:21,loos:17,lut:[7,9,14],mai:[3,5,11,17,18,21],make:22,manag:14,map:[5,17,21],mark:[5,18,19],mark_global_input_net:[18,19],mark_global_output_net:[18,19],mark_gnd_gat:[5,19],mark_vcc_gat:[5,19],match:[1,11,17,19,20],maximum:21,mccluskei:1,mechan:9,member:[1,7,8,9,21],memori:10,might:1,modifi:12,modul:[5,11,12,14,16,19,22],module_id:[11,12,19],move:17,multi:18,multilevel:10,multipl:[5,7,8,9],must:[1,9],name:[0,1,4,5,6,7,8,9,10,11,17,18,19,21,24],navigate_to_select:12,need:11,neg:5,negat:1,net:[4,5,11,12,14,17,19,21,22],net_id:[11,12,19],netlist:[3,5,6,8,10,11,13,14,15,17,18,25],netlist_simul:21,netlistfactori:20,netlistsimul:21,netlistsimulatorplugin:21,netlistutil:22,new_par:17,new_valu:21,new_variable_nam:1,next:19,none:[1,5,6,7,8,9,11,12,17,18,19,20,21,23],normal:1,nullptr:19,num_of_destin:18,num_of_sourc:18,number:[1,10,18,21],object:[2,6,13],old:[1,17],old_variable_nam:1,one:[1,5,11,17,21],onli:[5,11,17,19,21],only_custom_funct:5,oper:[1,10],optim:1,option:15,order:[1,8],ordered_vari:1,other:[17,21],otherwis:[1,2,3,4,5,6,8,11,17,18,19,20,21,24],out:[5,18],output:[1,4,5,7,8,9,17,18,19,21,22],output_from_init_string_pin:8,output_net:[17,22],output_pin:[5,7,8,9],output_pin_group:[7,8,9],output_port_nam:17,outsid:[17,21],overload:[1,12,18,19,20,23],overwrit:[3,5,11,17,18],page:16,pair:1,param:[1,5,12,18,19,20],paramet:[1,2,3,5,6,7,8,9,10,11,13,15,17,18,19,20,21,22,24],parent:[2,17,19],parent_modul:17,pars:[1,6],part:[1,6,21],pass:12,path:[2,6,14,19,20,21,24],period:21,physic:5,picosecond:21,pin:[4,5,6,7,8,9,18],pin_group:[7,8,9],pin_nam:[7,8,9],place:1,plain:1,plugin:[2,10,14,16,21],plugin_manag:24,plugin_nam:24,point:[10,21],port:[5,17],port_nam:17,posit:[5,12],potenti:[5,18],pre:20,preced:1,predecessor:5,previou:[11,12,17],previous:19,print:18,process:[17,21],programopt:15,provid:[2,8,9],pybind11_builtin:[8,9],pybind11_object:[8,9],python3:2,quin:1,read:8,recurs:17,recus:17,regard:[5,17],regist:19,rel:2,relat:11,releas:24,remov:[1,11,17,18,19,21],remove_destin:18,remove_g:[11,17],remove_gate_by_id:11,remove_modul:11,remove_module_by_id:11,remove_net:11,remove_net_by_id:11,remove_sourc:18,remove_unknown_vari:1,renam:1,replac:1,repres:[1,5,7,8,9,10,19,21,22],represent:1,requir:[6,19],reserv:19,reset:[5,9,21],resourc:24,respect:[4,5],ressourc:24,result:[1,11,17,19,22],rise:21,rtype:[1,18,19,20],run:[10,13],runtim:1,rytp:9,same:9,sb1:9,sb2:9,scc:10,scroll:12,search:[2,16,17,24],see:4,select:12,select_g:12,select_modul:12,select_net:12,self:[0,1,3,4,5,6,7,8,9,10,11,12,13,17,18,19,21,23],sequenti:[7,8,14,21],set:[5,8,9,10,11,15,17,18,19,21,24],set_config_data_ascending_ord:8,set_config_data_categori:8,set_config_data_identifi:8,set_data:[3,5,17,18],set_design_nam:19,set_device_nam:19,set_free_gate_id:19,set_free_grouping_id:19,set_free_module_id:19,set_free_net_id:19,set_id:19,set_init_data_categori:9,set_init_data_identifi:9,set_input:21,set_input_filenam:19,set_input_port_nam:17,set_iteration_timeout:21,set_loc:5,set_location_i:5,set_location_x:5,set_nam:[5,11,17,18],set_next_gate_id:19,set_next_grouping_id:19,set_next_module_id:19,set_next_net_id:19,set_output_port_nam:17,set_parent_modul:17,set_set_reset_behavior:9,set_simulation_st:21,set_typ:17,set_used_gate_id:19,set_used_grouping_id:19,set_used_module_id:19,set_used_net_id:19,setresetbehavior:9,share:2,should:22,show:12,signal:[9,21],signalvalu:21,signatur:4,simul:25,sinc:[1,18,19],singl:[1,11,21,24],some:17,sort:[17,21],sourc:[2,4,17,18],source_fil:2,spare:19,specif:[5,7,10,21],specifi:[3,5,6,7,8,9,10,11,17,18,19,20,21,24],spin:10,spinglass:10,ssc:10,standard:[8,9],start:[10,21],start_at_zero:21,start_tim:21,state:[9,21],state_output_pin:9,store:[3,5,11,17,18],str:[0,1,3,4,5,6,7,8,9,10,11,15,17,18,19,20,21,23,24],string:[1,8],strongli:10,subgraph:22,subgraph_g:22,submodul:17,substitut:1,succ:19,success:[3,5,11,13,15,17,18,19,20,21,24],successor:5,suppli:[1,5,18],support:[1,21],tabl:1,take:21,target:[15,19,22],temporarili:11,term:1,termin:10,terminal_gate_typ:10,test:21,than:18,therefor:17,thi:[1,5,6,11,17,18,19,21],thu:1,time:[9,17,21],timefram:21,timeout:21,to_dnf:1,toggl:9,top:[17,19],top_modul:19,trace:[3,5,17,18],treat:21,truth:1,tupl:[1,3,5,9,12,17,18],two:[1,21],typ:[7,8,9],type:[0,1,2,3,4,5,6,10,11,12,13,14,15,17,18,19,20,21,22,24],typic:19,undefin:[1,21],underli:19,unequ:1,uniqu:[5,7,8,9,11,17,18,19,21,24],unique_predecessor:5,unique_successor:5,unix:2,unknown:[5,21],unload:24,unload_all_plugin:24,unmark:[5,18,19],unmark_global_input_net:[18,19],unmark_global_output_net:[18,19],unmark_gnd_g:[5,19],unmark_vcc_g:[5,19],unrout:18,unstructur:11,use:[2,9],used:[1,5,8,9,19],user:2,uses:22,using:[1,5,20],usual:5,util:[1,14],valid:5,valu:[1,3,5,9,17,18,19,21],variabl:[1,2,22],variable_nam:1,vcc:[5,6,19],vcc_gate:19,vcc_gate_typ:6,vcd:21,vector:[1,2,3,5,17,18],verilog:15,version:[0,10,18,21],vhdl:[6,15],via:5,view:12,wai:11,walk:1,warn:[1,18],well:[8,9,17,19],were:5,when:[1,9,21],where:2,whether:[1,4,5,6,11,17,18,19,21],which:[1,5,7,8,9,10,12,17,18,22],which_pin:5,wire:21,within:[11,17,19,22],write:[15,21],writer:14,xor:1,zero:[1,21],zoom:12},titles:["Base Plugin Interface","Boolean Function","Core Utils","Data Container","Endpoint","Gate","Gate Library","Gate Type","Gate Type LUT","Gate Type Sequential","Graph Algorithms","Grouping","GUI API","GUI Plugin Interface","HAL Core Documentation","HDL Writer Manager","hal_py Documentation","Module","Net","Netlist","Netlist Factory","Netlist Simulator","Netlist Utils","HAL Path","Plugin Manager","HAL Plugins Documentation"],titleterms:{"boolean":1,"function":1,algorithm:10,api:12,base:0,contain:3,core:[2,14],data:3,document:[14,16,25],endpoint:4,factori:20,gate:[5,6,7,8,9],graph:10,group:11,gui:[12,13],hal:[14,23,25],hal_pi:16,hdl:15,indic:16,interfac:[0,13],librari:6,lut:8,manag:[15,24],modul:17,net:18,netlist:[19,20,21,22],path:23,plugin:[0,13,24,25],sequenti:9,simul:21,tabl:16,type:[7,8,9],util:[2,22],writer:15}})