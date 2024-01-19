
// ==================Number=====================
const score = 400;        //  => This is implicit data conversion without declare data type
// console.log(score);


const balance = new Number(100)     // ==> This is explicit data coneversion using datatype
// console.log(balance);

console.log(balance.toLocaleString());     //  ==> It gives output as a string
// console.log(balance.toLocaleString().length);    //  ==> Since we can use data as a string so also check length
// console.log(balance.toFixed(2));      //  ==> It gives data to  upto N (2) decimal

const value = 1231.6879
// console.log(value);                   // ==> It gives string output 1231.6879
// console.log(value.toPrecision(6));    // ==> It gives string output 1231.69 upto N (6) digit
// console.log(value.toPrecision(4));    // ==> It gives string ouput 1232 upto N (4) digit
// console.log(value.toPrecision(3));    // ==> It gives string output 1.23e+3, ouput as a exponential term
// console.log(value.toPrecision(2));    // ==> It gives string output 1.2e+3, output as a exponential term


// =========================Maths=======================

// console.log(Math.abs(-455));                   // It gives 455,change the sign to positive only
// console.log(Math.round(4.6));                  // It gives 5 after round off
// console.log(Math.min(3,445,78,12,7,0,-34));    // It gives minimum value from the array
// console.log(Math.max(34,66,77,12,0,34,-35.99));  // It gives maximum value from the array

// console.log(Math.random());                 // It goves random value fro 0 to 1
// console.log((Math.random() * 10) );         // In case you make a ludo game then you multiply this number to 10
// console.log((Math.random() * 10) + 1);      // you can also increase the value
// console.log(Math.floor(Math.random() * 10)); // ==> it gives only integer value and lost decimal value
// console.log(Math.ceil(Math.random() * 10));  // ==> it gives next integer value and after adding some value to desimal

// ==============WAP to gives a value within a range===================

const min =10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);