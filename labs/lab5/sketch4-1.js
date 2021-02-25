
let circleX = 100;
let circleY = 0;
let xSpeed = 2;
let ySpeed = 2;
let rectX = 0;
let rectY= 450;
let rectW = 500;
let rectH = 100;

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

  
  if(circleY < 0 || circleY > height-75 ) {
    ySpeed = ySpeed * -1;
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