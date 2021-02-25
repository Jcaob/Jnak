
let circleX = 250;
let circleY = 0;
let xSpeed = 3;
let ySpeed = 3;
let rectX = 0;
let rectY= 450;
let rectW = 500;
let rectH = 50;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(255);

  
  circle(circleX, circleY, 50);
  fill(255,0,0)

  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  
  if(circleX < 0 || circleX > width-25 || circleX < 25) {
    xSpeed = xSpeed * -1;
  }

  
  if(circleY < 0 ||circleY > height ) {
    ySpeed = ySpeed * -1;
  }

  if(collideRect(circleX, circleY+25, rectX, rectY, rectW, rectH))
  {
    ySpeed = ySpeed * -1;
    xSpeed = xSpeed * +1;
    console.log(collideRect)
    
  }
  rect(rectX,rectY,rectW,rectH);
}

function collideRect(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX > rectX && circleX < rectX + rectW) {

      if(circleY > rectY && circleY < rectY + rectH) {

            return true;

      }

 }

 return false;

}