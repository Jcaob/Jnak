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
function setup() {
  createCanvas(500, 500);
}

function draw() {
  
    drawH();
    drawI();
  
    text("Press backspace to watch it be drawn again ",10,10)
}
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
function keyPressed()
 {
  if(keyCode === BACKSPACE){
    
    clear();
  }
 }