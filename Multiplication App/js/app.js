const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10)

const mathematicalOperation = ['*', '/', '+', "-"];
const operationPosition = randomIntFromInterval(0, (mathematicalOperation.length - 1));

const choosenOperation = mathematicalOperation[operationPosition];

const questionElement = document.getElementById("question");
questionElement.innerText = `What is ${num1} ${choosenOperation} ${num2} ?`;

const correctAnswer = getCorrectAnswer();
let scoreValue = JSON.parse(localStorage.getItem("scores"));

if (!scoreValue) {
    scoreValue = 0;
}
scoreElement.innerText = `score: ${scoreValue}`

const formElement = document.getElementById("form");
const inputElement = document.getElementById("input");
const scoreElement = document.getElementById("score");

formElement.addEventListener("submit", () => {
    const userAnswer = +inputElement.value
    if (userAnswer === correctAnswer) {
        scoreValue++;
        updateLocalStorage()
    } else {
        scoreValue--;
        updateLocalStorage()
    }
});

function updateLocalStorage() {
    localStorage.setItem("scores", JSON.stringify(scoreValue));
}

function getCorrectAnswer() {
    switch (operationPosition) {
        case 0: return num1 * num2;
        case 1: return num1 / num2;
        case 2: return num1 + num2;
        case 3: return num1 - num2;
        default: break;
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
}