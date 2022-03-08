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

// Blockly.Blocks['for_each_pixel'] = {
//   init: function() {
//     this.appendDummyInput()
//         .appendField("for each")
//         .appendField(new Blockly.FieldVariable("pixel", null, ["Pixel"], "Pixel"), "PIXEL_VAR")
//         .appendField("in image");
//     this.appendStatementInput("Loop")
//         .setCheck(null);
//     this.setColour(230);
//  this.setTooltip("Does something for each pixel in the image.");
//  this.setHelpUrl("");
//   }
// };

Blockly.JavaScript['for_each_pixel'] = function(block) {
    var variable0  = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PIXEL_VAR'), Blockly.Variables.NAME_TYPE);
    var value_pixel = Blockly.JavaScript.valueToCode(block, 'Pixel', Blockly.JavaScript.ORDER_ATOMIC);
    // TODO: Assemble JavaScript into code variable.
    // var code = `
    // Caman.Filter.register("currentFilter", function (adjust) {
    //     this.process("currentFilter", function () {
    //         ${value_pixel}
    //         ${statements_loop}
    //       });
    //     });
    //   });
    // `;
    // const variable0 =
    //   Blockly.JavaScript.variableDB_.getName(block.getFieldValue('PIXEL_VAR'), Blockly.Names.VARIABLE);
    let branch = Blockly.JavaScript.statementToCode(block, 'Loop');
    
    let code = '';
    // Cache non-trivial values to variables to prevent repeated look-ups.
    const indexVar = Blockly.JavaScript.variableDB_.getDistinctName(
        variable0 + '_index', Blockly.Names.VARIABLE);
    branch = Blockly.JavaScript.INDENT + variable0 + ' = ' + "colorToHex(rgba);" + branch
    // code += 'for (var ' + indexVar + ' in ' + "asdf" + ') {\n' + branch + '}\n';
    branch += `;
    var rgba_new = hexToColor(${variable0});
    // if (Math.random() < 0.001) {
    //     console.log("Pixel")
    //     console.log("Color to hex: " + colorToHex(rgba))
    //     var _r = parseInt(pixel.slice(1, 3), 16);
    //     console.log(_r);
    //     console.log('0' + (Math.round(Math.max(Math.min(Number(_r), 255), 0)) || 0).toString(16));
    //     console.log("Original R: " + rgba.r);
    //     console.log("New R:" + rgba_new.r);
    // }
    
    rgba.r = rgba_new.r;
    rgba.g = rgba_new.g;
    rgba.b = rgba_new.b;
    `
    
    //branch = Blockly.JavaScript.addLoopTrap(branch, block);
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

// Blockly.Blocks['new_boundary_function'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldTextInput("Boundary Function Name"), "Name");
//         this.appendStatementInput("Content")
//             .setCheck(null);
//         this.setInputsInline(true);
//         this.setColour(315);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Python['new_boundary_function'] = function (block) {
//     var text_name = block.getFieldValue('Name');
//     var statements_content = Blockly.Python.statementToCode(block, 'Content');
//     // TODO: Assemble Python into code variable.
//     var code = 'def ' + text_name + '(_object,**kwargs):\n' + statements_content + '\n';
//     return code;
// };

// Blockly.Blocks['return'] = {
//     init: function () {
//         this.appendValueInput("NAME")
//             .setCheck(null)
//             .appendField("return");
//         this.setInputsInline(false);
//         this.setPreviousStatement(true, null);
//         this.setColour(330);
//         this.setTooltip("");
//         this.setHelpUrl("");
//     }
// };

// Blockly.Python['return'] = function (block) {
//     var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
//     // TODO: Assemble Python into code variable.
//     var code = 'return ' + value_name + '\n';
//     return code;
// };