/*
===========================================
🛒 Nike Product Purchase Script
===========================================

Features:
✔ Handles "Buy Now" button click
✔ Displays error/status message to user
✔ Uses DOM manipulation (textContent)

===========================================
*/


/*
===========================================
🔹 DOM ELEMENT REFERENCE
===========================================

- Gets paragraph element where messages will be shown
*/

let errpara = document.getElementById("err");


/*
===========================================
🔹 PURCHASE FUNCTION
===========================================

- Triggered when user clicks "Buy Now"
- Displays error message (simulating failure case)
*/

function purchase() {
    errpara.textContent = "Something went wrong! Please try again later.";
}


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ getElementById() → selects DOM element
✔ textContent → updates text efficiently
✔ purchase() → handles button click event

✔ Can be extended to:
   - Success message
   - Stock validation
   - Payment integration

===========================================
*/