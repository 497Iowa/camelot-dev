const defaultWorkspace = `<xml
xmlns="https://developers.google.com/blockly/xml">
<variables>
    <variable id="0argu%+[aZPsLM+)t:}(">pixel</variable>
</variables>
<block type="for_each_pixel" id="{~CbTV}~[Q42e2ADFK}Q" x="38" y="138">
    <field name="PIXEL_VAR" id="0argu%+[aZPsLM+)t:}(">pixel</field>
    <statement name="Loop">
        <block type="variables_set" id="g\`lwqhp),#j)mkeCF$t5">
            <field name="VAR" id="0argu%+[aZPsLM+)t:}(">pixel</field>
            <value name="VALUE">
                <block type="colour_rgb" id="Y$hS#9i\`oc#E@e9#JsaU">
                    <value name="RED">
                        <block type="get_red_of" id="-[w)1Wzy:1--Ll0)ilpD">
                            <value name="NAME">
                                <block type="variables_get" id="39nZ]@u7~$^c6ZGsnBcc">
                                    <field name="VAR" id="0argu%+[aZPsLM+)t:}(">pixel</field>
                                </block>
                            </value>
                        </block>
                    </value>
                    <value name="GREEN">
                        <block type="get_green_of" id="(?usMY}6FuS6JugAhNO*">
                            <value name="NAME">
                                <block type="variables_get" id="Jx7(^,QF;7o#)6|LWM1=">
                                    <field name="VAR" id="0argu%+[aZPsLM+)t:}(">pixel</field>
                                </block>
                            </value>
                        </block>
                    </value>
                    <value name="BLUE">
                        <block type="get_blue_of" id="1_UZ.L@5QYF]AY+ofL+b">
                            <value name="NAME">
                                <block type="variables_get" id="WQ3X/qFMO2O!t^$~t,YI">
                                    <field name="VAR" id="0argu%+[aZPsLM+)t:}(">pixel</field>
                                </block>
                            </value>
                        </block>
                    </value>
                </block>
            </value>
        </block>
    </statement>
</block>
</xml>`

export default defaultWorkspace;