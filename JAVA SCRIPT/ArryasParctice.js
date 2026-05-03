/*const salad=['🍒','🍐','🍏','🍎','🫐','🍓']

//console.log("salad 1: "+salad);

//const salad2=new Array('🍒','🍐','🍏','🍎','🫐','🍓');
//console.log("Salad 2: "+salad2);

console.log(salad===salad);

const arr=new Array(3);
console.log(arr);

for(let i=0;i<salad.length;i++){
   console.log(`Array value at index ${i} = ${salad[i]}`);
}


const len=salad.length;
console.log(len);

//const salad=['🍒','🍐','🍏','🍎','🫐','🍓']

salad.pop();
salad.push("Lst");
salad.shift();
salad.unshift("first");
console.log(salad);

const saladCopy=salad.slice();
console.log(saladCopy);
console.log(salad===saladCopy);


let a=Array.isArray(saladCopy);
console.log(a)
a=Array.isArray("a");
console.log(a)
a=Array.isArray([]);
console.log(a)
a=Array.isArray(1,2);
console.log(a)

const s=['🍒','🍐','🍏','🍎','🫐','🍓'];

const [a,b,c]=['🍒','🍐','🍏'];
console.log(a+" "+b+" "+c);

const [x,,z]=['🍒','🍐','🍏'];
console.log(x+" "+z);
*/

let a=[1,2,[3,4,[5]]]
console.log(a);

let [,,[,,[five]]]=[1,2,[3,4,[5]]]
//console.log(five);

console.log(a[2][2][0]);

