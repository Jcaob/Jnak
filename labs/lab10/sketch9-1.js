let element = document.getElementById("QuestionOne");
element.addEventListener("click", itsclicked);
//calling the div from the HTML and making the event listener
function itsclicked(event){
    
    let response = event.target.getAttribute("data-answer")
    element.innerHTML = "The answer is: " + response 
    // calling on the data answer that the code has
}
