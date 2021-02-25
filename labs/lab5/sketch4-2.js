let x = 100; 
let y = 100; 
let c = 0;
//used for the color and for the position of the circle at the start
function setup() 
{ 
    
  // create canvas 
  createCanvas(1200, 600); 
  
} 

function draw()
 { 
  
  // fill color 
  fill(c); 

  if (keyIsDown(LEFT_ARROW)) { 
      x -= 5; 
  } 
  // used to move the circle
  if (keyIsDown(RIGHT_ARROW)) { 
      x += 5; 
  } 

  if (keyIsDown(UP_ARROW)) { 
      y -= 5; 
  } 

  if (keyIsDown(DOWN_ARROW)) { 
      y += 5; 
  } 

  
  circle(x, y, 50); 
  // making the circle 
  text("use the arrow keys to move. use the backspace to clear and use the mouse click to change colors to red ",10,10)
} 

function mouseClicked()
{
  if(c === 0){
    c = "#ff0000";
  }
  else
  {
    c = 0;
  }
  
  //to change the color of the circle to red or back to black
}
function keyPressed()
 {
  if(keyCode === BACKSPACE){
    
    clear();
  }
}
//used to clear the screen of your previous drawing
