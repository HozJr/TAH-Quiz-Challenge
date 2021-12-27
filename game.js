var questions = [
    {
        title: "question 1:",
        choices: ["1", "2", "3", "4"],
        answer: ""
    },

    {
        title: "question 2:",
        choices: ["1", "2", "3", "4"],
        answer: ""
    },

    {
        title: "question 3:",
        choices: ["1", "2", "3", "4"],
        answer: ""
    },

    {
        title: "question 4:",
        choices: ["1", "2", "3", "4"],
        answer: ""
    },

    {
        title: "question 5:",
        choices: ["1", "2", "3", "4"],
        answer: ""
    },
];

// Variables
var score = 0;
var questionIndex = 0;
var Time = document.querySelector("#Time");
var timer = document.querySelector("#startTimer");
var questionsDiv = document.querySelector("#questionsDiv");
var mainbox = document.querySelector("#mainbox");

// Timer Variables
var secondsLeft = 76;
var holdTimer = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

// Triggers timer on button
timer.addEventListener("click", function () {
    if (holdTimer === 0) {
        holdTimer = setInterval(function () {
            secondsLeft--;
            Time.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdTimer);
                allDone();
                Time.textContent = "Time's up!";
            }
            }, 1000);
    }
    render(questionIndex);
});

function render(questionIndex) {
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";

    for (var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }

    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        questionsDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
}

// Compare choices with answer

function compare(event) {
    var element = event.target;

    if (elementmatches("li")) {
        
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");

        // Correct
        if (element.textContent == questions[questionIndex].answer) {
            score++;
            createDiv.textContent = "Correct! The answer is " + question[questionIndex].answer;

            // Wrong
            } else {
                secondsLeft = secondsLeft - penalty;
                createDiv.textContent = "Wrong! The correct answer is: " + question[questionIndex].answer;
            }
    }

    questionIndex++;

    if (questionIndex >= question.length) {
        allDone();createDiv.textContent = "End of quiz!" + " " + "You got " + score + "/" + question.length + " Correct!";

    } else {
        render(questionIndex);
    }
    questionsDiv.appendChild(createDiv);
}

function allDone() {
    questionsDiv.innerHTML = "";
    Time.innerHTML = "";

    //heading
    var createH1 = document.createElement("h1")
    createH1.setAttribute("id", "createH1");
    createH1.textContent = "All Done!"

    questionsDiv.appendChild(createH1);

    // Paragraph
    var createP = document.createElement("p");
    createP.setAttribute("id", "createP");

    questionsDiv.appendChild(createP);

    // Time remaining / score
    if (secondsLeft >= 0) {
        var timeRemaining = secondsLeft;
        var createP2 = document.createElement("p");
        clearInterval(holdInterval);
        createP.textContent = "Your final score is: " + timeRemaining;

        questionsDiv.appendChild(createP2);
    }

    // Label
    var createLabel = document.createElement("label");
    createLabel.setAttribute("id", "createLabel");
    createLabel.textContent = "Enter your initials: ";

    questionsDiv.appendChild(createLabel);

    // Input
    var createInput = document.createElement("input");
    createInput.setAttribute("type", "text");
    createInput.setAttribute("id", "initials");
    createInput.textContent = "";

    questionsDiv.appendChild(createInput);

    // Submit
    var createSubmit = document.createElement("button");
    createSubmit.setAttribute("type", "submit");
    createSubmit.setAttribute("id", "Submit");
    createSubmit.textContent = "Submit";

    // Event listener for initials and local storage
    createSubmit.addEventListener("click", function () {
        var initials = createInput.value;

        if (initials === null) {

            console.log("No value entered!");

        } else {
            var finalScore = {
                initials: initials,
                score: timeRemaining
            }
            console.log(finalScore);
            var allScores = localStorage.getItem("allScores");
            if (allScores === null) {
                allScores = [];
            } else {
                allScores = JSON.parse(allScores);
            }
            allScores.push(finalScore);
            var newScore = JSONstringify(allScores);
            localStorage.setItem("allScores", newScore);
            window.location.replace("./HighScore.html");
        }
    });
    
}