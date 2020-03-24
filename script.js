//DOM queries
var startButton = document.getElementById('start-button')
var timerSeconds = document.querySelector('.timer')

//var mainContainer = document.getElementById('container')
var questionContainer = document.getElementById('question-container')
var startContainer = document.getElementById('start-container')

var questionElement = document.getElementById('question')
var answerButtons = document.getElementById('answer-buttons')

var countdownSeconds = 10;

var questionArray = [
    {question: "What ion is important in neural transmission?",
   answer: [{text: "boron", correct: false},
            {text: "sodium", correct: true},
            {text: "helium", correct: false},
            {text: "hydrogen", correct: false}]},

    {question: "What type of transmission is based on frequency fluctuations?",
   answer: ["spatial", "occipital", "temporal", "nocturnal"]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},

   {question: "What type of transmission is based on frequency fluctuations?",
   answer: ["spatial", "occipital", "temporal", "nocturnal"]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},
]
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
let question1 = "What's your name?"
// Making next question function
//function nextQuestion(parameters) {
    questionContainer.innerText = question1
   //questionElement.innerText = questionArray(questionArrayIndex[0]) - Didn't work
   //questionArrayIndex++;
   // answerButtons = questionArray.answer
//}

//When start button is clicked...
startButton.addEventListener('click', startQuiz)



//Start quiz function
function startQuiz() {
    console.log("Quiz started");
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
   // var questionArrayIndex = 0;
    setTime();
    nextQuestion();
    //showQuestion();

}

//var question1 = "What ion is important in neural transmission?"


// Making next question function
//function nextQuestion(questionArray) {
    //questionElement.textContent.questionArray.question
    //answerButtons = questionArray.answer

