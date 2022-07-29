// Variables for functions which will be called in the pagee

var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var answer = document.getElementById("answer");
var timerCount = document.getElementById("timer-count");
var choicesSection = document.getElementById('choices-section');

var submitButton = document.getElementById("submit-button");
var finalScore = document.getElementById("final-score");

var currentQuestion = {};
var score = 0;
var currentQuestionIndex = 0
var timer

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


choicesSection.addEventListener("click", questionClick);

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
        scoreInitialsPage()

    }

}

// Starts a 60 second timer clock which stops game at zero
function startTimer() {

    var timer = setInterval(function () {
        startTime--;
        timerCount.textContent = startTime;

        if (startTime === 0) {
            clearInterval(timer);
            scoreInitialsPage()

        }
    }, 1000);

}


// Removes questions section and display Initials page. It adds the score and user initials to local storage
function scoreInitialsPage() {
    document.querySelector(".question").style.display = "none";
    document.querySelector(".enter-initals").style.display = "block";
    finalScore.textContent = score;
    localStorage.setItem("score", score);
    var initialsInput = document.getElementById("initials-input").value;
    localStorage.setItem("initials-input", initialsInput);
    
}


// Endgame function takes to the highscores page.
function endGame() {
    document.querySelector(".enter-initals").style.display = "none";
    document.querySelector(".question").style.display = "block";
    location.href = './index2.html';
}



startButton.addEventListener("click", startQuiz);

// It directs you to highscores page when submit button is pressed - I can't get the function to work
submitButton.addEventListener("click", endGame);
