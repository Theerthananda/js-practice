const mixedArray=[1,true,"JAVAsCript"]

const salad = ['🍎','🍏','🍐','🍒','🍓','🫐','🫒','🍆']  

console.log(salad);

const salad2=new Array('🍎','🍏','🍐','🍒','🍓','🫐','🫒','🍆');

console.log(salad2);

console.log(salad===salad2);

const a=new Array(2);
console.log(a);

console.log(salad[1]);
console.log(salad[2]);
console.log(salad[3]);
console.log(salad[4]);

 for(let i=0;i<salad.length;i++) {
    console.log(`Element at index ${i} ${salad[i]}`);
 }

/*const prompt = require("prompt-sync")();
let name = prompt("Enter your name: ");
console.log("Hello " + name);*/


//push();

const ret=salad.push('🍔');
console.log(ret);
console.log(salad);

//unshift();

const ret1=salad.unshift('💐');
console.log(ret1);
console.log(salad);

//pop();
const popRet=salad.pop();
console.log(popRet);
console.log(salad);

//shift()
const shiftRet=salad.shift();
console.log(shiftRet);
console.log(salad);

//slice()-copy

const saladCopy=salad.slice();
console.log(saladCopy);


//isArray();
const check1=Array.isArray(['🍎','🍏','🍐','🍒','🍓','🫐','🫒','🍆'])
console.log(check1);
const check2=Array.isArray('🍎');
console.log(check2);
const check3=Array.isArray({"Name":"Theerthananda"});
console.log(check3);
const check4=Array.isArray([]);
console.log(check4);

