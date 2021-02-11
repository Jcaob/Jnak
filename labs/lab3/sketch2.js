let nr = 3;
function setup() {
  createCanvas(1600, 1600);
}

function draw() {
background(128, 128, 128);
  

 for(var o = 0; o<50; o++)
  {
    
    circle (400,400,o*10)
    noFill()
  }
  
  
 noFill();
 
    
    for (let i = 0; i < 25; i++) {
        let x = i*50; 
        
        if (i % 3 == 0 && i % 5 == 0) {
            
            fill(0, 0, 255);
            square(x, 800, 50);
        }
        else if (i % 5 === 0) {
            
            fill(0, 255, 0);
            square(x, 800, 50);
        }
        else if (i % 3 === 0) {
            
            fill(153, 31, 240);
            circle(x+25, 825, 50);
        }
        else {
            
            fill(0);
            circle(x+25, 825, 50);
        }
        noFill()
    }
    for (let r = 0; r <= nr; r++) {
      for (let c = 0; c <= r ; c++) {
         fill(255,0,0)
        square(c * 25, r * 25, 25);
         
         
      }
  }
  
  }
  
  
  
  



