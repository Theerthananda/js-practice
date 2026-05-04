/*
===========================================
📘 JavaScript Arrays – Complete Notes
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
✔ Length behavior & limits
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
🔹 ARRAY BASICS
===========================================
*/

// Reference comparison
console.log("salad === salad:", salad === salad);

// Empty array with fixed size
const arr = new Array(3);
console.log("Empty array:", arr);

// Iteration
for (let i = 0; i < salad.length; i++) {
   console.log(`Index ${i} = ${salad[i]}`);
}

// Length
console.log("Length:", salad.length);


/*
===========================================
🔹 ARRAY METHODS
===========================================
*/

salad.pop();          // remove last
salad.push("Last");   // add last
salad.shift();        // remove first
salad.unshift("First"); // add first

console.log("After operations:", salad);


/*
===========================================
🔹 COPYING ARRAYS
===========================================
*/

const saladCopy = salad.slice();
console.log("Copy:", saladCopy);
console.log("Reference equal:", salad === saladCopy);


/*
===========================================
🔹 TYPE CHECKING
===========================================
*/

console.log(Array.isArray(saladCopy)); // true
console.log(Array.isArray("a"));       // false
console.log(Array.isArray([]));        // true
console.log(Array.isArray(1,2));       // false


/*
===========================================
🔹 DESTRUCTURING
===========================================
*/

const [a, b, c] = ['🍒','🍐','🍏'];
console.log("Basic:", a, b, c);

const [x, , z] = ['🍒','🍐','🍏'];
console.log("Skip:", x, z);


/*
===========================================
🔹 NESTED ARRAYS
===========================================
*/

let nested = [1,2,[3,4,[5]]];

let [,,[,,[five]]] = nested;
console.log("Deep value:", five);

console.log("Direct access:", nested[2][2][0]);


/*
===========================================
🔹 REST & SPREAD
===========================================
*/

let numbers = [1,2,3,4,5];

// Rest
let [p, q, r, ...rest] = numbers;
console.log("Values:", p, q, r);
console.log("Rest:", rest);

// Spread (copy)
let copy = [...numbers];
console.log("Copy:", copy);
console.log("Equal:", copy === numbers);


/*
===========================================
🔹 SWAPPING VARIABLES
===========================================
*/

let first = "😂";
let second = "😪";

[first, second] = [second, first];
console.log("Swapped:", first, second);


/*
===========================================
🔹 MERGING ARRAYS
===========================================
*/

const num = [1,2,3,4,5];
const alpha = ['a','b','c'];

const merged = [...alpha, ...num];
console.log("Merged:", merged);


/*
===========================================
🔹 ARRAY LENGTH BEHAVIOR
===========================================
*/

let arr2 = [1,2,3];

// Reduce length
arr2.length = 1;
console.log("Truncated:", arr2);

// Max length
arr2.length = 2**32 - 1;
console.log("Max length:", arr2.length);

// Max valid index
arr2[2**32 - 2] = 4;
console.log("Last index value:", arr2[2**32 - 2]);

// Clear array
arr2.length = 0;
console.log("Cleared:", arr2);

// Expand array (creates empty slots)
arr2 = [1,2,3];
arr2.length = 9;
console.log("Expanded:", arr2);


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ Arrays are reference types (=== checks reference)

✔ length property:
   - Smaller → truncates array
   - Larger → creates empty slots
   - Max length = 2^32 - 1

✔ Valid index range:
   - 0 to (2^32 - 2)
   - Beyond → becomes object property

✔ slice() and spread (...) → shallow copy

✔ Destructuring:
   - Extract values easily
   - Supports skipping & deep nesting

✔ Rest (...) → collects remaining values

✔ Spread (...) → expands & merges arrays

✔ Swapping:
   - [a, b] = [b, a]

✔ Sparse arrays:
   - Empty slots ≠ undefined

✔ Arrays are objects internally

===========================================
*/