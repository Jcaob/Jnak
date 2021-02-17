var num = 10;
let x = [];
let y = [];
function setup() {
  createCanvas(1600, 1600);
  noStroke()
}
for(var i = 0; i<num;i++){
 x[i]=0;
 y[i]=0;
}


function draw() {
  
 background(0);
   
    x.push(mouseX)
    x.shift()
    y.push(mouseY)
    y.shift()
    for(var i = 0; i< num; i++)
     {
       fill(0,255,0)
      ellipse(x[i], y[i], 30, 30);
     }
 
}
