

function Beeg(id,ud) {
    var ud = 1.1;
    var div = document.getElementById(id);
    var h=parseInt(div.style.height)*ud;
    var w=parseInt(div.style.width)*ud;
    
    if (h>=1){
       div.style.height = h + "px";
    }
     if (w>=1){
       div.style.width = w + "px";
    
    }
    console.log(ud)
 }
