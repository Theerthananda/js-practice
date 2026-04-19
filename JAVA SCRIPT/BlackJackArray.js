//2.14
let hasBlackJack = false;
let isAlive = true;
let message = "";
let sum = 0

function renderGame() {
document.getElementsByClassName("btn")[0].textContent = "CONTINUE GAME"
document.getElementsByClassName("btn")[1].style.display = "";
let firstcard =Math.floor(Math.random() * 15) + 1 
let secondcard =Math.floor(Math.random() * 15) + 1
sum = firstcard + secondcard


if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    hasBlackJack = false
    isAlive = true
} 
else if (sum === 21) {
    hasBlackJack = true
    message = "Wohoo! You've got Blackjack! 😀"
    document.getElementsByClassName("btn")[1].style.display = "none";
    document.getElementsByClassName("btn")[0].textContent = "START NEW GAME"

} else {
    message = "You're out of the game! 😟"
    isAlive = false
    document.getElementsByClassName("btn")[1].style.display = "none";
    document.getElementsByClassName("btn")[0].textContent = "NEW GAME"

}

console.log(message)
document.getElementById("message-el").textContent = message 

document.getElementById("sum-el").textContent = "Sum: " + sum
document.querySelector("#cards-el").textContent = "Cards:  First Card ->" + firstcard + " | "+"\nSecond Card ->"+ secondcard

 }

 function startGame() {
    
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

