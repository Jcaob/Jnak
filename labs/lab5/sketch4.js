let colors= ["#ff0000", "#ffff66", "#66ff66"]

function setup() {
  createCanvas(300, 300);
 background("#cc9900")
  
for(let i = 0; i<colors.length; i++){
  fill(colors[i]);
  circle(150,i*70+70,50,50);
}

}
