//Global variables to use in functions
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");
var initialsInput = "";
var score = "";

// Calls function
addHighscores ();


//retrieves Initials and score local storage and display them in a list - i wasn't able to get this funtion working
function addHighscores () {
    localStorage.getItem("initials-input",initialsInput);
    localStorage.getItem("score", score);

    var highscoresName = document.getElementById("highscore-name");
    var li = document.createElement ("LI")
    li.setAttribute('class', 'scores-list')
    highscoresName.appendChild(li);
    li.textContent = initialsInput, score;

}
    



// This ssection was intended to clear the highscores and local storage when the clearscore button was clicked. 
// Then take you back to start quiz screen
function clearStorage() {
        localStorage.removeItem (initialsInput);
        localStorage.removeItem (score);
        location.href = './index.html';
}

// This takes you back to the start quiz screen and hide the highscores section, and display the initials input section
function goBack() {
    location.href = './index.html';
  
}



// It directs you back to start page when submit button is pressed
goBackButton.addEventListener("click", goBack);

// It directs you to clearStorage page when submit button is pressed - I can't get the function to work
clearScoresButton.addEventListener("click", clearStorage);