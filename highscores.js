//Global variables to use in functions
var goBackButton = document.getElementById("go-back");
var clearScoresButton = document.getElementById("clear-scores");
var highscoresName = document.getElementById("highscore-name");
var results = JSON.parse(localStorage.getItem ("results")) || [];





//retrieves Initials and score from local storage and display them in an LI
function addHighscores() {
    console.log(results);
    var li = document.createElement ("LI")
    li.setAttribute('class', 'scores-list')
    highscoresName.appendChild(li);
    li.textContent = results;

}
    



// This ssection was intended to clear the highscores and local storage when the clearscore button was clicked. 
// then takes you back to start quiz screen
function clearStorage() {
        localStorage.removeItem ('results');
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

addHighscores()