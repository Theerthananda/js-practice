/*
===========================================
📘 JavaScript Array-Like Objects
===========================================

Covers:
✔ Array-like objects
✔ arguments object
✔ HTMLCollection
✔ Array.from()
✔ Array.isArray()
✔ instanceof Object
✔ Converting array-like → real array
===========================================
*/


/*
===========================================
🔹 ARRAY-LIKE OBJECT
===========================================

- Looks similar to an array
- Has:
   ✔ Numeric keys
   ✔ length property

- But:
   ❌ Not a real array
   ❌ No array methods like push(), pop()

*/

const arr_Like = {
    1: 'hello',
    2: 'jss',
    3: 'okay',
    length: 9
};


// Accessing values
console.log(arr_Like[0]); // undefined
console.log(arr_Like[1]); // hello

// Length property
console.log(arr_Like.length);

// Full object
console.log(arr_Like);


// Type checks
console.log(
    'Is arr_Like an Array : ' + Array.isArray(arr_Like)
);

console.log(
    "Is arr_Like an object ? :",
    arr_Like instanceof Object
);


/*
===========================================
🔹 ARGUMENTS OBJECT
===========================================

- 'arguments' is array-like
- Available inside normal functions
- NOT a real array
*/

function checkArgs(){

    console.log(arguments);

    /*
    Convert arguments → iterable using spread
    */

    [...arguments].forEach(element => {
        console.log(element);
    });
}

checkArgs(100,200);


/*
===========================================
🔹 HTML COLLECTION (ARRAY-LIKE)
===========================================

getElementsByTagName() returns:
✔ HTMLCollection
✔ Array-like object

But:
❌ Not a real array
*/

const ele = document.getElementsByTagName("li");

console.log(ele instanceof Object);

console.log(
    "HTML collection as Array-Like:",
    ele
);


/*
===========================================
🔹 CONVERT ARRAY-LIKE → ARRAY
===========================================

Array.from():
✔ Converts iterable/array-like → real array
*/

const htmlele = Array.from(
    document.getElementsByTagName("li")
);


// Now it becomes a real array
console.log(Array.isArray(htmlele));

console.log("Converted array:", htmlele);

console.log(htmlele instanceof Object);

console.log(Array.isArray(htmlele));


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ Array-like objects:
   - Numeric keys
   - length property
   - Not real arrays

✔ arguments:
   - Array-like
   - Exists inside normal functions

✔ HTMLCollection:
   - Returned by DOM methods
   - Array-like, not array

✔ Array.from():
   - Converts array-like → real array

✔ Array.isArray():
   - Checks true arrays only

✔ instanceof Object:
   - Arrays and array-like objects are objects

===========================================
*/