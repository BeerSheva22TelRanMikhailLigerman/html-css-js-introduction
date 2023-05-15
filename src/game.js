//configuration
const nTries = 3;
const vocabulary = [["Quation1", "aa"], ["Quation2", "ab"],["Quation3", "abc"],["Quation4", "aabb"],["Quation5", "qwerty"]];


//elements
const SQUARE = '<div id="square-id" class="square"></div>';
const cellsElement = document.getElementById("cells-id");
const goButtonElement = document.getElementById("go-id");
const inputElement = document.getElementById("input-id");
const questionElement = document.getElementById("question-id");
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
    let victory = 1;

    if (guess.length != answer.length && guess.length != 1)   {
        alert(`must be ${answer.length} letters or only one symbol`);
    }   

    if (guess.length == 1){
        squareElements.forEach(item => {
            if (item.innerHTML == guess) {
                item.style.backgroundColor = "white";
            }
        })
    }
    if (guess.length == answer.length){
        if (guess == answer){
            squareElements.forEach(item => item.style.backgroundColor = "white")
        }
    }
    let squareElementsArray = Array.from(squareElements);

    squareElements.forEach(item => {
        if (item.style.backgroundColor == "black") {victory = 0}
    });
    
    if (victory) {
        finishGame(1);
    } else {       
        if (count == nTries) {
            finishGame(0);
        }        
    }
    inputElement.value = '';
    
}

function startGame() {
    count = 0;
    const gameQuation = vocabulary[getRandomIntNumber(0, vocabulary.length)];
    answer = gameQuation[1];
    questionElement.innerHTML = gameQuation[0];
    goButtonElement.disabled = false;
    inputElement.readOnly = false;
    
    getsquareElements();
    resultMessageElement.innerHTML = '';
    playAgainButtonElement.hidden = true;
}
function finishGame(victory) {
    goButtonElement.disabled = true;
    inputElement.readOnly = true;
    playAgainButtonElement.hidden = false;
     resultMessageElement.innerHTML = victory ? `Congratulation! You won in ${count} steps` : resultMessageElement.innerHTML = `GameOver! Right answer was ${answer}`;
}
function getRandomIntNumber(min, max, minInclusive = true, maxInclusive = false) {
    if (!minInclusive) { min++; }
    if (maxInclusive) { max++; }
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}
function getsquareElements(){        
    cellsElement.innerHTML = SQUARE.repeat(answer.length);;
    squareElements = document.querySelectorAll(".square");      
    squareElements.forEach((item, index) => {
        item.innerHTML = answer[index] ;
        item.style.backgroundColor = "black";
    });
    
    //openRandomElements();


    
    
}

//Actions
goButtonElement.addEventListener("click", game);
playAgainButtonElement.addEventListener("click", startGame)
startGame();

