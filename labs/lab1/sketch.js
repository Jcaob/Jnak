
function setup() {
  createCanvas(400, 400);
}

function draw() {
  noStroke();
  let a = color(255, 88, 110, 102);
  let b = alpha(a);
  fill(b);
  background(220);
  fill(a);
  rect(135, 80, 30, 10, );
  rect(185, 80, 30, 10 );
  circle(150, 100,10);
  circle(200, 100, 10);
  square(160, 110, 25,10);
  arc(160, 140, 50, 50, 0, PI + QUARTER_PI);
  ellipse(56, 46, 55, 55);
  text("help",100,0)
}
