import Blockly from 'blockly';
import 'blockly/python';

// Block for variable getter.
Blockly.Blocks['variables_get_pixel'] = {
    init: function() {
      this.appendDummyInput()
        .appendField(new Blockly.FieldVariable(
            "VAR_NAME", ['Pixel'], 'Pixel'), "FIELD_NAME");
      this.setOutput(true, 'Pixel');
    }
  };
  
  // Block for variable setter.
  Blockly.Blocks['variables_set_pixel'] = {
    init: function() {
      this.appendValueInput("NAME")
          .setCheck('Pixel')
          .appendField("smet")
          .appendField(new Blockly.FieldVariable(
              "VAR_NAME", null, ['Pixel'], 'Pixel'), "FIELD_NAME")
          .appendField("to");
          this.setPreviousStatement(true, null);
          this.setNextStatement(true, null);
    }
  };
  

Blockly.Blocks['for_each_pixel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("for each")
        .appendField(new Blockly.FieldVariable("pixel", null, ["Pixel"], "Pixel"), "PIXEL_VAR")
        .appendField("in image");
    this.appendStatementInput("Loop")
        .setCheck(null);
    this.setColour(230);
 this.setTooltip("Does something for each pixel in the image.");
 this.setHelpUrl("");
  }
};

Blockly.JavaScript['for_each_pixel'] = function(block) {
    var variable_pixel_var = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PIXEL_VAR'), Blockly.Variables.VARIABLE_CATEGORY_NAME);
    var value_pixel = Blockly.JavaScript.valueToCode(block, 'Pixel', Blockly.JavaScript.ORDER_ATOMIC);
    var statements_loop = Blockly.JavaScript.statementToCode(block, 'Loop');
    // TODO: Assemble JavaScript into code variable.
    var code = '...;\n';
    return code;
};

Blockly.Blocks['new_boundary_function'] = {
    init: function () {
        this.appendDummyInput()
            .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
        this.appendStatementInput("Content")
            .setCheck(null);
        this.setInputsInline(true);
        this.setColour(315);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['new_boundary_function'] = function (block) {
    var text_name = block.getFieldValue('Name');
    var statements_content = Blockly.Python.statementToCode(block, 'Content');
    // TODO: Assemble Python into code variable.
    var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
    return code;
};

Blockly.Blocks['return'] = {
    init: function () {
        this.appendValueInput("NAME")
            .setCheck(null)
            .appendField("return");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setColour(330);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Python['return'] = function (block) {
    var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
    // TODO: Assemble Python into code variable.
    var code = 'return ' + value_name + '\n';
    return code;
};