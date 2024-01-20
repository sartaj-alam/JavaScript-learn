// =================Array=================
// let myArr = ["Khesari","Dinesh","Massy","Karthik",800,566]
// console.log(myArr);
// console.log(myArr[4]);
// let gf = new Array("Chhoti","Nusrat","Ranju","Shahjadi","Simran")
// console.log(gf);

// ==========Array Method============
// myArr.push(45.66)       //Add the value in the last index
// myArr.push("Sartaj")
// console.log(myArr);
// myArr.pop()             // Delete the Array from last index
// console.log(myArr);
// myArr.unshift("Alam")   // Add the value in the begining and shift all the value to right
// console.log(myArr);
// myArr.shift()           // Delete the value from the begining 
// console.log(myArr);
// console.log(myArr.includes(100));       // It gives True or False as result
// console.log(myArr.indexOf("Massy"));    // If found then give index otherwise -1

// let newArr = myArr.join()          // ==> Join is a method to bind the array and also convert array to string
// console.log(myArr);                // ==> It gives all value in the square bracket
// console.log(typeof myArr);        // ==> It gives Array as a type
// console.log(newArr);              // ==> It gives all the value simply comma seperated
// console.log(typeof newArr);       // ==> It gives String as a type

// ============Slice and Splice============
let myArr = [1,2,3,4,5,6,7]
console.log("A" , myArr);

const myArrN1 = myArr.slice(1,4)
console.log("B",myArr);
console.log(myArrN1);

const myArrN2 = myArr.splice(1,4)
console.log("C", myArr);
console.log(myArrN2);