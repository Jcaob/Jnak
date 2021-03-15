
let circleX = 250;
let circleY = 0;
let xSpeed = 3;
let ySpeed = 3;
let rectX = 450;
let rectY= 450;
let rectW = 3;
let rectH = 100;
let score = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  background(255);
  if (keyIsDown(LEFT_ARROW)) { 
    rectY -= 5; 
   } 
// used to move the circle
  if (keyIsDown(RIGHT_ARROW)) { 
    rectY += 5; 
   } 
  

   text("use the arrow keys to move ",10,10)
   text(score , 50, 30)
  circle(circleX, circleY, 10);
  fill(0)

  
  circleX = circleX + xSpeed;
  circleY = circleY + ySpeed;

  
  if(circleX < 0 || circleX > width-5 ) {
    xSpeed = xSpeed * -1
    circleX=20;
    
    
  }
   
  
  if(circleY < 0 ||circleY > height ) {
    ySpeed = ySpeed * -1;
    
  }

  if(hitTestPoint(circleX+5, circleY, rectX, rectY, rectW, rectH))
  {
    ySpeed = ySpeed * +1;
    xSpeed = xSpeed * -1;
    console.log(hitTestPoint)
    score++;
    
  }
  rect(rectX,rectY,rectW,rectH);
}

function hitTestPoint(circleX, circleY, rectX, rectY, rectW, rectH) {

  var colliding = false;

  if(circleX > rectX && circleX < rectX + rectW) {

      if(circleY > rectY && circleY < rectY + rectH) {

            return true;

      }

 }

 return false;

}