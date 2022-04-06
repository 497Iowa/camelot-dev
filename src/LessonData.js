const data = [
  {
    "title": "Lesson 0 - Introduction to Camelot",
    "text": <><p>Welcome to Camelot! At the top of the screen, you’ll find the lessons bar that will walk you through introductory principles in image filter creation. Below the lessons bar, you’ll find the block workspace, where you can drag-and-drop blocks from the toolbox on the left to create filters. On the right is the image preview, where you can run your current filter, and swap out the preview image or use your own.</p><p>Each lesson contains starter material that will help you get started. Go ahead and click on “Load Starter Material” to load a sample filter, and hit Run Filter to see it in action!</p></>
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
    </>
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
    <p>Each pixel has a red, green, and blue value ranging from 255-0. To invert an image we will need to invert every channel. The red channel is done for you; now try to do the other ones!</p></>
    
  }
]

export default data;