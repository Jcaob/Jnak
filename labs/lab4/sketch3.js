var num = 60;
let x = [];
let y = [];
let colors= ["#000000", "#9900ff","#ffffff" ]

let o = [19,16,28,11];


function setup() {
  createCanvas(400, 400);
  noStroke()
  
  
}
for(var i = 0; i<num;i++){
 x[i]=0;
 y[i]=0;
}


function draw() {
    
   
    x.push(mouseX)
    x.shift()
    y.push(mouseY)
    y.shift()
    for(let i = 0; i<colors.length; i++){
      fill(colors[i]);
      rect(0,i*200,600,200);
    }
    for(var i = 0; i< num; i++)
     {
      if(mouseY > 200){
        fill(255, 153, 0);
      }
      if(mouseY < 200){
        fill(0,255,0);
      }
    
    
    
  
      rect(x[i], y[i], 50, 50);
     }
 if(mouseIsPressed){
   rect(mouseX,mouseY,30,30)
   fill(255,0,0)
 }
}
