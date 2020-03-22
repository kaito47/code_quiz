//DOM queries
var startButton = document.getElementById('start-button')
//var startContainer = document.getElementById('start-container')
var timerSeconds = document.querySelector('.timer')

var countdownSeconds = 50;


function setTime() {
    var timerInterval = setInterval(function() {
      countdownSeconds--;
      timerSeconds.textContent = countdownSeconds + " seconds remaining";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
//function setTime() {
    //var timerInterval = setInterval(Function()) {
        //timerSeconds.textContent = countdownSeconds
    //}
//}
//When start button is clicked...
startButton.addEventListener('click', startQuiz)


//Start quiz function
function startQuiz() {
    console.log("Quiz started");
    document.getElementById("start-container").innerHTML = "";
    setTime();
}


//document.querySelector("body > div > div.timer")