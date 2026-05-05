/*
===========================================
📘 JavaScript Basics Practice
===========================================

Covers:
✔ String concatenation
✔ Functions
✔ Variable manipulation
✔ Conditional logic
✔ Type coercion in JavaScript
===========================================
*/


/*
===========================================
🔹 STRING CONCATENATION
===========================================

- Combining strings using +
*/

let firstName = "Theerthananda ";
let lastname = "Gowda";
let fullName = firstName + lastname;

console.log(fullName);


/*
===========================================
🔹 FUNCTION WITH STRINGS
===========================================

- Combines name and greeting
*/

let name = "Theerthananda Gowda";
let greeting = "Welcome to JavaScript.";

function CombineStrings(){
    let CombinedString = "Hai " + name + " " + greeting + "!";
    console.log(CombinedString);
}

CombineStrings();


/*
===========================================
🔹 POINT SYSTEM (STATE CHANGE)
===========================================

- Add and remove points
*/

let Points = 0;

function Add3Points(){
    Points += 3;
    console.log(Points);
}

function Remove1Point(){
    if(Points > 0){
        Points -= 1;
        console.log(Points);
    }
}


/*
===========================================
🔹 LOOP (COMMENTED PRACTICE)
===========================================

- Alternates between add and remove
*/

/*
for(let i = 0; i < 5; i++){
    if(i % 2 == 1){
        Add3Points();
    } else {        
        Remove1Point();
    }
}
*/


/*
===========================================
🔹 TYPE COERCION (IMPORTANT ⚠️)
===========================================

JavaScript automatically converts types
depending on operator and operands
*/

console.log("5" + "5");   // "55"  → string + string
console.log(5 + 5);       // 10    → number + number
console.log("5" + 5);     // "55"  → number → string
console.log(5 + "5");     // "55"  → number → string
console.log("5" + 5 + 5); // "555" → left to right (string first)
console.log(5 + 5 + "5"); // "105" → numbers first, then string


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ + operator:
   - Number + Number → Addition
   - String involved → Concatenation

✔ Left-to-right evaluation matters

✔ Functions modify shared state (Points)

✔ Conditional checks prevent invalid operations

===========================================
*/