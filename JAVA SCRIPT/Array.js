//4:10:49

/*let arr=[1,2,3,4,5,6,8,90,34,12,56,78,98,67,45,23,45,67,89,90,12,34,56,78,90];
arr.pop();
console.log(arr.join(", "));

arr.unshift(100);
console.log(arr.join(", ")); 

arr.shift();
console.log(arr.join(", "));
   

arr.splice(2,0,200);
console.log(arr.join(", "));

arr.splice(2,1);
console.log(arr.join(", "));

arr.splice(2,3);
console.log(arr.join(", "));

arr.splice(2,3,200,300,400);
console.log(arr.join(", "));


arr.splice(2,3,200,300,400,500,600);
console.log(arr.join(", "));

arr.splice(0,0,100,200,300,400,500,600);
console.log(arr.join(", "));

arr.splice(0,0,1000);
console.log(arr.join(", "));



let Greetings=["Hello","Hi  Theerthananda","Welcome","Good Morning","Good Afternoon","Good Evening"];
document.getElementById("Array").innerHTML = Greetings.join("  ");


for(let i=0;i<Greetings.length;i++){
    document.getElementById("Array").textContent += Greetings[i]+"  ";
}


let res = "";


for (let i = 0; i < Greetings.length; i++) {
    res += Greetings[i] + " ";
}

console.log(res+"");

document.getElementById("Array").textContent = res;




function rollDice(){
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;
    let dice3 = Math.floor(Math.random() * 6) + 1;
    let dice4 = Math.floor(Math.random() * 6) + 1;
    let dice5 = Math.floor(Math.random() * 6) + 1;
    
    return [dice1, dice2, dice3, dice4, dice5];

}

let diceRolls = rollDice();
console.log("Dice Rolls: " + diceRolls.join("|"));



let studentDetails = {
    name: "Theerthananda",
    age: 21,
    course: "MSc Computer Science",
    university: "University of Mysore"
};

console.log("Student Details: (Using for...in loop)");
for (let key in studentDetails) {
    console.log(key + ": " + studentDetails[key]);
}

console.log("\nStudent Details: (Using Object.keys())");
Object.keys(studentDetails).forEach(key => {
    console.log(key + ": " + studentDetails[key]);
});

console.log("\nStudent Details: (Using Object.entries())");
Object.entries(studentDetails).forEach(([key, value]) => {
    console.log(key + ": " + value);
});
console.log("\nStudent Details: (Using Object.entries() with template literals)\n");
Object.entries(studentDetails).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

console.log("\n"); // undefined, because objects don't have a length property

sizeOfObject = Object.keys(studentDetails).length;
console.log("Size of studentDetails object: " + sizeOfObject);
*/


let studentDetails = {
    name: "Theerthananda",
    age: 21,
    course: "MSc Computer Science",
    university: "University of Mysore",
    AdmisionFees:function(){
        return 5000;
    }
};



console.log("Admission Fees: " + studentDetails.AdmisionFees());