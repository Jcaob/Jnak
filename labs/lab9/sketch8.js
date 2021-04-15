let txtTest = document.getElementById("txtTest");
let BWC = 0;
let badwords = ["lawyer","feet","pain"]
dvOutput.innerHTML = "Type something is to try and find bad words"


function breakS() {
    var stringV = txtTest.value;
    let Pain = stringV.split(" ")
    

    
    let lookingFor = "lawyer";
    let lookingFor1 = "feet";
    let lookingFor2 = "pain";
    
    console.log(Pain);
    
    for(let i = 0; i< Pain.length; i++){
        if(Pain[i] == lookingFor){
            BWC++;
            console.log(BWC)
            dvPain.innerText = BWC
            dvOutput.innerHTML ="found"
            
        }
        if(Pain[i] == lookingFor1){
            BWC++;
            console.log(BWC)
            dvPain.innerText = BWC
            dvOutput.innerHTML ="found"
            
        }
        if(Pain[i] == lookingFor2){
            BWC++;
            console.log(BWC)
            dvPain.innerText = BWC
            dvOutput.innerHTML = "found"
            
        }
        else{
            dvOutput.innerHTML = "not found"
        }
    }


}