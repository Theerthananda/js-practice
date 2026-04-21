
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let gameScore = 0;
let totalAttempts = 5;



const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const scoreEl = document.getElementById("score-el");
const attemptsEl = document.getElementById("attempts-el");
const attemptWarnEl = document.getElementById("attemptWarn-el");


const startBtn = document.getElementsByClassName("btn")[0];
const newCardBtn = document.getElementsByClassName("btn")[1];
const resetBtn = document.getElementsByClassName("btn")[2];
const quitBtn = document.getElementsByClassName("btn")[3];
const finalBtn = document.getElementsByClassName("btn")[4]; 



function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;

    if (card > 10) {
        return 10;
    }
    else if (card === 1) {
        return 11;
    }
    else {
        return card;
    }
}



function startGame() {
    if (totalAttempts <= 0) {
        quitGame();
        return;
    }
    totalAttempts--;
    attemptsEl.textContent = "Total Attempts available: " + totalAttempts;

    isAlive = true;
    hasBlackJack = false;

    cards = [getRandomCard(), getRandomCard()];
    renderGame();
}



function newCard() {
    if (!isAlive || hasBlackJack) return;

    if (totalAttempts <= 0) {
        quitGame();
        return;
    }

    totalAttempts--;
    attemptsEl.textContent = "Total Attempts available: " + totalAttempts;

    let card = getRandomCard();
    cards.push(card);

    renderGame();
}



function renderGame() {
    sum = 0;

    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }

   
    cardsEl.textContent = "Cards: " + cards.join(" | ");
    sumEl.textContent = "Sum: " + sum;

  
    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
        newCardBtn.style.display = "";
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 😀";
        hasBlackJack = true;
        gameScore += 10;
        newCardBtn.style.display = "none";
        totalAttempts = 5; 
        attemptsEl.textContent = "Total Attempts available: " + totalAttempts;
    } 
    else {
        message = "You're out of the game! 😟";
        isAlive = false;
        gameScore -= 5;
        newCardBtn.style.display = "none";
    }

    messageEl.textContent = message;
    scoreEl.textContent = "Your Wins: $" + gameScore;
}



function resetGame() {
    cards = [];
    sum = 0;
    isAlive = false;
    hasBlackJack = false;
    totalAttempts = 5;

    messageEl.textContent = "Do you want to draw a new card?";
    sumEl.textContent = "Sum:";
    cardsEl.textContent = "Cards:";
    attemptsEl.textContent = "Total Attempts available: " + totalAttempts;

    startBtn.style.display = "";
    newCardBtn.style.display = "";
}



function quitGame() {
    messageEl.textContent = "Game Over! Thanks for playing.";
    cardsEl.textContent = "Cards:";
    sumEl.textContent = "Sum:";

    startBtn.style.display = "none";
    newCardBtn.style.display = "none";
    resetBtn.style.display = "none";
    quitBtn.style.display = "none";

    scoreEl.textContent = "Your Wins: $" + gameScore;
    gameScore = 0;

    finalBtn.style.display = "";
}

