// =============This Keywords==============
// this keyword behaves differentlly in various Engine like Window, Node, Deno.
// Global this in node engine is empty, but in window engine it is window object.
// this work only in Object not in simple function
const user = {
    username: "Sartaj",
    city: "RajDhanwar",
     welComesMessage : function(){
        console.log(`${this.username}, WelCome to Websites. `);
        // console.log(this);     // ==> this referred to whole user Object in Node
    }
}

// user.welComesMessage();
// user.username = "Simran";
// user.welComesMessage()
// console.log(this);        // ==> this keyword referred to global Object which is empty in Node

// function greet(){
//     let username = "Sartaj"
//     console.log(this.username);  // ==> this keywords does not work in simple function, it gives undefined.
//     console.log(this);           // ==> It does not referred to greet()
// }
// greet();

const greet = function (){
    let username = "Sartaj"
    console.log(this.username); // ==> this keyword does not work here, it gives undefined.
    console.log(this);          // ==> it does not referred to greet()
}

// =============Arrow Function==============
//Arrow function is used for code simplication, generally in single line statements
// In Arrow function return keywords are implicit.
const hello = () =>{
    username = "Sartaj"
    console.log(this.username);   // this keyword does not referred to username but.
    console.log(this);            // it referred whole object of the hello(), which is empty now.
}

const addTwo = (num1, num2) => (num1 + num2)  // In Arrow function return keyword is implicit
// const addTwo = (num1,num2) => num1+ num2   // It same as line 40, it also gives 47 
// const addTwo = (num1, num2) => {           // ==> In arrow function, generally it avoid.
//     return num1 + num2
// }
// console.log(addTwo(45,2));

const returnObject = () => ({username: "Sartaj"})
console.log(returnObject());