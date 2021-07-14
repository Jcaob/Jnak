//class for all the logic
class Game{
    //class properties
    foundC = 0;
    totalC = 0;
    searchC = "#32a852"
    normalC = "#8c32a8"
    gameZone = document.getElementById("gameZone");
    fB = new FoundBar();


    constructor(){
        //making all the circles
        for(var i = 0; i < 25; i++){
            let newCirc = document.createElementNS("http://www.w3.org/2000/svg", "circle");
           
            newCirc.classList.add("gameCirc")
            newCirc.setAttribute("cx", Math.random() * 400);
            newCirc.setAttribute("cy", Math.random() * 400);

            //randomly choose what reveal color the circle is
            if(Math.random() < .3){
                newCirc.dataset.hiddencolor = this.searchC;
                this.totalC++;

            }
            else{
                newCirc.dataset.hiddencolor = this.normalC;
            }
            newCirc.addEventListener("mouseover", (event) => {
              event.target.style.fill = event.target.dataset.hiddencolor ;
              // give the circle color when you mouse over 
            })
            newCirc.addEventListener("mouseout", (event) => {
                event.target.style.fill = "#000" ;
                  // give the circle color when you mouse leaves
              })
            newCirc.addEventListener("click", (event) => {
                     // gets rid of the circle if its greeen and ads to the bar
                if(event.target.dataset.hiddencolor == this.searchC){
                    event.target.remove();
                    this.foundC++;
                    
                    this.fB.setPerc(this.foundC / this. totalC);
                }
            })
            //add circle
            this.gameZone.appendChild(newCirc)
        }
    }
}
class FoundBar{
    element = document.getElementById("FB")
    MS = 130;
    perc = 0;

    setPerc(perc){
        this.perc = perc;
        this.element.setAttribute("width" , this.perc * this.MS)
    }
}

let g = new Game();
let f = new FoundBar();
