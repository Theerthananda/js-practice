/*
===========================================
📘 JavaScript Array Methods Practice
===========================================

This file demonstrates:
✔ concat() → merging arrays
✔ join() → array to string
✔ fill() → replacing values
✔ includes() → search (boolean)
✔ indexOf() / lastIndexOf() → position finding
✔ reverse() → reversing array
✔ sort() → default & custom sorting
===========================================
*/


/*
===========================================
🔹 CONCAT (MERGING ARRAYS)
===========================================
*/

const first=[1,2,3,4];
const second=[5,6,7,8];
const third=[9,10,11,12];

// Merge two arrays
const mergedArray1=first.concat(second);
console.log(mergedArray1+"\n");

// Original arrays remain unchanged
console.log(first+" | "+second+"\n");

// Merge three arrays
const mergedArray2=first.concat(second,third);
console.log(mergedArray2+"\n");

console.log(first+" | "+second+" | "+third+"\n");


/*
===========================================
🔹 JOIN (ARRAY → STRING)
===========================================

- Default separator = comma
*/

const emotions=['😀','😁','😂','🤣','😃','😄','😅','😆'];

let joined=emotions.join();
console.log(joined);

// Custom separator
joined=emotions.join("|");
console.log(joined);

joined=emotions.join("<=>");
console.log(joined+"\n");

// Empty array join
console.log([].join());


/*
===========================================
🔹 FILL (MODIFIES ARRAY)
===========================================

- Replaces values in array
- Syntax: fill(value, start?, end?)
*/

let colors=["red","green","blue"];

// Fill entire array
let filled=colors.fill("yellow");
console.log(filled);

// Fill specific range
colors=["red","green","blue"];
filled=colors.fill("pink",1,3);
console.log(filled+"\n");


/*
===========================================
🔹 INCLUDES (SEARCH BOOLEAN)
===========================================

- Case-sensitive
*/

const names=['theertha','halesh','theertha','shashank','theertha','suraj'];

console.log(names.includes('theertha'));   // true
console.log(names.includes('Theertha'));   // false
console.log(names.includes('jss')+"\n");   // false


/*
===========================================
🔹 INDEX SEARCH
===========================================

indexOf() → first occurrence
lastIndexOf() → last occurrence
*/

console.log(names.indexOf('theertha'));
console.log(names.indexOf('ajay')); // -1 (not found)
console.log(names.lastIndexOf('theertha'));

// Find second occurrence
console.log(names.indexOf('theertha',names.indexOf('theertha')+1)+"\n");


/*
===========================================
🔹 REVERSE (IN-PLACE)
===========================================
*/

console.log(names.reverse());
console.log(names+"\n");


/*
===========================================
🔹 SORT (DEFAULT)
===========================================

⚠ Default sort converts elements to strings
*/

console.log(names.sort());


/*
===========================================
🔹 CUSTOM SORT (STRINGS)
===========================================

- Descending order
*/

names.sort(function(a,b){
    return a===b ? 0 : a>b ? -1 :1;
});

console.log(names+"\n");


/*
===========================================
🔹 SORT WITH NUMBERS
===========================================

⚠ Default sort is NOT numeric
*/

const age=[12,7558,23,10000,89,34,87];

console.log(age.sort()); // incorrect numeric order


/*
===========================================
🔹 CUSTOM NUMERIC SORT
===========================================
*/

// Descending
age.sort(function(a,b){
    return a===b ? 0 : a>b ? -1 :1;
});
console.log(age);

// Ascending
age.sort(function(a,b){
    return a===b ? 0 : a>b ? 1 :-1;
});
console.log(age);


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ concat() → merges arrays (non-mutating)
✔ join() → converts array to string
✔ fill() → modifies array values
✔ includes() → checks existence (boolean)
✔ indexOf() → first occurrence
✔ lastIndexOf() → last occurrence
✔ reverse() → modifies array
✔ sort():
   - Default → string-based ⚠️
   - Custom → required for correct numeric sorting

===========================================
*/

