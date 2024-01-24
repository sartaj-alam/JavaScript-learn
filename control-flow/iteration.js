// ===> For Loop
for (let i = 0; i < 11; i++) {
    const element = i;
    if( element == 5){
        // console.log(`${element} is the best number.`);
    }
    // console.log(i);
}

const heroArray = ["Khesari", "Dinesh", "Karthik","Vikrant"]
for (let index = 0; index < heroArray.length; index++) {
    const element = heroArray[index];
    // console.log(element);
    
}

// ===> break and continue
// break is used for terminate the program, continue is used for skip the problem

for (let i = 0; i < 20; i++) {
    const element =  i;
    if(element == 5){
        // console.log("Detected");
        // break;
        continue;
    }
    // console.log(`Value of I is ${i}`);
    
}

// ====> While Loop <====

let index = 0;
while (index < 21) {
    //   console.log(` Value of Index ${index}`);
      index = index + 2;
}

const actressArray = [ " Amarpali", " Madhu Sharma", "Rasmika", "Medha Shankar"]
index = 0;
while (index < actressArray.length) {
    //  console.log(`Array Value ${actressArray[index]}`);
     index = index + 1;
}

// ====> do while Loop <=====

const crushArray = [ "Chhoti", "Salini", "Simran", "Rasmika", "Medha Shankar"]
index = 0;

do {
    // console.log(` Values are  ${crushArray[index]}`);
    index = index + 1;
} while (index < crushArray.length);

// ====== For of Loop ==========

const arr = [1,2,3,4,5,6]
for (const arrayValue of arr) {
    
    // console.log(arrayValue);
}

const str = ["Sartaj Alam"]
for (const iterator of str) {
    //  console.log(iterator);
}

// =========== Map ===========
// Map is javascript object to map the array based on the key-value pair

const map = new Map()
map.set("In", "India")
map.set("Usa", "United State of America")
map.set("Jp", "Japan")
// console.log(map);         // ==> It gives all the value based on key value pair

for (const iterator of map) {    // ==> It gives same as line 76
    //  console.log(iterator);
}

for (const [key, value ] of map){       // ==> It is destructuring process 
    // console.log(`Keys  ${key} and values is ${value}`);
}

const myObj = {
    "name" : "Sartaj Alam",
    "city" : "RajDhanwar"
}

// for (const [iterator, value] of myObj) {
     
//     console.log(value);  // ==> It gives error because we can't iterate using forof loop in object, we use for in loop
// }

//===============For In Loop=================
// For in loop does no gives error while using in map and not show the output
for (const key in myObj) {
   
    // console.log(key);        // ==> It gives only key of the object
    // console.log(myObj[key]);    // ==> It gives the value of the key
}

const programming = ["c","c++","java","js"]
for (const key in programming) {
    // console.log(key);              // ==> It gives only index of the array
    // console.log(programming[key])     // ==> It gives the value of the array
}

programming.forEach( function (language) {    // ==> It is a call back function using for each loop
    // console.log(language);

})

programming.forEach( (language) => {      // ==> It is a arrow function
    // console.log(language);
})

function printValue (val) {
 
    console.log(val);
}

programming.forEach(printValue)         // ==> It is a normal function as a reference.