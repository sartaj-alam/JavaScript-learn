// Nullish Coalescing Operator (??) : null undefined
// It is totally diferent from Ternary Operator

let val;
val = 10 ?? 30;
val = null ?? 1
val = undefined ?? 10
val = null ?? 5 ?? 7

// Sometimes we fetch the from database and get the null value, because of null value,
// structure of the code get damaged, so avoid this problem we user alternate value or function.
console.log(val);

// ==> Ternary Operator
const cost = 99;
cost < 90 ? console.log("Cost Under 90") : console.log("Cost above 90");

// IF
// Syntax if(condition)
//    {
//     code
//    }
// <, >, <=, >=, ==, !=, ===

const temprature = 41;

if( temprature < 50) {
    
    console.log("Temprature under 50");
}
else {

    console.log("Tempratur over 50");
}

const price = 1000;
if (price < 500) {
    console.log(`Price Under 500 ${price}`);
}
else if (price < 800) {
    console.log(`Price Under 500 ${price}`);
}
else if (price < 1100) {
    console.log(`Price Under 500 ${price}`);
}

const userLoggedIn = true;
const debitCard = true;
if (userLoggedIn && debitCard ) {
    console.log(" Can Purchased.");
}