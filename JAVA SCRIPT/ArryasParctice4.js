/*
===========================================
📘 Modern JavaScript Array Methods (Immutable)
===========================================

Covers:
✔ toReversed()
✔ toSorted()
✔ toSpliced()
✔ with()
✔ Difference between mutable vs immutable methods
✔ Negative index behavior
===========================================
*/


/*
===========================================
🔹 ORIGINAL ARRAY+
===========================================
*/

const nums = [1,2,3,4];


/*
===========================================
🔹 toReversed()
===========================================

- Returns a NEW reversed array
- Does NOT modify original array
*/

console.log(nums.toReversed()); // [4,3,2,1]
console.log(nums);              // [1,2,3,4] (unchanged)


/*
===========================================
🔹 toSorted()
===========================================

- Returns a NEW sorted array
- Does NOT modify original array
*/

const sortA = nums.toSorted(function(a,b){
    return b - a; // descending order
});

console.log(sortA); // [4,3,2,1]
console.log(nums);  // original unchanged


/*
===========================================
🔹 toSpliced()
===========================================

- Immutable version of splice()
- Returns NEW array
- Does NOT modify original array
*/

// Insert at beginning
console.log(nums.toSpliced(0,0,100,200,300,400));

// Replace first 2 elements
console.log(nums.toSpliced(0,2,100,200,300,'theertha'));

console.log(nums+"\n\n"); // original unchanged


/*
===========================================
🔹 with()
===========================================

- Returns NEW array with updated value at index
- Does NOT modify original array
*/

console.log(nums.with(3,100));  // replace index 3
console.log(nums.with(-4,100)); // negative index (from end)
console.log(nums);              // original unchanged


/*
===========================================
🔹 NEGATIVE INDEX NOTE
===========================================

- Negative index counts from end:
  - -1 → last element
  - -2 → second last
  - -4 → first element (for array of size 4)
*/


/*
===========================================
🔹 INVALID INDEXING
===========================================

nums[-2] = 10;

- This does NOT update array element
- Instead creates an object property
*/

console.log(nums); // unchanged array


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ toReversed() → returns reversed copy
✔ toSorted() → returns sorted copy
✔ toSpliced() → returns modified copy
✔ with() → returns updated copy

✔ All are IMMUTABLE methods (no original change)

✔ Negative index works in with()
✔ Direct negative index assignment creates object property

✔ Modern JS prefers immutable operations (safer & predictable)

===========================================
*/