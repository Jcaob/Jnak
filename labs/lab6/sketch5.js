var myRect = {
  x: 100, 
  y: 100,
  color: [255,0,0],
  height: 25,
  width: 50
}
function setup() {
  createCanvas(500, 500);
}

function draw() {
  
  fill(myRect.color)
  rect(myRect.x, myRect.y, myRect.width, myRect.height)
  

}