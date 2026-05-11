/*
===========================================
📘 Array.from() vs Array.fromAsync()
===========================================

Covers:
✔ Array.from()
✔ Array.fromAsync()
✔ HTMLCollection conversion
✔ Promise handling
✔ Async array creation
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
- Can handle:
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

✔ Async methods are useful when:
   - Fetching async data
   - Working with Promises
   - Handling async iterables

===========================================
*/