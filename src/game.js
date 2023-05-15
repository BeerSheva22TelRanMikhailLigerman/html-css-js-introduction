//configuration
const nTries = 3;
//const vocabulary = ["apple", "comma", "table", "happy", "width", "scope", "floor", "sport", "guess"];
//const vocabulary = ["a", "bb", "abc", "abcabc"];
const vocabulary = [["Quation1", "aa"], ["Quation2", "ab"],["Quation3", "abc"],["Quation4", "aabb"],["Quation5", "qwerty"],];


//elements
const SQUARE = '<div id="square-id" class="square"></div>';
const cellsElement = document.getElementById("cells-id");
const goButtonElement = document.getElementById("go-id");
const inputElement = document.getElementById("input-id");
const questionElement = document.getElementById("question-id");

//const squareElements = document.querySelectorAll(".square");
 

const resultMessageElement = document.getElementById("game-result");
const playAgainButtonElement = document.getElementById("play-again-id");

//global variables
let count = 0;
let quastion = '';
let answer = '';
let squareElements;

//functions
function game() {
    const guess = (inputElement.value).toLowerCase();
    count++;

    if (guess.length != answer.length) {
        alert(`must be ${answer.length} letters`);            // ? break
    } else {
        let victory = 1;
    for (let i = 0; i < answer.length; i++) {
        squareElements[i].innerHTML = guess[i];
        if (guess[i] == answer[i]) {
            squareElements[i].style.backgroundColor = "green";
        } else {
            if (answer.includes(guess[i])) {
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
        if (count == nTries) {
            finishGame(0);
        }        
    }
    inputElement.value = '';
    }
}

function startGame() {
    count = 0;
    const gameQuation = vocabulary[getRandomIntNumber(0, vocabulary.length)];
    answer = gameQuation[1];
    questionElement.innerHTML = gameQuation[0];
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    // squareElements.forEach(item => {
    //     item.style.backgroundColor = "white";
    //     item.innerHTML = ' '});
    getsquareElements();
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}
function finishGame(victory) {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
    victory ? resultMessageElement.innerHTML = `Congratulation! You won in ${count} steps` : resultMessageElement.innerHTML = `GameOver! Right answer is ${answer}`;
}
function getRandomIntNumber(min, max, minInclusive = true, maxInclusive = false) {
    if (!minInclusive) { min++; }
    if (maxInclusive) { max++; }
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}
function getsquareElements(){        
    cellsElement.innerHTML = SQUARE.repeat(answer.length);;
    squareElements = document.querySelectorAll(".square");    
}

//Actions
goButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame)
startGame();

