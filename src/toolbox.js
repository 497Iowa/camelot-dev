const toolboxConfig = `<xml id="toolbox" style="display: none">
<category name="Colour" colour="#a5745b">
<block type="colour_picker">
<field name="COLOUR">#ff0000</field>
</block>
<block type="colour_random"/>
<block type="colour_rgb">
<value name="RED">
<shadow type="math_number">
<field name="NUM">100</field>
</shadow>
</value>
<value name="GREEN">
<shadow type="math_number">
<field name="NUM">50</field>
</shadow>
</value>
<value name="BLUE">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="color_with_hsv">
<value name="hue">
<shadow type="math_number">
<field name="NUM">100</field>
</shadow>
</value>
<value name="saturation">
<shadow type="math_number">
<field name="NUM">50</field>
</shadow>
</value>
<value name="brightness">
<shadow type="math_number">
<field name="NUM">50</field>
</shadow>
</value>
</block>
<block type="colour_blend">
<value name="COLOUR1">
<shadow type="colour_picker">
<field name="COLOUR">#ff0000</field>
</shadow>
</value>
<value name="COLOUR2">
<shadow type="colour_picker">
<field name="COLOUR">#3333ff</field>
</shadow>
</value>
<value name="RATIO">
<shadow type="math_number">
<field name="NUM">0.5</field>
</shadow>
</value>
</block>
</category>
<category name="Pixels" colour="#f0b81f">
<block type="for_each_pixel">
<field name="PIXEL_VAR" id="tC?+]3-pPk3|!aUyg,@+">pixel</field>
</block>
<block type="get_pixel_relative"/>
<block type="get_red_of"/>
<block type="get_green_of"/>
<block type="get_blue_of"/>
<block type="get_hue_of"/>
<block type="get_saturation_of"/>
<block type="get_brightness_of"/>
</category>
<category name="Logic" colour="#5b80a5">
<block type="controls_if"/>
<block type="logic_compare">
<field name="OP">EQ</field>
</block>
<block type="logic_operation">
<field name="OP">AND</field>
</block>
<block type="logic_negate"/>
<block type="logic_boolean">
<field name="BOOL">TRUE</field>
</block>
<block type="logic_null"/>
<block type="logic_ternary"/>
</category>
<category name="Loops" colour="#5ba55b">
<block type="controls_repeat_ext">
<value name="TIMES">
<shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
</block>
<block type="controls_whileUntil">
<field name="MODE">WHILE</field>
</block>
<block type="controls_for">
<field name="VAR" id="4sXmMiOhJD$a*w=*KtX%">i</field>
<value name="FROM">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
<value name="TO">
<shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
<value name="BY">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
</block>
<block type="controls_forEach">
<field name="VAR" id="a2..!lC32\`oCzQJk@AW]">j</field>
</block>
<block type="controls_flow_statements" disabled="true">
<field name="FLOW">BREAK</field>
</block>
</category>
<category name="Math" colour="#5b67a5">
<block type="math_number">
<field name="NUM">0</field>
</block>
<block type="math_arithmetic">
<field name="OP">ADD</field>
<value name="A">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
<value name="B">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
</block>
<block type="math_single">
<field name="OP">ROOT</field>
<value name="NUM">
<shadow type="math_number">
<field name="NUM">9</field>
</shadow>
</value>
</block>
<block type="math_trig">
<field name="OP">SIN</field>
<value name="NUM">
<shadow type="math_number">
<field name="NUM">45</field>
</shadow>
</value>
</block>
<block type="math_constant">
<field name="CONSTANT">PI</field>
</block>
<block type="math_number_property">
<mutation divisor_input="false"/>
<field name="PROPERTY">EVEN</field>
<value name="NUMBER_TO_CHECK">
<shadow type="math_number">
<field name="NUM">0</field>
</shadow>
</value>
</block>
<block type="math_round">
<field name="OP">ROUND</field>
<value name="NUM">
<shadow type="math_number">
<field name="NUM">3.1</field>
</shadow>
</value>
</block>
<block type="math_on_list">
<mutation op="SUM"/>
<field name="OP">SUM</field>
</block>
<block type="math_modulo">
<value name="DIVIDEND">
<shadow type="math_number">
<field name="NUM">64</field>
</shadow>
</value>
<value name="DIVISOR">
<shadow type="math_number">
<field name="NUM">10</field>
</shadow>
</value>
</block>
<block type="math_constrain">
<value name="VALUE">
<shadow type="math_number">
<field name="NUM">50</field>
</shadow>
</value>
<value name="LOW">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
<value name="HIGH">
<shadow type="math_number">
<field name="NUM">100</field>
</shadow>
</value>
</block>
<block type="math_random_int">
<value name="FROM">
<shadow type="math_number">
<field name="NUM">1</field>
</shadow>
</value>
<value name="TO">
<shadow type="math_number">
<field name="NUM">100</field>
</shadow>
</value>
</block>
<block type="math_random_float"/>
</category>
<category name="Variables" colour="#a55b80" custom="VARIABLE">
<block type="variables_get_pixel">
<field name="FIELD_NAME">pixel</field>
</block>
<block type="variables_set_pixel"/>
</category>
<category name="Functions" colour="#995ba5" custom="PROCEDURE"/>
</xml>`

export default toolboxConfig;