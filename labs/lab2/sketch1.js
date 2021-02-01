let a = 0;
let b= 1;
function setup() {
  createCanvas(400, 300);
}

function draw() {
 background(110,0,108);
  a = a + 1;
  b = b + 1;
  console.log(a);
  if(mouseX > 200){
    fill(255,0,0);
  }
  if(mouseX < 200){
    fill(0,0,255);
  }
  if(b >=200){
    b=1;
  }
  circle(200,150,b)
  circle(mouseX, mouseY, 30);
}
