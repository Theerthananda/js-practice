/*
===========================================
📘 JavaScript Practice (Arrays, DOM, Objects)
===========================================

Covers:
✔ Array methods (pop, push, shift, unshift, splice)
✔ join() and string formatting
✔ DOM manipulation
✔ Looping through arrays
✔ Random dice generator
✔ Object iteration methods
✔ Object size calculation
✔ Object methods
===========================================
*/


/*
===========================================
🔹 ARRAY MANIPULATION
===========================================
*/

let arr = [1,2,3,4,5,6,8,90,34,12,56,78,98,67,45,23,45,67,89,90,12,34,56,78,90];

// Remove last element
arr.pop();
console.log(arr.join(", "));

// Add element at beginning
arr.unshift(100);
console.log(arr.join(", "));

// Remove first element
arr.shift();
console.log(arr.join(", "));


// Insert without deleting
arr.splice(2,0,200);
console.log(arr.join(", "));

// Remove 1 element at index 2
arr.splice(2,1);
console.log(arr.join(", "));

// Remove 3 elements from index 2
arr.splice(2,3);
console.log(arr.join(", "));

// Replace 3 elements
arr.splice(2,3,200,300,400);
console.log(arr.join(", "));

// Replace with more elements
arr.splice(2,3,200,300,400,500,600);
console.log(arr.join(", "));

// Insert multiple at start
arr.splice(0,0,100,200,300,400,500,600);
console.log(arr.join(", "));

// Insert single at start
arr.splice(0,0,1000);
console.log(arr.join(", "));


/*
===========================================
🔹 ARRAY TO STRING + DOM
===========================================
*/

let Greetings = [
    "Hello",
    "Hi  Theerthananda",
    "Welcome",
    "Good Morning",
    "Good Afternoon",
    "Good Evening"
];

// Using innerHTML
document.getElementById("Array").innerHTML = Greetings.join("  ");


// Append using loop
for(let i = 0; i < Greetings.length; i++){
    document.getElementById("Array").textContent += Greetings[i] + "  ";
}


// Build string manually
let res = "";

for (let i = 0; i < Greetings.length; i++) {
    res += Greetings[i] + " ";
}

console.log(res);

// Final output to DOM
document.getElementById("Array").textContent = res;


/*
===========================================
🔹 RANDOM DICE GENERATOR
===========================================

- Generates 5 random numbers (1–6)
*/

function rollDice(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let dice4 = Math.floor(Math.random() * 6) + 1;
    let dice5 = Math.floor(Math.random() * 6) + 1;
    
    return [dice1, dice2, dice3, dice4, dice5];
}

let diceRolls = rollDice();
console.log("Dice Rolls: " + diceRolls.join("|"));


/*
===========================================
🔹 OBJECT ITERATION METHODS
===========================================
*/

let studentDetails = {
    name: "Theerthananda",
    age: 21,
    course: "MSc Computer Science",
    university: "University of Mysore"
};

console.log("Student Details: (Using for...in loop)");
for (let key in studentDetails) {
    console.log(key + ": " + studentDetails[key]);
}

console.log("\nStudent Details: (Using Object.keys())");
Object.keys(studentDetails).forEach(key => {
    console.log(key + ": " + studentDetails[key]);
});

console.log("\nStudent Details: (Using Object.entries())");
Object.entries(studentDetails).forEach(([key, value]) => {
    console.log(key + ": " + value);
});

console.log("\nStudent Details: (Using template literals)\n");
Object.entries(studentDetails).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});


// Object size
let sizeOfObject = Object.keys(studentDetails).length;
console.log("Size of studentDetails object: " + sizeOfObject);


/*
===========================================
🔹 OBJECT WITH METHOD
===========================================
*/

let studentDetails2 = {
    name: "Theerthananda",
    age: 21,
    course: "MSc Computer Science",
    university: "University of Mysore",

    AdmisionFees: function(){
        return 5000;
    }
};

console.log("Admission Fees: " + studentDetails2.AdmisionFees());


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ splice() → insert/remove/replace elements
✔ join() → convert array to string
✔ DOM manipulation → innerHTML / textContent
✔ Loops → build custom output
✔ Math.random() → generate random values
✔ Objects:
   - for...in → iterate keys
   - Object.keys() → array of keys
   - Object.entries() → key-value pairs
✔ Object size → Object.keys().length
✔ Objects can contain functions (methods)

===========================================
*/