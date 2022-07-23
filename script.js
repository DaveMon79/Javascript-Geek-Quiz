
// make start button load first question and start timer

// make true answers add to score

// make false answers decrease from score

// store intials and scores on local storage

// load previous high scores

// Clear scores when clear button pressed



var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");
var timerCount = document.getElementById("timer-count");
var choicesButton = Array.from(document.getElementById("choices-button"));

var currentQuestion = {};
var availibleQuestions = [];
var score = 0;
var questionCounter = 0;
var correctAnswer = true;
var startTime = "";

var questions = [
    {

        Question: "The very first UFC event took place on Fri, 12 Nov 1993, but who won UFC 1?",
        choice1: "Chuck Liddell",
        choice2: "Forrest Griffin",
        choice3: "Royce Gracie",
        choice4: "BJ Penn",
        answer: "3",

    },

    {

        Question: "Who was the first fighter to beat Georges St. Pierre?",
        choice1: "BJ Pennn",
        choice2: "Matt Hughes",
        choice3: "Matt Serra",
        choice4: "Johny Hendricks",
        answer: "2",

    },

    {

        Question: "Who was the first fighter to hold UFC titles in multiple divisions at the same time?",
        choice1: "Randy Couture",
        choice2: "BJ Penn",
        choice3: "Amanda Nunes",
        choice4: "Connor McGreggor",
        answer: "3",

    },

    {

        Question: "How many times did Anderson Silva defend his middleweight title?",
        choice1: "8",
        choice2: "9",
        choice3: "10",
        choice4: "11",
        answer: "3",

    }
]


startButton.addEventListener("click", startQuiz);


function startQuiz () {
    startTime = 90;
    score = 0;
    allQuestions = [...questions];
    newQuestion();
    startTimer();


}

function startTimer () {

    var startTime = setInterval(function () {
        startTime--;
        timerCount.textContent = startTime;

        if  (correctAnswer !== true) {
            - 10 (startTime)
        }
        
        if (timerCount === 0) {
            clearInterval(timer);
                }
    }, 1000);
}

function newQuestion () {
    questionCounter++;
    var questionIndex = Math.floor(math.random() * 3);
    currentQuestion = allQuestions[questionIndex],
        questionText.innerText = currentQuestion.questionText;


    choicesButton.forEach(choice => {
        var number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number]
    }
    );

    allQuestions.splice(questionIndex, 1);

    correctAnswer = true;
}

choicesButton.forEach(choice => {
    choicesButton.addEventListener("click", e => {
        if (!correctAnswer) return;

        correctAnswer = false;
        var selectedChoice = e.target;
        var selectedAnswer = selectedChoice.dataset["number"]
        console.log(selectedAnswer);
        newQuestion();

    });
})







//choicesButton.addEventListener("click", "choice");
//goBackButton.addEventListener("click", "go-back");
//clearScoresButton.addEventListener("click", "clear-scores");