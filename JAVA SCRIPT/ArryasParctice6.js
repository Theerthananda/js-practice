/*
===========================================
📘 Array.from(), Array.fromAsync() & Array.of()
===========================================

Covers:
✔ Array.from()
✔ Array.fromAsync()
✔ HTMLCollection conversion
✔ Promise handling
✔ Async array creation
✔ Array.of()
✔ Array constructor differences
===========================================
*/


/*
===========================================
🔹 Array.from()
===========================================

- Converts array-like/iterable → real array
- Works synchronously
*/

const htmlele = Array.from(
    document.getElementsByTagName("li")
);

// console.log(htmlele);


/*
===========================================
🔹 Array.fromAsync()
===========================================

- Asynchronous version of Array.from()
- Returns a Promise

Can handle:
✔ Async iterables
✔ Promises inside array-like objects
*/

const htmlelePromise = Array.fromAsync(
    document.getElementsByTagName("li")
);

// console.log(htmlelePromise);


/*
===========================================
🔹 HANDLING PROMISE RESULT
===========================================

.then() receives resolved array
*/

// htmlelePromise.then((value) => console.log(value));


/*
===========================================
🔹 Array.fromAsync() WITH PROMISES
===========================================

- Each value resolves asynchronously
*/

const ret = Array.fromAsync({

    0: Promise.resolve('java'),
    1: Promise.resolve('js'),
    2: Promise.resolve('google'),

    length: 3

}).then((value) => console.log(value));


/*
===========================================
🔹 RETURN VALUE
===========================================

.then() itself returns a Promise
*/

console.log(ret);


/*
===========================================
🔹 ARRAY CONSTRUCTORS
===========================================
*/


/*
-------------------------------------------
Array Constructor
-------------------------------------------

Creates array using constructor
*/

const a = new Array(1,2,3,4,5);


/*
-------------------------------------------
Array Literal
-------------------------------------------

Most commonly used method
*/

const b = [6,7,8,9];


/*
-------------------------------------------
Array.of()
-------------------------------------------

Creates array from arguments exactly as given

Useful because:
✔ Avoids constructor confusion
✔ Handles single values safely
*/

const c = Array.of(
   2,
   true,
   {Name:"Theerthananda"},
   [1,2,3,4,5]
);

console.log(c);


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ Array.from():
   - Synchronous
   - Converts iterable → array

✔ Array.fromAsync():
   - Asynchronous
   - Returns Promise

✔ Promise.resolve():
   - Creates resolved Promise

✔ .then():
   - Handles resolved async result

✔ HTMLCollection:
   - Array-like object
   - Can be converted to array

✔ Array.of():
   - Creates array from given values
   - Safer than new Array()

✔ Array creation methods:
   - [] → array literal
   - new Array() → constructor
   - Array.of() → exact values
   - Array.from() → convert iterable

✔ Async methods are useful for:
   - Fetching async data
   - Handling Promises
   - Working with async iterables

===========================================
*/