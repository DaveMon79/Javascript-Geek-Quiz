// Variables for functions which will be called in the pagee

var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var answer = document.getElementById("answer");
var timerCount = document.getElementById("timer-count");
var choicesSection = document.querySelector('#choices-section');

var initialsPage = document.getElementById("initials-page");
var initialsInput = document.getElementById("initials-input");
var finalScore = document.getElementById("final-score");

var submitButton = document.getElementById("submit-button");
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");


var currentQuestion = {};
var score = 0;
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



// When an answer button is clicked, it removes time for incorrect answer and adds score for a correct answer. It ends game once all questions have been answered
function questionClick(event) {
    var buttonEl = event.target
    if (buttonEl.value !== questions[currentQuestionIndex].answer) {
        startTime -= 10;
        alert("Wrong answer!");

    }

    if (buttonEl.value === questions[currentQuestionIndex].answer) {
        score += 100
        alert("Correct - Well done");

    }
    currentQuestionIndex++;

    if (currentQuestionIndex < 4) {
        showQuestion()
    } else {
        endGame()
        
    }

    questionText = document.getElementById("question-text")
    timerCount.textContent = startTime

}


// Starts a 60 second timer clock which stops game at zero
function startTimer() {

    var timer = setInterval(function () {
        startTime--;
        timerCount.textContent = startTime;

        if (startTime === 0) {
            clearInterval(timer);
            endGame()
        }
    }, 1000);

}

// Listens for answer choice then actives question click funstion
choicesSection.onclick = questionClick


// Endgame function takes to the final score div and display score and lets you input initals.
function endGame() {
    location.href = './index2.html';
    finalScore.innerHTML == score;
    var initialsInput = document.getElementById("initials-input").value;
    var initialsInput = localStorage.getItem("initials-input", initialsInput);
    
}


// removes initils section and displays high sccores section and displays saved high scores
function highScoresPage() {
    document.querySelector("#high-scores").style.display = "block";
    document.querySelector("#initials-page").style.display = "none";

}


// This ssection was intended to clear the highscores and local storage when the clearscore button was clicked. 
// Then take you back to start quiz screen
function clearStorage() {
        highscore-name.textContent == "" ;
        localStorage.clear(initialsInput, score);
        goBack()
}

// This was supposed to take you back to the start quiz screen and hide the highscores section, and display the initials input section
function goBack() {
    location.href = './index.html';
    document.querySelector("#high-scores").style.display = "none";
    document.querySelector("#initials-page").style.display = "block";
}

// Start quiz when the quiz button is clicked
startButton.addEventListener("click", startQuiz);

// It directs you to highscores page when submit button is pressed - I can't get the function to work
submitButton.addEventListener("click", highScoresPage);

// It directs you to clearStorage page when submit button is pressed - I can't get the function to work
clearScoresButton.addEventListener("click", clearStorage);