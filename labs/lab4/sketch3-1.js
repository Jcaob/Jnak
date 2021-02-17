let colors= ["#ffffcc", "#663300", "#ff66ff"]

function setup() {
  createCanvas(600, 600);

for(let i = 0; i<colors.length; i++){
  fill(colors[i]);
  rect(0,i*200,600,200);
}
}
