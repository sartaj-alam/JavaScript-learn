// ==> It is good but generally avoid because if we need to print 10 times then it has huge lines of code
// console.log("S");
// console.log("a");
// console.log("r");
// console.log("t");
// console.log("a");
// console.log("j");

function myName (){
    console.log("S");
    console.log("a");
    console.log("r");
    console.log("t");
    console.log("a");
    console.log("j");
}

// myName();
// myName();

// function addTwoNumber (number1, number2){
        //   console.log(number1 + number2);
// }

// addTwoNumber(4,6);         // ==> It gives 10 as a output
// addTwoNumber();            // ==> Since no any argument so, It gives NaN
// addTwoNumber(3, "6");      // ==> Since second argument is string type so, It gives 36 
// addTwoNumber(78, "a");     // ==> Here is same as line 27, It gives 78a

function addTwoNumber (number1, number2){
    // let result = number1 + number2
    // return result;
    return number1 + number2;            // ==> After return no anyone lines of code is execute.
    console.log(" Code Completed");      // ==> This line never execute.
}

let result = addTwoNumber(7,9);
// console.log("Result : " ,result);



function userLoggedIn( userName){
    
    // return `${userName} Just Logged In`

    // if(userName === undefined){
    //     console.log("Please enter User Name.");
    //     return;
    // }

    if(!userName){                // ==> It also gives same as line 46, It is professional way.
        console.log(`${userName} Just Logged In`);
        return
    }
    return `${userName} Just Logged In`;
}

// console.log(userLoggedIn("Sartaj"));  // ==> It gives Sartaj Just Logged In
// console.log(userLoggedIn());          // ==> It gives undefined Just Logged In, for avoid it we use if-else condition.


// function calculateCartPrice(num1){       // ==> num1 recieve only one value and avoid remaining
function calculateCartPrice(...num2){       // ==> num2 is a rest operator and num2 recieve all the value.

    return num2;                            // ==> num2 store the value in the form of array.
}

// console.log(calculateCartPrice(200, 400, 500));

// ==============Object Handling through function============
const user = {
    username: "Sartaj",
    price: 499
}

function handleObject(anyObject){            // ==> anyObject is a reference of argument
    console.log(`User Name is ${anyObject.username} and prices is ${anyObject.price}`);
}
handleObject(user);    // ==> user convert to anyObject
handleObject({
    username: "Simran",
    price: 999
})

// ============Array Handling through function===========
let price = [299,99,399,1999,1299]

function handleArray (myArray){
    return myArray[3]
}

console.log(handleArray(price));