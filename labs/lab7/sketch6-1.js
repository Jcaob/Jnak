let txtUser = document.querySelector("#txtUser");
let txtPass = document.querySelector("#txtPass");
let dvOutput = document.querySelector("#dvOutput")


function checkUP()
{
if((txtUser.value == "J")&&(txtPass.value == "C"))
{
    dvOutput.innerHTML = "pass"
}
else 
{
   dvOutput.innerHTML = "fail"
}
}
