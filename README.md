# top-etch-a-sketch
This is a setup for the Etch A Sketch project from the The Odin Project curriculum.
This project is about practicing DOM manipulations skills.

Pseudo code:
1.HTML/CSS designed big container that stores the JavaScript created square divs inside it.
2.A slide bar that increases or decreases the square divs(boxes) inside the main container. 16x16, 32x32, 64x64, 128x128...
 a. Flexbox or Grid to make the square divs appear as a grid.
3. Each div must have a hover effect when the mouse passes over them, leaving a colorful trail through your grid just like a pen would.
 a. I can set up EventListeners for either of those events as a starting point.
  --There are multiple ways to change the colors of the divs:
    b1.Adding a new class to the div.
    b2.Changing the div's background color using JavaScript.
4.Add a button to the top of the screen which will clear the current grid and send the user a popup asking for the number of squares per side for the new grid.
Once entered the new grid should be generated inside the same container.
  a.Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
5.(Optional): Instead of just changing the color of a square from black to white (for example), have each pass through with the mouse change it to a completely random RGB value. Then try having each pass just add another 10% of black to it so that only after 10 passes is the square completely black.
