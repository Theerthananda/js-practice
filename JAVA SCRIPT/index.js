/*its my first js file and today means friday march 27,2026 i started core javascript and i am very excited to learn it and i will try my best to learn it and i will also try to make some projects in javascript and i will also try to learn some frameworks in javascript like react and angular and vue and node js and express js and mongodb and mysql and postgresql and redis and docker and kubernetes and aws and azure and google cloud platform and many more technologies that are related to javascript and web development.

//i will also try to learn some programming languages like python and java and c++ and c# and ruby and php and go and rust and many more programming languages that are related to web development and software development.

//i will also try to learn some tools like git and github and vscode and intellij and pycharm and webstorm and many more tools that are related to web development and software development.    

console.log("Hello World!");

let name = "John"; //let is used to declare a variable that can be reassigned later. and the main difference between let and var is that let is block scoped and var is function scoped. and the main difference between let and const is that let can be reassigned later and const cannot be reassigned later.
// also recommend to use const instead of let if you don't want to reassign the variable later. and also recommend to use let instead of var because var is function scoped and can cause some issues in the code.

//the main purpose of using let and const is to declare variables in javascript and to store values in those variables and to use those variables later in the code. and also to make the code more readable and maintainable. and also to avoid some issues that can be caused by using var. 
//how let and  const deesides what type of variable it is and how it can be used in the code. and also to make the code more efficient and optimized. and also to make the code more secure and less prone to errors. and also to make the code more modular and reusable. and also to make the code more scalable and maintainable. and also to make the code more readable and understandable. and also to make the code more consistent and standardized. and also to make the code more professional and industry standard. and also to make the code more efficient and optimized. and also to make the code more secure and less prone to errors. and also to make the code more modular and reusable. and also to make the code more scalable and maintainable. and also to make the code more readable and understandable. and also to make the code more consistent and standardized. and also to make the code more professional and industry standard.

var age = 30; //var is used to declare a variable that can be reassigned later. and the main difference between var and let is that var is function scoped and let is block scoped. and the main difference between var and const is that var can be reassigned later and const cannot be reassigned later.

const pi = 3.14; //const is used to declare a variable that cannot be reassigned later. and the main difference between const and let is that const cannot be reassigned later and let can be reassigned later. and the main difference between const and var is that const cannot be reassigned later and var can be reassigned later.

console.log(name); //John
console.log(age); //30
console.log(pi); //3.14 
console.log("This is a test"); //this is a test

*/


//let Myage = 25;
//let HumandogRatio = 7;

//let myDogAge = Myage * HumandogRatio;

//console.log("My dog's age is: " + myDogAge); //175

/*let count=50;
console.log("Count is: " + count); //50
count = count+100;
console.log("Count is: " + count); //150
count=count-25;
console.log("Count is: " + count);
count=count+70;
console.log("Count is: " + count); //220*/



/*function incrementCount() {
    console.log("Button is clicked!"); //Button is clicked!
    console.log("End of function!"); //End of function!
}*/

/*function CountDown(){ //in this program we are using function concept function is mainly used to perform a specific task and to make the code more modular and reusable and also to make the code more efficient and optimized. and also to make the code more secure and less prone to errors. and also to make the code more readable and understandable. and also to make the code more consistent and standardized. and also to make the code more professional and industry standard.
    console.log(("1")); 
    console.log(("2")); 
    console.log(("3")); 
}

CountDown();
console.log("Count down is finished!"); //Count down is finished!
CountDown();
console.log("Count down is finished!"); //Count down is finished!   */

 let saveElement = document.getElementById("save-ele");
 let peopleCountElement = document.getElementById("peopleCount");
 let count = 0; 


function incrementCount(){
    //count is a local variable that is declared inside the function and it is not accessible outside the function and it is initialized to 0 every time the function is called.
    count = count + 1;

    console.log("Count is: " + count); //Count is: 1
    peopleCountElement.innerText = count; //Count is: 1
}

function decrementCount(){
    if(count > 0){
    count--;
    peopleCountElement.innerText = count;
    console.log("Count is: " + count);
    
    }
}


function save(){
    let countStr = count + " - ";
    saveElement.innerText += countStr; //Previous Count: 0 - 1 - 2 - 3 - 4 - 5 - 6 - 7 - 8 - 9 - 10 -
}

save(); //Count is saved!


/*

innerText is a property of an HTML element that represents the text content of the element. It can be used to get or set the text content of an element. When you set the innerText property, it will replace the existing text content of the element with the new text that you provide. When you get the innerText property, it will return the current text content of the element.
 

DOM in javaScript is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
types of DOM manipulation:
1. Changing the content of an element   
2. Changing the style of an element
3. Adding or removing elements
function incrementCount(){
    count++;
    console.log("Count is: " + count);
    document.getElementById("peopleCount").innerText = count; //Count is: 1
      Types:
      1. Document.getElementById() - Selects an element by its ID.
      2. Document.getElementsByClassName() - Selects elements by their class name.
      3. Document.getElementsByTagName() - Selects elements by their tag name.
      4. Document.querySelector() - Selects the first element that matches a CSS selector.
      5. Document.querySelectorAll() - Selects all elements that match a CSS selector.    */

/*let userName = "Alice";    //in this program we are using string concatenation to combine two strings and to create a new string that is more meaningful and also to make the code more readable and understandable. and also to make the code more consistent and standardized. and also to make the code more professional and industry standard. and shows diffrece between numbers and strings in javascript. and also to show how javascript handles the addition operator when used with strings and numbers. and also to show how javascript converts numbers to strings when used with the addition operator and strings. and also to show how javascript concatenates strings when used with the addition operator and strings. and also to show how javascript adds numbers when used with the addition operator and numbers. and also to show how javascript handles the addition operator when used with different data types. and also to show how javascript handles type coercion when used with the addition operator and different data types. and also to show how javascript handles type conversion when used with the addition operator and different data types. and also to show how javascript handles type inference when used with the addition operator and different data types. and also to show how javascript handles type checking when used with the addition operator and different data types. and also to show how javascript handles type safety when used with the addition operator and different data types. and also to show how javascript handles type errors when used with the addition operator and different data types.    
      let Message = "You have 3 notifications";
      let MessageToUser = Message + " " + userName;
      console.log(MessageToUser); //You have 3 notifications Alice
      

      let name = "TN";
        let greeting = "Hello, " + name + "!";    
        console.log(greeting); //Hello, TN!

        console.log(4+5); //The result of 4 + 5 is: 9
        console.log("5"+6);
        console.log("10"+"10");
        console.log(100+"100");

     */ 


/*wellcomeElement = document.getElementById("wellcome");
        let userName = "Theerthananda";
        let greeting = "Welcome, " + userName + "!";
        console.log(greeting); //Welcome, Theerthananda!

       wellcomeElement.innerText = greeting; //Welcome, Theerthananda!

       wellcomeElement.innerText=wellcomeElement.innerText + " 💀"; 
    wellcomeElement.innerText += " 💀"; //Welcome, Theerthananda! 💀 . both are same both addes the cuurent line with new string */