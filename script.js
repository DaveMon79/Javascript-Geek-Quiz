// Variables for functions which will be called in the page

var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var answer = document.getElementById("answer");
var timerCount = document.getElementById("timer-count");
var choicesSection = document.getElementById('choices-section');

var submitButton = document.getElementById("submit-button");
var finalScore = document.getElementById("final-score");
var initialsInput = "";

var currentQuestion = {};
var score = 0;
var currentQuestionIndex = 0
var timer


// Questions for the quiz
var questions = [
    {

        question: "Arrays in Javascript can be used to store what_______?",
        choices: ['Numbers', 'Other arrays', 'Booleans', 'All the above'],
        answer: "All the above",

    },

    {

        question: "The condition in an if statement is enclosed in with________?",
        choices: ["Quotes", "Curly brackets", "Parenthesis", 'Square brackets'],
        answer: "Parenthesis",

    },

    {

        question: "String values must be enclosed with______when being assigned to variables?",
        choices: ["Comas", "Curly brackets", "Quotes", "Parenthesis"],
        answer: "Curly brackets",

    },

    {

        question: "A very useful tool used during development and debugging for printing content to the debugger is______?",
        choices: ["Javascript", "Terminal", "Console Log", "for loops"],
        answer: "Console Log",

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


// Removes questions section and display Initials page. 
function scoreInitialsPage() {
    document.querySelector(".question").style.display = "none";
    document.querySelector(".enter-initals").style.display = "block";
    finalScore.textContent = score;
    //localStorage.setItem("score", JSON.stringify(score));
    
}


// Endgame function takes to the highscores page. It adds the score and user initials to local storage
function endGame() {
    initialsInput = document.getElementById("initials-input").value;
    results = [initialsInput, score];
    localStorage.setItem("results", JSON.stringify(results));
    document.querySelector(".enter-initals").style.display = "none";
    document.querySelector(".question").style.display = "block";
    location.href = './index2.html';
        
}


// Starts quiz when button is clicked
startButton.addEventListener("click", startQuiz);

// It directs you to highscores page when submit button is pressed - I can't get the function to work
submitButton.addEventListener("click", endGame);
