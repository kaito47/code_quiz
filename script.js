//DOM queries
var startButton = document.getElementById('start-button')
var timerSeconds = document.querySelector('.timer')

//var mainContainer = document.getElementById('container')
var questionContainer = document.getElementById('question-container')
var startContainer = document.getElementById('start-container')

var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')

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
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    //mainContainer.textContent = "";
    setTime();
    nextQuestion();

}

let questions = [
    {q1: "What ion is important in neural transmission",
    answer: [boron, sodium, helium, hydrogen]},

    {q2: "What type of transmission is based on frequency fluctuations?",
    answer: [spatial, occipital, temporal, nocturnal]},

    {q3: "What type of transmission is based on frequency fluctuations?",
    answer: [spatial, occipital, temporal, nocturnal]},

    {q4: "What type of transmission is based on frequency fluctuations?",
    answer: [spatial, occipital, temporal, nocturnal]},

    {q5: "What type of transmission is based on frequency fluctuations?",
    answer: [spatial, occipital, temporal, nocturnal]},
]

//document.querySelector("body > div > div.timer")