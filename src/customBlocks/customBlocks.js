import Blockly from 'blockly';
import 'blockly/python';
import 'blockly/javascript';

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

  Blockly.Blocks['get_pixel_relative'] = {
    init: function() {
      this.appendValueInput("NAME")
        .setCheck(null)
        .appendField("get pixel")
        .appendField(new Blockly.FieldNumber(0), "X_VAL")
        .appendField("right and")
        .appendField(new Blockly.FieldNumber(0), "Y_VAL")
        .appendField("up");
        this.setOutput(true, null);
        this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.JavaScript['get_pixel_relative'] = function(block) {
  var x_val = block.getFieldValue('X_VAL');
  var y_val = block.getFieldValue('Y_VAL');
  var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
  var code = `colorToHex(getFromOriginal(rgba.locationXY().x + ${x_val}, rgba.locationXY().y - 1 + ${y_val}))`;
  if (value_name == "") code = 0;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

  Blockly.Blocks['get_red_of'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Pixel")
            .appendField("get red of");
        this.setOutput(true, null);
        this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.JavaScript['get_red_of'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `(parseInt(${value_name}.slice(1, 3), 16))`;
    if (value_name == "") code = 0;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


  Blockly.Blocks['get_green_of'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Pixel")
            .appendField("get green of");
        this.setOutput(true, null);
        this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.JavaScript['get_green_of'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `(parseInt(${value_name}.slice(3, 5), 16))`;
    if (value_name == "") code = 0;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['get_blue_of'] = {
    init: function() {
        this.appendValueInput("NAME")
            .setCheck("Pixel")
            .appendField("get blue of");
        this.setOutput(true, null);
        this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
    }
};

Blockly.JavaScript['get_blue_of'] = function(block) {
    var value_name = Blockly.JavaScript.valueToCode(block, 'NAME', Blockly.JavaScript.ORDER_ATOMIC);
    var code = `(parseInt(${value_name}.slice(5, 7), 16))`;
    if (value_name == "") code = 0;
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.Blocks['for_each_pixel'] = {
    init: function() {
        this.jsonInit({
            "type": "for_each_pixel",
            "message0": "for each %1 in image",
            "args0": [
              {
                "type": "field_variable",
                "name": "PIXEL_VAR",
                "variable": "pixel"
              },
            ],
            "message1": "do %1",
            "args1": [
              {
                "type": "input_statement",
                "name": "Loop"
              }
            ],
            'inputsInline': true,
            "colour": 230,
            "tooltip": "Does something for each pixel in the image.",
            "helpUrl": ""
          })
    }
}


Blockly.JavaScript['for_each_pixel'] = function(block) {
    var variable0  = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PIXEL_VAR'), Blockly.Variables.NAME_TYPE);
    var value_pixel = Blockly.JavaScript.valueToCode(block, 'Pixel', Blockly.JavaScript.ORDER_ATOMIC);
    let branch = Blockly.JavaScript.statementToCode(block, 'Loop');
    
    let code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    // const indexVar = Blockly.JavaScript.variableDB_.getDistinctName(
    //     variable0 + '_index', Blockly.Names.VARIABLE);
    branch = Blockly.JavaScript.INDENT + variable0 + ' = colorToHex(rgba);' + branch
    branch += `;
    var rgba_new = hexToColor(${variable0});
    if (Math.random() < 0.001) {
      // do any console debugging here
    }
    
    rgba.r = rgba_new.r;
    rgba.g = rgba_new.g;
    rgba.b = rgba_new.b;
    `
    
    code += `
    Caman.Filter.register("currentFilter", function () {
        this.process("currentFilter", function (rgba) {
            ${branch}
        });
        return this;
      });
    `;
    return code;
};

Blockly.JavaScript['colour_rgb'] = function(block) {
    // Compose a colour from RGB components expressed as percentages.
    const red = Blockly.JavaScript.valueToCode(block, 'RED', Blockly.JavaScript.ORDER_NONE) || 0;
    const green =
        Blockly.JavaScript.valueToCode(block, 'GREEN', Blockly.JavaScript.ORDER_NONE) || 0;
    const blue =
        Blockly.JavaScript.valueToCode(block, 'BLUE', Blockly.JavaScript.ORDER_NONE) || 0;
    const functionName = Blockly.JavaScript.provideFunction_('colourRgb', [
      'function ' + Blockly.JavaScript.FUNCTION_NAME_PLACEHOLDER_ + '(r, g, b) {',
      '  r = Math.max(Math.min(Number(r), 255), 0);',
      '  g = Math.max(Math.min(Number(g), 255), 0);',
      '  b = Math.max(Math.min(Number(b), 255), 0);',
      '  r = (\'0\' + (Math.round(r) || 0).toString(16)).slice(-2);',
      '  g = (\'0\' + (Math.round(g) || 0).toString(16)).slice(-2);',
      '  b = (\'0\' + (Math.round(b) || 0).toString(16)).slice(-2);',
      '  return \'#\' + r + g + b;', '}'
    ]);
    const code = functionName + '(' + red + ', ' + green + ', ' + blue + ')';
    return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
  };
