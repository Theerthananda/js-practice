let firstcard = 10//Math.floor(Math.random() * 11) + 1
let secondcard = 14//Math.floor(Math.random() * 11) + 1
let sum = firstcard + secondcard

let hasBlackJack = false;
let isAlive = true;

console.log("First Card: " + firstcard)
console.log("Second Card: " + secondcard)
console.log("Sum: " + sum)

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} 
else if (sum === 21) {
    hasBlackJack = true
    console.log("Wohoo! You've got Blackjack!")
} else {
    console.log("You're out of the game!")
    isAlive = false
}


console.log(hasBlackJack)
console.log(isAlive)

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