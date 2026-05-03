
/*
===========================================
📘 JavaScript Arrays – Complete Practice
===========================================

Covers:
✔ Array creation
✔ Looping
✔ Array methods
✔ Copying arrays
✔ Type checking
✔ Destructuring (basic + nested)
✔ Rest & Spread operators
✔ Swapping variables
✔ Merging arrays
===========================================
*/


/*
===========================================
🔹 ARRAY CREATION
===========================================
*/

const salad = ['🍒','🍐','🍏','🍎','🫐','🍓'];

console.log("Salad:", salad);

// Using constructor
const salad2 = new Array('🍒','🍐','🍏','🍎','🫐','🍓');
console.log("Salad 2:", salad2);


/*
===========================================
🔹 ARRAY COMPARISON
===========================================
*/

console.log("salad === salad:", salad === salad); // true (same reference)


/*
===========================================
🔹 EMPTY ARRAY WITH SIZE
===========================================
*/

const arr = new Array(3);
console.log("Empty array of size 3:", arr);


/*
===========================================
🔹 ITERATING ARRAY
===========================================
*/

for (let i = 0; i < salad.length; i++) {
   console.log(`Index ${i} = ${salad[i]}`);
}


/*
===========================================
🔹 ARRAY LENGTH
===========================================
*/

const len = salad.length;
console.log("Length:", len);


/*
===========================================
🔹 ARRAY METHODS
===========================================
*/

salad.pop();              // remove last
salad.push("Last");       // add last
salad.shift();            // remove first
salad.unshift("First");   // add first

console.log("After operations:", salad);


/*
===========================================
🔹 COPYING ARRAY (SHALLOW COPY)
===========================================
*/

const saladCopy = salad.slice();

console.log("Copy:", saladCopy);
console.log("salad === saladCopy:", salad === saladCopy); // false


/*
===========================================
🔹 ARRAY TYPE CHECK
===========================================
*/

let check;

check = Array.isArray(saladCopy);
console.log("Is array:", check);

check = Array.isArray("a");
console.log("Is array:", check);

check = Array.isArray([]);
console.log("Is array:", check);

check = Array.isArray(1,2);
console.log("Is array:", check); // false


/*
===========================================
🔹 DESTRUCTURING (BASIC)
===========================================
*/

const s = ['🍒','🍐','🍏','🍎','🫐','🍓'];

const [a, b, c] = ['🍒','🍐','🍏'];
console.log("Destructured:", a, b, c);

// Skipping values
const [x, , z] = ['🍒','🍐','🍏'];
console.log("Skip example:", x, z);


/*
===========================================
🔹 NESTED ARRAY + DESTRUCTURING
===========================================
*/

let nested = [1,2,[3,4,[5]]];
console.log("Nested array:", nested);

// Deep destructuring
let [,,[,,[five]]] = nested;
console.log("Extracted value (five):", five);

// Direct access
console.log("Direct access:", nested[2][2][0]);


/*
===========================================
🔹 REST OPERATOR (...)
===========================================
*/

let numbers = [1,2,3,4,5];

let [p, q, r, ...rest] = numbers;

console.log("Values:", p, q, r);
console.log("Rest:", rest);


/*
===========================================
🔹 SPREAD OPERATOR (COPY)
===========================================
*/

let copyOfNumbers = [...numbers];

console.log("Copy:", copyOfNumbers);
console.log("Equality:", copyOfNumbers === numbers); // false


/*
===========================================
🔹 SWAPPING VARIABLES
===========================================
*/

let first = "😂";
let second = "😪";

console.log("Before Swapping:", first, second);

[first, second] = [second, first];

console.log("After Swapping:", first, second);


/*
===========================================
🔹 MERGING ARRAYS
===========================================
*/

const num = [1,2,3,4,5];
const alpha = ['a','b','c'];

const alphaNum = [...alpha, ...num];

console.log("Merged Array:", alphaNum);



