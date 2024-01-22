// In JavaScript, var let and const are variable declaration

let a = 100;       
const b = 400;
var c = 99;

{
 let a = 200;      // ==> This a does not affect the outside a, because it has block level scope;
 const b = 299;    // ==> This b does not affect the outside b, because it has block level scope;
 var c = 888;      // ==> this c affect outside c, because it has not block level scope;
//  console.log(`Internal Value of a ${a}, b ${b} and c ${c}`);
}

// console.log(`Extranal Value of a ${a}, b ${b} and c ${c}`);

// =============scope in nested function=============

function one(){
    const username = "Sartaj"

    function two(){
        const city = "RajDhanwar"
        console.log(`User Name ${username} and city ${city}`);
    }
    // console.log(city);     // ==> It gives error 

    // two();
}
// one();

// ===========Hoisting=============
// Hoisting is concept of finding the error if the expression is execute before the declaration.
console.log(addOne(4));     // ==> It also execute successfully and gives 5

function addOne(num){
    return num + 1;
}
console.log(addOne(7));     // ==> It run sucessfully and gives 8


console.log(addTwo(56));      // ==> It is display before its declaration so it shows error.
let addTwo = function (num){
    return num + 2;
}
// console.log(addTwo(79));       // ==> It run successfully and gives 81