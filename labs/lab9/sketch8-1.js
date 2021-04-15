let txtTest = document.getElementById("txtTest");
let dvOutput = document.getElementById("dvOutput");
let dvPain = document.getElementById("dvPain");
dvOutput.innerHTML = "Average: "
dvPain.innerText = "Sum: "

function sum() {
    var stringV = txtTest.value;
    let myArray = stringV.split(",")
    let sum =0;
    
    for(let i = 0; i< myArray.length; i++){
        sum += Number(myArray[i]);
        dvPain.innerText = "Sum:" + sum
        
        
}

    console.log(sum);
}
function average() {
    var stringV = txtTest.value;
    let myArray = stringV.split(",")
    let sum =0;

    
    for(let i = 0; i< myArray.length; i++){
        sum += Number(myArray[i] / myArray.length) ;
       dvOutput.innerHTML = "Average:" + sum
        
    
}

    console.log(sum);
}