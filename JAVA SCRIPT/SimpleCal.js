/*
===========================================
🧮 Simple Calculator (JavaScript)
===========================================

Features:
✔ Addition
✔ Subtraction
✔ Multiplication
✔ Division
✔ Input handling from DOM
✔ Basic error handling (division by zero)

===========================================
*/


/*
===========================================
🔹 ADDITION
===========================================

- Reads values from input fields
- Converts to numbers using parseFloat
- Displays result in UI
*/

function add(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1 + num2;

    document.getElementById("result").innerHTML = "Result: " + result;  
}


/*
===========================================
🔹 SUBTRACTION
===========================================
*/

function subtract(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1 - num2;

    document.getElementById("result").innerHTML = "Result: " + result;  
}


/*
===========================================
🔹 MULTIPLICATION
===========================================
*/

function multiply(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    let result = num1 * num2;

    document.getElementById("result").innerHTML = "Result: " + result;  
}


/*
===========================================
🔹 DIVISION
===========================================

- Includes error handling for division by zero
*/

function divide(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Error handling
    if(num2 === 0){
        document.getElementById("result").innerHTML =
            "<font color='red'>Error: Division by zero is not allowed.</font>";
        return;
    }

    let result = num1 / num2;

    document.getElementById("result").innerHTML = "Result: " + result;  
}


/*
===========================================
🧠 FINAL SUMMARY
===========================================

✔ Uses DOM to read input values
✔ parseFloat() converts string → number
✔ Performs basic arithmetic operations
✔ Updates result dynamically in UI
✔ Handles division by zero safely

===========================================
*/