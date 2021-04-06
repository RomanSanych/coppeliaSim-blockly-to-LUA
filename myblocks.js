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
};