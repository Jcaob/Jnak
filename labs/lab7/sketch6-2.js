let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y2");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let dvOutput = document.querySelector("#dvOutput")


function CD()
{
    d = Math.sqrt( x1.value*x2.value + y1.value*y2.value);
    console.log(d)
}