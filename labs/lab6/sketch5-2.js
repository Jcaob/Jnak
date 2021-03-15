var myCircle = {
  x: 100, 
  y: 100,
  color: [0],
  size: 20
}
var myCircle2 = {
  x: 200, 
  y: 100,
  color: [0],
  size: 20
}
var myCircle3 = {
  x: 200, 
  y: 100,
  color: [0],
  size: 20
}
var myRect = {
  x: 250, 
  y: 70,
  color: [0],
  height: 25,
  width: 50
}
var myRect2 = {
  x: 250, 
  y: 20,
  color: [0],
  height: 25,
  width: 50
}
// all the objects that make up the drawing 
function setup() {
  createCanvas(500, 500);
}
//to make the canvas
function draw() {
  
    drawH();
    drawI();

    text("Press backspace to watch it be drawn again ",10,10)
}
// calls on the functions that makes the H and the I
function drawH ()
{
  myCircle.y = myCircle.y +1;
  fill(myCircle.color)
  circle(myCircle.x,myCircle.y,myCircle.size)

  if(myCircle.y>200)
  {
    myCircle.y = 20;
  }
  myCircle3.x = myCircle3.x +1;
  fill(myCircle3.color)
  circle(myCircle3.x,myCircle3.y,myCircle3.size)

  if(myCircle3.x>200)
  {
    myCircle3.x = 100;
  }
  myCircle2.y = myCircle2.y +1;
  fill(myCircle2.color)
  circle(myCircle2.x,myCircle2.y,myCircle2.size)

  if(myCircle2.y>200)
  {
    myCircle2.y = 20;
  }
}
//Used to Draw the H
function drawI(){
  myRect.y = myRect.y +1;
  
  fill(myRect.color)
  rect(myRect.x, myRect.y, myRect.width, myRect.height)
  if(myRect.y>200)
  {
    myRect.y = 60;
  }
  fill(myRect2.color)
  rect(myRect2.x, myRect2.y, myRect2.width, myRect2.height)
}
// used to draw the I
function keyPressed()
 {
  if(keyCode === BACKSPACE){
    
    clear();
  }
 }
 //fun ction used to clear the board and watch it be drawn again