//2.14
let hasBlackJack = false;
let isAlive = true;
let message = "";

function startGame() {
let firstcard =Math.floor(Math.random() * 15) + 1 
let secondcard =Math.floor(Math.random() * 15) + 1
let sum = firstcard + secondcard


if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
} 
else if (sum === 21) {
    hasBlackJack = true
    message = "Wohoo! You've got Blackjack! 😀"
} else {
    message = "You're out of the game! 😟"
    isAlive = false
}

console.log(message)
document.getElementById("message-el").textContent = message 

document.getElementById("sum-el").textContent = "Sum: " + sum
document.getElementById("cards-el").textContent = "Cards:  First Card ->" + firstcard + " | "+"\nSecond Card ->"+ secondcard



}

/*
//if else demonstration

let age=22-2-4

if (age < 18) {
    console.log("You cannot enter the club")
} else if (age === 21) {
    console.log("You can enter the club but cannot drink")
} else {
    console.log("You can enter the club and drink")
}


age=100;

if (age < 100) {
    console.log("You are not a centenarian")
} else if (age === 100) {  //=== is used to check for both value and type equality and == is used to check for value equality only
    console.log("You are a centenarian")
} else {
    console.log("You are a supercentenarian")
}*/