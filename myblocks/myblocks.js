Blockly.Blocks['getobjecthandle'] = {
  init: function() {
    this.appendValueInput("handle")
        .setCheck("String")
        .appendField("Получить идентификатор (хэндл) объекта");
    this.setOutput(true, null);
    this.setColour(0);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setlineartargetposition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Установить линейное перемещение объекта (мм)");
    this.appendValueInput("handle")
        .setCheck("Number")
        .appendField("Идентификатор объекта");
    this.appendValueInput("targetPosition")
        .setCheck("Number")
        .appendField("Позиция (мм)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['setradialtargetposition'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Установить угол поворота мотора (град)");
    this.appendValueInput("handle")
        .setCheck("Number")
        .appendField("Идентификатор объекта");
    this.appendValueInput("targetPosition")
        .setCheck("Number")
        .appendField("Угол(град)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['genericblock'] = {
  init: function() {
    this.appendValueInput("1")
        .setCheck(null)
        .appendField("123");
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
<<<<<<< Updated upstream
=======
};

Blockly.Lua['getobjecthandle'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'sim.getObjectHandle('+value_handle+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['setlineartargetposition'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_targetposition = Blockly.Lua.valueToCode(block, 'targetPosition', Blockly.Lua.ORDER_ATOMIC);
  var meters=value_targetposition*1000;
  // TODO: Assemble Lua into code variable.
  var code = 'sim.setJointTargerPosition('+value_handle+','+meters+')'+'\n';
  return code;
};

Blockly.Lua['setradialtargetposition'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_targetposition = Blockly.Lua.valueToCode(block, 'targetPosition', Blockly.Lua.ORDER_ATOMIC);
  var radians = (value_targetposition*Math.PI)/180;
  // TODO: Assemble Lua into code variable.
  var code = 
  'sim.setObjectInt32Parameter('+value_handle+','+'2001'+','+'1'+')'+'\n'+
  'sim.setJointTargetPosition('+value_handle+','+radians+')'+'\n';
  return code;
};

Blockly.Lua['setobjecttargetvelocity'] = function(block) {
  var value_handle = Blockly.Lua.valueToCode(block, 'handle', Blockly.Lua.ORDER_ATOMIC);
  var value_velocity = Blockly.Lua.valueToCode(block, 'velocity', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'setJointTargetVelocity('+value_handle+value_velocity+')'+'\n';
  return code;
};

Blockly.Lua['syscall_threadmain'] = function(block) {
  var statements_maincode = Blockly.Lua.statementToCode(block, 'mainCode');
  // TODO: Assemble Lua into code variable.
  var code = 'function sysCall_threadmain()'+'\n'+statements_maincode+'\n'+'end';
  return code;
};

Blockly.Lua['readproximitysensor'] = function(block) {
  var value_name = Blockly.Lua.valueToCode(block, 'NAME', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'sim.readProximitySensor('+value_name+')'+'\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Lua.ORDER_NONE];
};

Blockly.Lua['print'] = function(block) {
  var value_data = Blockly.Lua.valueToCode(block, 'data', Blockly.Lua.ORDER_ATOMIC);
  // TODO: Assemble Lua into code variable.
  var code = 'print('+value_data+')'+'\n';
  return code;
>>>>>>> Stashed changes
};