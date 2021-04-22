  document.addEventListener("click",  changeColor);
  //adds the event listener
 colors = {"squareOne": "#eb4034", "squareTwo": "#34eb6b", "squareThree": "#345ceb"}
// this is the oblject of colors that the divs take from



 function changeColor(e) {
   var target = e.target || e.srcElement;
    target.style.backgroundColor = colors[target.id];
    // this goes through each of the divs with the target and gets the color
   
}