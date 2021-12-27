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