let hits = 0;
//this variable is for caluculating how many times the object has been hit by the ran
class Rain {
    constructor(cx, cy, radius, color){
      this.x = cx;
      this.y = cy;
      this.radius = radius;
      this.color = color;
      this.speed = 2 + Math.random() * 5
      //this is the building blocks of the rain
    }
    update(){
      this.y = this.y +this.speed;
      fill(this.color)
      circle( this.x, this.y, this.radius);
      // this makes it so the rain alls to the ground
      
    }
     hit(){
       if(this.y > 250)
      {
        this.y = 0
        hits++
        // this is here so when the rain goes to ground level it resets and informs the variable that it has been hit
      }
      console.log(hits)
    }
    
    }
    

class Ground {
  constructor(ox, oy, width, height, color, blueA){
      this.x = ox;
      this.y = oy;
      this.width = width;
      this.height = height;
      this.color = color;
      this.blueA = 13;
      //building blocks for the ground
  }
    update(){
      fill(this.color)
      rect( this.x, this.y, this.width, this.height);
      //this makes the ground
     
    }
   check(){
     
      if(hits > 10){
        hits = 0;
        this.blueA += 10;
        this.color = [0,0,this.blueA]
        // this is here to check and see if the ground has been hit 10 time and if it has it changes the color
      }
     console.log(this.color)
   
    }
   
}

var myRain = [];
myRain[0] = new Rain(100,10,20,[52, 164, 235]);
myRain[1] = new Rain(300,10,20,[52, 95, 235]);
myRain[2] = new Rain(175,10,20,[52, 164, 235]);
myRain[3] = new Rain(350,10,20,[52, 95, 235]);
myRain[4] = new Rain(200,10,20,[52, 95, 235]);
myRain[5] = new Rain(150,10,20,[52, 164, 235]);
myRain[6] = new Rain(75,10,20,[52, 95, 235]);
// the making of the rain objects


myGround = new Ground(0,250,1000,50,[0,0,13]);
// the making of the ground objects
function setup() {
  createCanvas(400,300)
}
function draw() {
  background(0);
  myRain[0].update();
  myRain[1].update();
  myRain[2].update();
  myRain[3].update();
  myRain[4].update();
  myRain[5].update();
  myRain[6].update();
  myRain[0].hit();
  myRain[1].hit();
  myRain[2].hit();
  myRain[3].hit();
  myRain[4].hit();
  myRain[5].hit();
  myRain[6].hit();
  myGround.check();
  myGround.update();
  // this is for initializing all the methods in the class with their appropiate functions
}


