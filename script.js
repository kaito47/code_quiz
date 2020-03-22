//DOM queries
var startButton = document.getElementById('start-button')
var timerSeconds = document.querySelector('.timer')

var mainContainer = document.getElementById('container')
var quizContainer = document.getElementById('quiz-container')
var innerContainer = document.querySelector('col-md-6')


var countdownSeconds = 10;

// Function creating countdown timer
function setTime() {
    var timerInterval = setInterval(function() {
      countdownSeconds--;
      timerSeconds.textContent = countdownSeconds + " seconds remaining";
  
      if(countdownSeconds === 0) {
        clearInterval(timerInterval);
        //quizOver();
        return
      }
    
  
    }, 1000);

}



//When start button is clicked...
startButton.addEventListener('click', startQuiz)

//Function to display quiz container
function showQuiz () {
    document.getElementById('quiz-container').style.diplay="block";
}


//Start quiz function
function startQuiz() {
    console.log("Quiz started");
    mainContainer.textContent = "";
    setTime();
    showQuiz();
}


//document.querySelector("body > div > div.timer")