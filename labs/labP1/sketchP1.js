playerTurn = 2;

// this is a global variable that keeps track of the turns
let Div = document.getElementsByClassName("space")
let PlayT = document.querySelector("#Playerturn")
let W = document.querySelector("#Winner")
let F = document.getElementById("Fun")
let G = document.getElementsByClassName("gameRect")
console.log(G)
class ConnectFour {
    
    
    //TurnC = document.getElementById("Turn")
    constructor(){
    }
    next(){
        // this is the function that will change the inner HTML so it displays 
        // for the player whose turn it is 
        if(playerTurn > 1){
            playerTurn--
            PlayT.innerHTML = "Player 2's Turn"
            
            
        }
        else{
            playerTurn = 2
            PlayT.innerHTML = "Player 1's Turn"
           
        }
        
    }

}

class Board extends ConnectFour{
    Zone = document.getElementById("Zone");
    grid = [];
   
    constructor(){
        super()
        
        for(var row = 0; row < 7; row++){
            this.grid[row] = []
                for(var col = 0; col < 7; col++){
                    let newRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
                newRect.classList.add("gameRect")
                newRect.setAttribute("x",20*row );
                newRect.setAttribute("y",20*col );
                newRect.setAttribute("height",20);
                newRect.setAttribute("width",20);
                newRect.setAttribute('fill','transparent')
                this.grid[row][col] = ""
              
              
                this.Zone.appendChild(newRect)
                
                
                
                
                newRect.addEventListener("click", (event) => {
                    let r  = event.target.getAttribute("y") / 20
                    let c  = event.target.getAttribute("x") / 20
                    
                    if(playerTurn == 2){
                        this.grid[r][c] = "red"
                        event.target.setAttribute('fill','red')
                        event.target.classList.add('player-one');
                        console.log(this.grid[r][c+1])
                        this.next()
                       
                        if((this.grid[r][c] == this.grid[r][c+1] )&& (this.grid[r][c+1] == this.grid[r][c+2] )&& (this.grid[r][c+2] == this.grid[r][c+3] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player One Wins"
                    }
                        if((this.grid[r][c] == this.grid[r][c-1] )&& (this.grid[r][c-1] == this.grid[r][c-2] )&& (this.grid[r][c-2] == this.grid[r][c-3] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player One Wins"
                    }
                        if((this.grid[r][c] == this.grid[r+1][c] )&& (this.grid[r+1][c] == this.grid[r+2][c] )&& (this.grid[r+2][c] == this.grid[r+3][c] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player One Wins"
                    }
                        

                    }
                    else{
                        this.grid[r][c] = "orange"
                        event.target.setAttribute('fill','orange')
                        event.target.classList.add('Player-two')
                        //console.log(event)
                        this.next()
                        if((this.grid[r][c] == this.grid[r][c+1] )&& (this.grid[r][c+1] == this.grid[r][c+2] )&& (this.grid[r][c+2] == this.grid[r][c+3] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player Two Wins"
                    }
                        if((this.grid[r][c] == this.grid[r][c-1] )&& (this.grid[r][c-1] == this.grid[r][c-2] )&& (this.grid[r][c-2] == this.grid[r][c-3] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player Two Wins"
                    }
                        if((this.grid[r][c] == this.grid[r+1][c] )&& (this.grid[r+1][c] == this.grid[r+2][c] )&& (this.grid[r+2][c] == this.grid[r+3][c] )&& this.grid[r][c] != "")
                    {
                        W.innerHTML =  "Player Two Wins"
                    }
                         }
                    
                        
                    })
                }
               
            }
       
       
    }
        
}



class ResetBoard{
    constructor(){
        }
        reload(){
            location.reload();
            //this hosts the method that resets the board once someone wins
        }
        }
        

    
 



TweenLite.from(PlayT,
    {duration: .5, x: 100, alpha: 0}
    );
// these are all the animations that play on start up
TweenLite.from(F,
        {duration: .5, x: 100, alpha: 0}
        );
    

for(let i = 0; i < Div.length; i++){
    TweenLite.from(Div[i],
        {duration: .8, y: 100, alpha: 0}
        );
}




let n = new ConnectFour();
let b = new Board();
let p = new ResetBoard;

// these are here so that the objects are placed from the classes