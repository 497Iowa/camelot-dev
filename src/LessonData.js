const data = [
  {
    "title": "Lesson 0 - Introduction to Camelot",
    "text": <><p>Welcome to Camelot! At the top of the screen, you’ll find the lessons bar that will walk you through introductory principles in image filter creation. Below the lessons bar, you’ll find the block workspace, where you can drag-and-drop blocks from the toolbox on the left to create filters. On the right is the image preview, where you can run your current filter, and swap out the preview image or use your own.</p><p>Some lessons contain starter material that will help you get started. Go ahead and click on “Load Starter Material” to load a sample filter, and hit Run Filter to see it in action!</p></>,
    "xml":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"0argu%+[aZPsLM+)t:}(\">pixel</variable><variable id=\"$.nhVqw;v*UWWeTcJFT$\">temp</variable></variables><block type=\"for_each_pixel\" id=\"{~CbTV}~[Q42e2ADFK}Q\" x=\"139\" y=\"88\"><field name=\"PIXEL_VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field><statement name=\"Loop\"><block type=\"variables_set\" id=\"|OPsofk_pMP+HfqE3Q:6\"><field name=\"VAR\" id=\"$.nhVqw;v*UWWeTcJFT$\">temp</field><value name=\"VALUE\"><block type=\"colour_rgb\" id=\"Y$hS#9i`oc#E@e9#JsaU\"><value name=\"RED\"><block type=\"get_red_of\" id=\"-[w)1Wzy:1--Ll0)ilpD\"><value name=\"NAME\"><block type=\"get_pixel_relative\" id=\"!1G=(pH==UE_{PSBvzQ2\"><field name=\"X_VAL\">3</field><field name=\"Y_VAL\">5</field><value name=\"NAME\"><block type=\"variables_get\" id=\"39nZ]@u7~$^c6ZGsnBcc\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value></block></value><value name=\"GREEN\"><block type=\"get_green_of\" id=\"(?usMY}6FuS6JugAhNO*\"><value name=\"NAME\"><block type=\"get_pixel_relative\" id=\"WaR:$u-LIZ+ioB|fE=xw\"><field name=\"X_VAL\">0</field><field name=\"Y_VAL\">-5</field><value name=\"NAME\"><block type=\"variables_get\" id=\"uf,R3#{gU,c|UWMOJIFw\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value></block></value><value name=\"BLUE\"><block type=\"get_blue_of\" id=\"1_UZ.L@5QYF]AY+ofL+b\"><value name=\"NAME\"><block type=\"get_pixel_relative\" id=\"k-WbIx|g|-X@c.]D4,Tt\"><field name=\"X_VAL\">-3</field><field name=\"Y_VAL\">5</field><value name=\"NAME\"><block type=\"variables_get\" id=\"bARRxPYQeIIWQJLb$[Po\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value></block></value></block></value><next><block type=\"variables_set\" id=\"g`lwqhp),#j)mkeCF$t5\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field><value name=\"VALUE\"><block type=\"color_with_hsv\" id=\"(7snXD8OgK,@;{qEAQ#~\"><value name=\"hue\"><shadow type=\"math_number\" id=\"o[fe/YF@M_!?K[GUG+tU\"><field name=\"NUM\">100</field></shadow><block type=\"get_hue_of\" id=\"fj*dChE~2vf4O.(HT;Mx\"><value name=\"NAME\"><block type=\"variables_get\" id=\"bc0XjK86tEsC+uRCXbgS\"><field name=\"VAR\" id=\"$.nhVqw;v*UWWeTcJFT$\">temp</field></block></value></block></value><value name=\"saturation\"><shadow type=\"math_number\" id=\"9i(t|paa,T{{U3QB/wDU\"><field name=\"NUM\">50</field></shadow><block type=\"math_arithmetic\" id=\"-7?ZvvU%tqLHpzE+q~mo\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><shadow type=\"math_number\" id=\"c-d19SN#tJdTHf@-OJV9\"><field name=\"NUM\">1.5</field></shadow></value><value name=\"B\"><shadow type=\"math_number\" id=\"5*R~9{8D:.*S7^:Cr|3J\"><field name=\"NUM\">1</field></shadow><block type=\"get_saturation_of\" id=\"K?yuE6Onzf~%SY|#}=%,\"><value name=\"NAME\"><block type=\"variables_get\" id=\"{yp=d#qc{Ux_E2u~/fAH\"><field name=\"VAR\" id=\"$.nhVqw;v*UWWeTcJFT$\">temp</field></block></value></block></value></block></value><value name=\"brightness\"><shadow type=\"math_number\" id=\"}^{bSj4m0QJ+q|E2oL7Z\"><field name=\"NUM\">50</field></shadow><block type=\"get_brightness_of\" id=\"sl(ff{;Ga`j3y~TD*@UX\"><value name=\"NAME\"><block type=\"variables_get\" id=\"BpqE2Eggb]a[.31E,m[m\"><field name=\"VAR\" id=\"$.nhVqw;v*UWWeTcJFT$\">temp</field></block></value></block></value></block></value></block></next></block></statement></block></xml>"
  },
  {
    "title": "Lesson 1 - Introduction to Colour Blocks",
    "text": <><p>To get started, you should know that images are made up of dots of colour called pixels; each pixel has a certain amount of red, green, and blue in that spot, which combine to determine the colour of the pixel.</p>
    <p>Let’s think of the simplest filter we can: the filter that does nothing at all! (We will get into more exciting filters soon.) To do this, we will look at each dot of colour one-by-one, we will record its colour, and we will leave it the same as it was. Let’s walk through the blocks we will need to do this.</p><ul>
    <li>The <code>for each pixel in image</code> block looks at every pixel in the image. We put this as the outermost block since this is the most basic thing we need to do. </li>
    <li>The <code>set pixel to</code> block lets you give a new colour to the pixel at that location. We put this directly inside the <code>for each pixel</code> block, since we wish to give a colour to each pixel in the image. </li>
    <li>The <code>colour with red, green, blue</code> block lets you specify the value of red, green, and blue for a pixel. We put this inside the <code>set pixel to</code> block, since pixels take red, green, and blue values to determine their colour.</li>
    <li>Lastly, the <code>get red of</code>, <code>get green of</code>, and <code>get blue of</code> blocks extract the red, green, and blue values of the pixel at that location. </li>
    </ul>
    Putting this all together, since we are doing nothing in this filter, we simply set each pixel to the colour it already had. We do this by colouring it with the red, green, and blue values it already had, using <code>get red of</code>, <code>get green of</code>, and <code>get blue of</code> to extract the exact values. 
    </>,
    "xml":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"0argu%+[aZPsLM+)t:}(\">pixel</variable></variables><block type=\"for_each_pixel\" id=\"{~CbTV}~[Q42e2ADFK}Q\" x=\"38\" y=\"138\"><field name=\"PIXEL_VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field><statement name=\"Loop\"><block type=\"variables_set\" id=\"g`lwqhp),#j)mkeCF$t5\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></statement></block><block type=\"get_red_of\" id=\"-[w)1Wzy:1--Ll0)ilpD\" x=\"445\" y=\"148\"></block><block type=\"variables_get\" id=\"39nZ]@u7~$^c6ZGsnBcc\" x=\"612\" y=\"146\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block><block type=\"colour_rgb\" id=\"Y$hS#9i`oc#E@e9#JsaU\" x=\"274\" y=\"169\"></block><block type=\"get_green_of\" id=\"(?usMY}6FuS6JugAhNO*\" x=\"447\" y=\"201\"></block><block type=\"variables_get\" id=\"Jx7(^,QF;7o#)6|LWM1=\" x=\"607\" y=\"197\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block><block type=\"get_blue_of\" id=\"1_UZ.L@5QYF]AY+ofL+b\" x=\"450\" y=\"267\"></block><block type=\"variables_get\" id=\"WQ3X/qFMO2O!t^$~t,YI\" x=\"603\" y=\"269\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></xml>"
  },
  {
    "title": "Lesson 2 - Changing Colour Intensities",
    "text": <><p>The goal of this lesson is to implement a filter that intensifies the redness of the image. As discussed in the previous lesson, you already have the necessary blocks to modify the colour of every pixel in the image. As it is now, it sets the colour of each pixel to the current values of red, green, and blue of the pixel. This means that the image colours stay the same. Our goal is to change that! Given that colours are represented by a range of numeric values, how can you make a filter which intensifies the redness of the image?</p>
    <p>Hint:</p>
    <p>Try increasing the value of the red in each pixel. (look in the math section) </p></>
    
  },
  {
    "title": "Lesson 3 - Image Inversion",
    "text": <><p>The goal of this lesson is to invert the image. If you have never seen an inverted image it is completely reversing the colour of an image. To be able to do this we need to understand that the values of the colours of a pixel have a range. This range is 255-0. This controls the intensity or amount of a colour. For example, if the red pixel had a value of 255 that would be the most intense red possible. </p>
    <p>Each pixel has a red, green, and blue value ranging from 255-0. To invert an image we will need to invert every channel. The red channel is done for you; now try to do the other ones!</p></>,
    "xml":"<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"0argu%+[aZPsLM+)t:}(\">pixel</variable></variables><block type=\"for_each_pixel\" id=\"{~CbTV}~[Q42e2ADFK}Q\" x=\"96\" y=\"118\"><field name=\"PIXEL_VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field><statement name=\"Loop\"><block type=\"variables_set\" id=\"g`lwqhp),#j)mkeCF$t5\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field><value name=\"VALUE\"><block type=\"colour_rgb\" id=\"Y$hS#9i`oc#E@e9#JsaU\"><value name=\"RED\"><block type=\"math_arithmetic\" id=\":@Tf$U]#~c1bgEUCs1t.\"><field name=\"OP\">MINUS</field><value name=\"A\"><shadow type=\"math_number\" id=\"kTc0^6^E!GTQ_+[wj~|S\"><field name=\"NUM\">255</field></shadow></value><value name=\"B\"><shadow type=\"math_number\" id=\"`=hxl%DW.;,LA|6VB{X`\"><field name=\"NUM\">1</field></shadow><block type=\"get_red_of\" id=\"-[w)1Wzy:1--Ll0)ilpD\"><value name=\"NAME\"><block type=\"variables_get\" id=\"39nZ]@u7~$^c6ZGsnBcc\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value></block></value><value name=\"GREEN\"><block type=\"get_green_of\" id=\"(?usMY}6FuS6JugAhNO*\"><value name=\"NAME\"><block type=\"variables_get\" id=\"Jx7(^,QF;7o#)6|LWM1=\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value><value name=\"BLUE\"><block type=\"get_blue_of\" id=\"1_UZ.L@5QYF]AY+ofL+b\"><value name=\"NAME\"><block type=\"variables_get\" id=\"WQ3X/qFMO2O!t^$~t,YI\"><field name=\"VAR\" id=\"0argu%+[aZPsLM+)t:}(\">pixel</field></block></value></block></value></block></value></block></statement></block></xml>"
    
  }
]

export default data;