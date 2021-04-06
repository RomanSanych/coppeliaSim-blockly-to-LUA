Blockly.Lua['getobjecthandle'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  sim.getObjectHandle(value_handle);
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['setlineartargetposition'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_targetposition = Blockly.Lua.valueToCode(block, 'targetPosition', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['setradialtargetposition'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_targetposition = Blockly.Lua.valueToCode(block, 'targetPosition', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['setobjecttargetvelocity'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_velocity = Blockly.Lua.valueToCode(block, 'velocity', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['syscall_threadmain'] = function(block) {
  var statements_maincode = Blockly.Lua.statementToCode(block, 'mainCode');
  // TODO: Assemble Lua into code variable.
  var code = '...\n';
  return code;
};

Blockly.Lua['readproximitysensor'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};