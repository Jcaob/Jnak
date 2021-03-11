var myCircle = {
  x: 250, 
  y: 250,
  color: [255,0,0],
  size: 20
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0,255,0)
  myCircle.size = myCircle.size +1;
  fill(myCircle.color)
  circle(myCircle.x,myCircle.y,myCircle.size)

  if(myCircle.size>200)
  {
    myCircle.size = 20;
  }

}