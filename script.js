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
// Making next question function
//function nextQuestion(questionArray) {
    //document.getElementById('question').innerText = questionArray[0][0].question
   //questionElement.innerText = questionArray(questionArrayIndex[0])
   //questionArrayIndex++;
   // answerButtons = questionArray.answer
//}

//When start button is clicked...
startButton.addEventListener('click', startQuiz)

//Function to display quiz container
function showQuiz () {
    document.getElementById('quiz-container').style.diplay="block";
}

//Function to show one question
//function showQuestion () {
    //questionElement.textContent = "Hi";
//}

//Start quiz function
function startQuiz() {
    console.log("Quiz started");
    startContainer.classList.add('hide');
    questionContainer.classList.remove('hide');
    var questionArrayIndex = 0;
    //mainContainer.textContent = "";
    setTime();
    //nextQuestion();
    showQuestion();

}

let questionArray = [
    {question: "What ion is important in neural transmission",
    answer: [{text: "boron", correct = false},
            {text: "sodium", correct = true},
            {text: "helium", correct = false},
            {text: "hydrogen", correct = false}]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},

    {question: "What type of transmission is based on frequency fluctuations?",
    answer: ["spatial", "occipital", "temporal", "nocturnal"]},
]

// Making next question function
//function nextQuestion(questionArray) {
    //questionElement.textContent.questionArray.question
    //answerButtons = questionArray.answer

