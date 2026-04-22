let a = [5, 10, 15, 20];

let AddToHTml = document.getElementById("Array");

AddToHTml.textContent=a.join(" - ");

a.splice(2, 0, 12);

AddToHTml.textContent=a.join(" - ");

a.splice(4, 1);

AddToHTml.textContent=a.join(" - ");

a.unshift(0);

AddToHTml.textContent=a.join(" - ");
a.push(25);

AddToHTml.textContent=a.join(" - ");    

a.push(30);

AddToHTml.textContent=a.join(" - ");

a.pop();

AddToHTml.textContent=a.join(" - ");

let stringArray = ["Hello", "World", "JavaScript"];

AddToHTml.textContent=stringArray.join(" ");

let res=""
for (let i = 0; i < stringArray.length; i++) {
    res+=stringArray[i]+" ";
}
AddToHTml.textContent=res

let arr=["hello",66,"world",true];
AddToHTml.textContent=arr.join(" , ");




arr.pop();
AddToHTml.textContent=arr.join(" , ");

arr.unshift("welcome");
AddToHTml.textContent=arr.join(" , ");

arr.shift();
AddToHTml.textContent=arr.join(" , ");



arr.reverse();
AddToHTml.textContent=arr.join(" , ");

arr.sort();
AddToHTml.textContent=arr.join(" , ");

let numArray=[5,3,8,1,4];
numArray.sort(function(a, b){return b-a});
AddToHTml.textContent=numArray.join(" , ");

numArray.sort();
AddToHTml.textContent=numArray.join(" , ");

numArray.sort(function(a, b){return b-a});
AddToHTml.textContent=numArray.join(" , ");