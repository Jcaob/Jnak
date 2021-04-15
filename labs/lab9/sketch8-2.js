



function makediv() {
let objects = [

{ color: "#FF0000", height: 100, width: 300 },
   
    { color: "#FFFF00", height: 200, width: 200 },
   
    { color: "#ff0000", height: 300, width: 100 },
   
   ];
   
   
   for(let i = 0; i< objects.length; i++){
    let Pain = document.createElement("div")
    Pain.style.backgroundColor  = objects[i].color
    Pain.style.width  = objects[i].width + "px"
    Pain.style.height  = objects[i].height + "px"
       

      document.body.appendChild(Pain);
       
        console.log(Pain)
       
} 
}

