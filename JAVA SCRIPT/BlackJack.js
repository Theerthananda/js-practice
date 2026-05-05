/*
===========================================
🃏 Blackjack Game (JavaScript)
===========================================

Features:
✔ Start game with random cards
✔ Draw new cards
✔ Track sum and game state
✔ Score system (win/lose)
✔ Limited attempts system
✔ Reset and quit functionality
✔ DOM manipulation for UI updates
===========================================
*/


/*
===========================================
🔹 GAME STATE VARIABLES
===========================================
*/

let cards = [];           // Stores current cards
let sum = 0;              // Sum of card values
let hasBlackJack = false; // True if player hits 21
let isAlive = false;      // True if player is still in game
let message = "";         // Status message

let gameScore = 0;        // Player score
let totalAttempts = 5;    // Attempts available


/*
===========================================
🔹 DOM ELEMENT REFERENCES
===========================================
*/

const messageEl = document.getElementById("message-el");
const sumEl = document.getElementById("sum-el");
const cardsEl = document.getElementById("cards-el");
const scoreEl = document.getElementById("score-el");
const attemptsEl = document.getElementById("attempts-el");
const attemptWarnEl = document.getElementById("attemptWarn-el");


// Buttons
const startBtn = document.getElementsByClassName("btn")[0];
const newCardBtn = document.getElementsByClassName("btn")[1];
const resetBtn = document.getElementsByClassName("btn")[2];
const quitBtn = document.getElementsByClassName("btn")[3];
const finalBtn = document.getElementsByClassName("btn")[4]; 


/*
===========================================
🔹 RANDOM CARD GENERATOR
===========================================

- Generates number from 1 to 13
- Face cards (J, Q, K) → 10
- Ace (1) → 11
*/

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


/*
===========================================
🔹 START GAME
===========================================

- Checks attempts
- Initializes game state
- Deals two cards
*/

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


/*
===========================================
🔹 DRAW NEW CARD
===========================================

- Only works if player is alive and no blackjack
- Reduces attempts
- Adds new card
*/

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


/*
===========================================
🔹 RENDER GAME STATE
===========================================

- Calculates sum
- Updates UI
- Handles win/lose logic
*/

function renderGame() {
    sum = 0;

    // Calculate sum
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
    }

    // Update UI
    cardsEl.textContent = "Cards: " + cards.join(" | ");
    sumEl.textContent = "Sum: " + sum;


    /*
    🔸 GAME LOGIC
    */

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂";
        newCardBtn.style.display = "";
    } 
    else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 😀";
        hasBlackJack = true;

        gameScore += 10;

        newCardBtn.style.display = "none";

        // Reset attempts on win
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


/*
===========================================
🔹 RESET GAME
===========================================

- Clears game state
- Restores UI
*/

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


/*
===========================================
🔹 QUIT GAME
===========================================

- Ends game completely
- Hides controls
- Resets score
*/

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


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ Game flow:
   Start → Draw cards → Check sum → Win/Lose

✔ State control:
   - isAlive → game active
   - hasBlackJack → win condition

✔ Attempts system:
   - Limits number of actions
   - Resets on win

✔ DOM manipulation:
   - Updates UI dynamically

✔ Score system:
   +10 → win
   -5 → loss

===========================================
*/