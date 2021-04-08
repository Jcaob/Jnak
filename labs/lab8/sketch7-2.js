let dvbox = document.getElementById("box");
let dvOutput = document.getElementById("dvOutput");
dvbox.style.backgroundColor = "#ffffff";
dvbox.style.width = "100px";
dvbox.style.height = "100px";
dvbox.style.margin = "75px";
dvOutput.innerHTML = "Look for the box it will be black when you hover over it!"


function black() {
    dvbox.style.backgroundColor = "#000000";
    dvOutput.innerHTML = "Congrats you found the box! you found it click the box for it to be moved!"
}
function white() {
    dvbox.style.backgroundColor = "#ffffff";
    dvOutput.innerHTML = "Look for the box it will be black when you hover over it!"

}




function move(id,ud) {
    var ud = 2.1;
    var dvbox = document.getElementById(id);
    var h=parseInt(dvbox.style.margin)*ud;
   
    
    if (h>=1){
        dvbox.style.margin = h + "px";
    }
     
    console.log(ud)
 }
