// console.log("2" > 1);         // =>   "2" is automatically changed to 2
// console.log("03" < 1);        //   =>    "03"  is automatically changed to 03

//  ======> the equality check ( == ) and comparision (>, < , <=, >=) are working differently <===
// console.log(null > 0);         //   => Comparision operator convert null to number and treated as 0
// console.log(null == 0);        //   =>  equal operator convert null to NaN
// console.log(null >= 0);        //   => Comparision operator convert null to number and treated as 0


// ======> Undefined does not convert it self to other data type
// console.log(undefined > 0);        //  => false
// console.log(undefined < 0);         //   => false
// console.log(undefined == 0);        //   =>false
// console.log(undefined <= 0);        //   => false
// console.log(undefined >= 0);        //   => false

// ===========> Strict Check (===)  ===========
console.log("2" == 2);     //   =>   true,   '==' can change the datatype 
console.log("2" === 2);     //  =>    false,  '==='  can't change the datatype
console.log( 4 === 4);      //  =>    True