/*
===========================================
📘 JavaScript Advanced Array Methods
===========================================

Covers:
✔ splice() → add/remove/replace
✔ at() → access with negative index
✔ copyWithin() → copy part of array
✔ flat() → flatten nested arrays
✔ Object.groupBy() → grouping objects
===========================================
*/


/*
===========================================
🔹 SPLICE (MODIFY ARRAY)
===========================================

- Changes original array
- Syntax: splice(start, deleteCount, ...items)
- Returns: removed elements
*/

const names=['ajay','halesh','shshank','modi','tom'];

// Remove 2 elements from index 0 and insert 'krishna'
console.log(names.splice(0,2,'krishna'));
console.log(names);

// Insert at index 0 (no deletion)
console.log(names.splice(0,0,'ajay'));
console.log(names);

// Insert at end
console.log(names.splice(names.length,0,'ajay'));
console.log(names);

// Replace 1 element at index 3
console.log(names.splice(3,1,'trump'));
console.log(names);

// Replace 1 element with multiple elements
console.log(names.splice(3,1,'modi','shah','yogi'));
console.log(names+"\n");


/*
===========================================
🔹 at() (SAFE INDEX ACCESS)
===========================================

- Supports negative indexing
*/

const junkFood=['fizza','Burger','popCorn'];

console.log(junkFood.at(0));   // first
console.log(junkFood.at(-1));  // last
console.log(junkFood.at(-3));  // first
console.log(junkFood.at(-4));  // undefined
console.log(junkFood.at(1)+" | "+junkFood.at(-2)+"\n");


/*
===========================================
🔹 copyWithin()
===========================================

- Copies part of array to another location
- Modifies original array
- Syntax: copyWithin(target, start, end?)
*/

const arr1=[1,2,3,4,5,6,7,8,9];

// Copy first 5 elements to index 6
console.log(arr1.copyWithin(6,0,5));

// Copy from index 6 to start
console.log(arr1.copyWithin(0,6)+"\n");


/*
===========================================
🔹 flat() (FLATTEN ARRAY)
===========================================

- Flattens nested arrays
- Default depth = 1
*/

const arr2=[1,2,3,4,[5,6,7,[8,9,10]]];
console.log(arr2.flat());

const arr3=[1,2,3,4,[5,6,7,[8,9,10],[1,2,3,4,[7,[8,[5,8]]]]]];

console.log(arr3.flat());          // depth = 1
console.log(arr3.flat(2));         // depth = 2
console.log(arr3.flat(Infinity));  // full flatten


/*
===========================================
🔹 Object.groupBy()
===========================================

- Groups objects based on condition
- Returns an object
*/

const employees=[
    {name: 'Theerthananda', salary:30000, dept:'eng'},
    {name: 'halesh',salary: 45000,dept: 'eng'},
    {name: 'sagar',salary: 30000,dept: 'acount'},
    {name: 'suraj',salary: 45000,dept: 'acount'},
    {name: 'rahul',salary: 25000,dept: 'AI &ML'},
    {name: 'ajay',salary: 15000,dept: 'AI &ML'}
];

// Group by department
const grpByDept=Object.groupBy(employees,({dept})=>dept);
console.log(grpByDept,"\n");

// Group by salary condition
const grpBySalGreater=Object.groupBy(employees,({salary})=>{
    return salary>=30000 ? "More than 30K" :"Less than 30k"
});
console.log(grpBySalGreater);


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ splice() → add/remove/replace (mutates array)
✔ at() → supports negative indexing
✔ copyWithin() → copies elements inside same array
✔ flat() → flattens nested arrays
✔ Object.groupBy() → groups objects based on key/condition

===========================================
*/