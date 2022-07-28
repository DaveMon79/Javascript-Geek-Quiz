//Global variables to use in functions
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");
var highscoresName = document.getElementById("highscore-name");
var highscoresArray = ["","","","","",""];
var ul = document.getElementById("highscore-name");



//retrieves Initials and score local storage and display them in a list - i wasn't able to get this funtion working
function addHighscores () {
    localStorage.getItem("initials-input", initialsInput);
    localStorage.getItem("score", score);
    
    highscoresArray.forEach(function (e) {
        var li = document.createElement("li")
        li.innerText = initialsInput.value + score
        highscoresName.appendChild(li);
        
    });

    }
    



// This ssection was intended to clear the highscores and local storage when the clearscore button was clicked. 
// Then take you back to start quiz screen
function clearStorage() {
        localStorage.clear(initialsInput);
        localStorage.clear(score);
        goBack()
}

// This takes you back to the start quiz screen and hide the highscores section, and display the initials input section
function goBack() {
    location.href = './index.html';
  
}



// It directs you back to start page when submit button is pressed
goBackButton.addEventListener("click", goBack);

// It directs you to clearStorage page when submit button is pressed - I can't get the function to work
clearScoresButton.addEventListener("click", clearStorage);