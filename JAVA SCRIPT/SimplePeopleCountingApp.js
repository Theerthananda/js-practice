/*
===========================================
👥 People Counter App (JavaScript)
===========================================

Features:
✔ Increment / decrement counter
✔ Save previous counts
✔ Reset counter after save
✔ DOM updates using textContent
✔ Notes on textContent vs innerText vs innerHTML

===========================================
*/


/*
===========================================
🔹 STATE VARIABLES
===========================================
*/

let count = 0; // current count


/*
===========================================
🔹 DOM ELEMENT REFERENCES
===========================================
*/

let peopleCountElement = document.getElementById("peopleCount");
let saveElement = document.getElementById("save-ele");

// Initial debug logs
console.log(peopleCountElement.textContent);
console.log(saveElement.textContent);


/*
===========================================
🔹 INCREMENT FUNCTION
===========================================

- Increases count by 1
- Updates UI
*/

function incrementCount() {
    count++;
    peopleCountElement.textContent = count;
}


/*
===========================================
🔹 DECREMENT FUNCTION
===========================================

- Decreases count only if > 0
- Prevents negative values
*/

function decrementCount() {
    if (count > 0) {
        count--;
        peopleCountElement.textContent = count;
    }
}


/*
===========================================
🔹 SAVE FUNCTION
===========================================

- Saves current count history
- Appends to previous values
- Resets count to 0
*/

function save() {
    let saved = count + " - ";
    saveElement.textContent += saved;

    // Reset counter
    count = 0;
    peopleCountElement.textContent = count;

    /*
    NOTE:
    Using textContent instead of innerText because:
    ✔ Faster
    ✔ Does NOT trigger reflow (better performance)
    */
}


/*
===========================================
🔹 DOM TEXT PROPERTIES (IMPORTANT)
===========================================

textContent:
✔ Gets/sets ALL text inside element
✔ Ignores HTML tags
✔ Faster (no layout calculation)

innerText:
✔ Gets ONLY visible text
✔ Respects CSS (hidden elements ignored)
✔ Slower (causes reflow)

innerHTML:
✔ Gets/sets HTML content (tags included)
✔ Can insert HTML dynamically
⚠ Risky if used with user input (XSS)

outerHTML:
✔ Includes the element itself + its HTML
✔ Replaces entire element if set

outerText:
✔ Not standard
✔ Not reliable across browsers

===========================================
🧠 FINAL SUMMARY
===========================================

✔ textContent → fastest & safest for text updates
✔ innerText → visible text only (slower)
✔ innerHTML → use only when HTML needed
✔ Avoid unnecessary DOM reflows for performance

===========================================
*/