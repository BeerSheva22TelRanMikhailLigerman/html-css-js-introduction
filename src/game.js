//configuration
const nTries = 6;
const vocabulary = ["apple", "comma", "width", "scope", "floor", "sport", "guess"];
//elements
const goButtonElement = document.getElementById("go-id");
const inputElement = document.getElementById('input-id');

//const squareElement = document.getElementById("square-id");
const squareElements = document.querySelectorAll(".square");

const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");
//global variables
let count = 0;
let word;
//functions
function game() {

    const guess = (inputElement.value).toLowerCase();

    let victory = 1;
    for (let i = 0; i < 5; i++) {
        squareElements[i].innerHTML = guess[i];
        if (guess[i] == word[i]) {
            squareElements[i].style.backgroundColor = "green";
        } else {
            if (word.includes(guess[i])) {
                squareElements[i].style.backgroundColor = "yellow";
                victory = 0;
            } else {
                squareElements[i].style.backgroundColor = "gray";
                victory = 0;
            }
        }
    }
    if (victory) {
        finishGame(1);
    } else {
        count++;
        if (count == nTries) {
            finishGame(0);
        }
        
    }
    inputElement.value = '';

}
function startGame() {
    count = 0;
    word = vocabulary[getRandomIntNumber(0, vocabulary.length)];
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    squareElements.forEach(item => {
        item.style.backgroundColor = "white";
        innerHTML = ' '});
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}
function finishGame(victory) {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    victory ? resultMessageElement.innerHTML = `Congratulation! You won in ${count} steps` : resultMessageElement.innerHTML = `GameOver! Right answer is ${word}`;
}
function getRandomIntNumber(min, max, minInclusive = true, maxInclusive = false) {
    if (!minInclusive) { min++; }
    if (maxInclusive) { max++; }
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

//Actions
goButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame)
startGame();

