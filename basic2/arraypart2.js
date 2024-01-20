// let table = [2,4,6,8,10,12]
// let prime = [1,3,5,7,11,13,17,19]
// let odd = [1,3,5,7,9,11,1,15,17]

// table.push(prime)            // ==> It push the value as a array inside the existing array
// console.log(table);              // ==> [2,4,6,8,10,12,[1,3,5,7,11,13,17,19]]

// let number = table.concat(prime)  // ==> Concate the array with existing array, and return a new array
// console.log(number);              // ==> [2,4,6,8,10,12,1,3,5,7,11,13,17,19]

// let number = [...table, ...prime,...odd]   // This is Sprade method means drop the glass in the floor,you can sprade many aaray
// console.log(number);


let factorContains = [1,[1], 2,[1,2], 3,[1,3], 4,[1,2,4], 5,[1,5], 6,[1,2,3,6]]
console.log(factorContains);             // ==> It gives existing array
let realArray = factorContains.flat(Infinity)  // ==> 
console.log(realArray);