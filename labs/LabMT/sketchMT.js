var num = 10;
let x = [];
let y = [];
let c = 0
let m = y[i]
let a = x[i]
function setup() {
  createCanvas(1600, 760);
  noStroke()
}
// this is the setup code just here so that the canvas is made i also put a no stroke to make it look better
 for(var i = 0; i<num;i++){
 x[i]=0;
 y[i]=0;
 }
// this is here so that the circles aer going off a empty array

function draw() {
  
 background(0,0,255);
   
    x.push(mouseX)
    x.shift()
    y.push(mouseY)
    y.shift()
    // this is here so that the circle follows the mouse X and the mouse Y so it can make its changes accordingly

    for(var i = 0; i< num; i++)
     {
       
      circle(0, y[i], x[i]-1600, x[i]-1600);
      //these two lines of code make it so that the circle changes the father and closer you get to the x position 
     }
    for(var i = 0; i<num; i++ ){
      fill(x[i]);
    }
    //this is the for loop for the fill code that is supposed to get brighter when you get closer but its having the oppisite effects
}
function mousePressed(event) {
  console.log(event);
  c = 1;
   if(c = 1){
    
    
   }
}
// this is here so when you pres down on the mouse the circles move downward
function mouseReleased(event) {
  console.log(event);
  c - 1;
  if(c = 0){
    
  }
}
// this is here so the circle goes back to its original position