// Variables
var highScore = document.querySelector("#highScore");
var goBack = document.querySelector("#goBack");

var allScores = localStorage.getItem("allScores");
allScores = JSON.parse(allScores);

if (allScores !== null) {

    for (var i = 0; i < allScores.length; i++) {

        var createLi = document.createElement("li");
        createLi.textContent = allScores[i].initials + " " + allScores[i].score;
        highScore.appendChild(createLi);
    }
}

// Listener to move Index Page
goBack.addEventListener("click", function () {
    window.location.replace("./index.html");
});