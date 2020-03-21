//DOM queries
var startButton = document.getElementById('start-button')
//var startContainer = document.getElementById('start-container')


//When start button is clicked...
startButton.addEventListener('click', startQuiz)


//Start quiz function
function startQuiz() {
    console.log("Quiz started");
    document.getElementById("start-container").innerHTML = ""
}
