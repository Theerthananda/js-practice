/*let firstName="Theerthananda ";
let lastname="Gowda";
let fullName=firstName+lastname;

console.log(fullName);


let name= "Theerthananda Gowda";
let greeting="Welcome to JavaScript.";

function CombineStrings(){
    let CombinedString="Hai "+name+" "+greeting+"!";
    console.log(CombinedString);
}

CombineStrings();*/


let Points=0;

function Add3Points(){
    Points+=3;
    console.log(Points);
}

function Remove1Point(){
    if(Points>0){
        Points-=1;
        console.log(Points);
    }
}


/*for(let i=0;i<5;i++){
    if(i%2==1){
        Add3Points();
    }
    else{        
        Remove1Point();
    }

}*/



console.log("5"+"5");
console.log(5+5);
console.log("5"+5);
console.log(5+"5");
console.log("5"+5+5);
console.log(5+5+"5");