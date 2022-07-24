// Variables for functions which will be called in the pagee

var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var answer = document.getElementById("answer");
var timerCount = document.getElementById("timer-count");
var choicesSection = document.querySelector('#choices-section');

var initialsPage = document.getElementById("initials-page");
var finalScore =document.getElementById("final-score");

var submitButton = document.getElementById("submit-button");
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");


var currentQuestion = {};
var score = "";
var currentQuestionIndex = 0

// Questions for the quiz
var questions = [
    {

        question: "The very first UFC event took place on Fri, 12 Nov 1993, but who won UFC 1?",
        choices: ['Chuck Liddell', 'Forrest Griffin', 'Royce Gracie', 'BJ Penn'],
        answer: "Royce Gracie",

    },

    {

        question: "Who was the first fighter to beat Georges St. Pierre?",
        choices: ["Johny Hendricks", "Matt Hughes", "Matt Serra", 'BJ Penn'],
        answer: "Matt Hughes",

    },

    {

        question: "Who was the first fighter to hold UFC titles in multiple divisions at the same time?",
        choices: ["Randy Couture", "BJ Penn", "Amanda Nunes", "Connor McGreggor"],
        answer: "Connor McGreggor",

    },

    {

        question: "How many times did Anderson Silva defend his middleweight title?",
        choices: ["8", "9", "10", "11"],
        answer: "10",

    }
]

var startTime = 60

// Start quiz when the quiz button is clicked
startButton.addEventListener("click", startQuiz);

// starts quiz setting the score as 0, removes the start quiz from page and actives the startTimer & show questions functions
function startQuiz() {
    score;
    document.querySelector("#start-div").style.display = "none";
    startTimer();
    showQuestion();

}

function showQuestion() {
//  makes the questions appear - It was set as none display in CSS
    document.querySelector(".question").style.display = "block";
// This section pulls the questions and answer string and displays them one at a time
    var currentQuestion = questions[currentQuestionIndex]
    var qEl = document.querySelector('#question-text')   
    qEl.textContent = currentQuestion.question
    choicesSection.innerHTML = ''
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var choice = currentQuestion.choices[i]
        var choiceBtn = document.createElement('button')
        choiceBtn.setAttribute('value', choice)
        choiceBtn.setAttribute('class', 'choice-btn')
        choiceBtn.textContent = choice
        choicesSection.appendChild(choiceBtn)
        
    }

}

// When an answer button is clicked, it removes time for incorrect answer and adds score for a correct answer
function questionClick(event) {
    var buttonEl = event.target
    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        startTime -= 10
        answer.textContent = "Wrong answer!"

    }
    if (buttonEl.value === questions[currentQuestionIndex].answer)
        score += 100
        console.log(score)
        
    
    questionText = document.getElementById("question-text")
    timerCount.textContent = startTime
    currentQuestionIndex++
    showQuestion()
    
  }

// Starts a 60 second timer clock which stops game at zero
function startTimer() {

    var timer = setInterval(function () {
        startTime--;
        timerCount.textContent = startTime;

        if (startTime === 0) {
            clearInterval(timer);
            endGame () 
        }
    }, 1000);
    
}



// Listens for answer choice then actives question click funstion
choicesSection.onclick = questionClick

// Endgame function takes to the final score div and display score and lets you input initals.
// It directs you to highscores page when submit button is pressed

function endGame () {
    location.href = './index2.html';
    finalScore.innerHTML = "score";
 
    
}


submitButton.onclick = highScoresPage 

// removes initils section and displayss high sccores section and displays saved high scores
function highScoresPage () {
    document.querySelector("#high-scores").style.display = "block";
    document.querySelector("#initials-page").style.display = "none";
    
}

