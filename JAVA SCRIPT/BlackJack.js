//2.14
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0
let gameScore = 0
let firstCard = 0
let secondCard = 0


function renderGame() {
document.getElementsByClassName("btn")[4].style.display = "none";

document.getElementsByClassName("btn")[0].textContent = "CONTINUE GAME"
document.getElementsByClassName("btn")[1].style.display = "";
document.getElementsByClassName("btn")[2].style.display = "none";
document.getElementsByClassName("btn")[3].style.display = "none"


firstcard =Math.floor(Math.random() * 15) + 1 
secondcard =Math.floor(Math.random() * 15) + 1
sum = firstcard + secondcard


if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    hasBlackJack = false
    isAlive = true
    document.getElementsByClassName("btn")[3].style.display = ""
} 
else if (sum === 21) {
    hasBlackJack = true
    message = "Wohoo! You've got Blackjack! 😀"
    document.getElementsByClassName("btn")[0].textContent= "CONTINUE GAME";
    document.getElementsByClassName("btn")[1].style.display = "none"
    document.getElementsByClassName("btn")[2].style.display = "";
    document.getElementsByClassName("btn")[3].style.display = ""
    gameScore+=10;

} else {
    message = "You're out of the game! 😟"
    isAlive = false
   
    document.getElementsByClassName("btn")[0].style.display = "none";
    document.getElementsByClassName("btn")[1].style.display = "none";
    document.getElementsByClassName("btn")[2].style.display = "";
    gameScore-=5;
    document.getElementsByClassName("btn")[3].style.display = "";

}

console.log(message)
document.getElementById("message-el").textContent = message 

document.getElementById("sum-el").textContent = "Sum: " + sum
document.querySelector("#cards-el").textContent = "Cards:  First Card ->" + firstcard + " | "+"Second Card ->"+ secondcard

document.getElementById("score-el").textContent = "Game Score: " + gameScore

 }

 function startGame() {
    document.getElementsByClassName("btn")[3].style.display = "none"
    
    renderGame();
 }



function newCard() {

    console.log("Drawing a new card from the deck!");
    if (isAlive === true && hasBlackJack === false) {
        let card = Math.floor(Math.random() * 15) + 1
        sum += card
        document.getElementById("sum-el").textContent = "Sum: " + sum
        document.querySelector("#cards-el").textContent += " | " + "\nNew Card ->" + card
        renderGame();
   }

}

function resetGame() {
    hasBlackJack = false;
    isAlive = true;
    message = "";
    gameScore = 0;
    sum = 0;
    document.getElementsByClassName("btn")[1].style.display = "";
    document.getElementsByClassName("btn")[0].style.display = "";
    document.getElementById("message-el").textContent = "Do you want to draw a new card?";
    document.getElementById("sum-el").textContent = "Sum: ";
    document.querySelector("#cards-el").textContent = "Cards: ";
    document.getElementsByClassName("btn")[1].style.display = "";
    document.getElementsByClassName("btn")[0].textContent = "START GAME";
    document.getElementById("score-el").textContent = "Game Score: " + gameScore;
}

function quitGame() {
    document.getElementsByClassName("btn")[4].style.display = "";
    console.log("Quitting the game...");
    let message = "";
    sum = 0
    firstCard = 0
    secondCard = 0
    hasBlackJack = false;
    isAlive = false;
    document.getElementById("message-el").textContent = "Game Over! Thanks for playing.";
    document.getElementById("sum-el").textContent = "Sum: ";
    document.querySelector("#cards-el").textContent = "Cards: ";
    document.getElementById("score-el").textContent = "Game Score: " + gameScore;
    document.getElementsByClassName("btn")[0].style.display = "none";
    document.getElementsByClassName("btn")[1].style.display = "none";
    document.getElementsByClassName("btn")[2].style.display = "none";
    document.getElementsByClassName("btn")[3].style.display = "none";
    gameScore = 0;




}