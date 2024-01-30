// ============> Promise ===========
// Promise is object enurable code which has three phase to execute, 1-pending, 2-resolve, 3-reject
// promise is intoduced in ES6, before it we use blueCode.
// promise is used two type, 1-promise consume means, used predefined library and 
// 2-create own promise and use this.

// const promise = new Promise( function ( resolve, reject){
//     // Do an async task
//     // DB calls, cryptography, network

//     setTimeout(function (){
//         console.log('Async task is Completed. ');
//     }, 1000)
// })      // ====> Above promise code is execute simply, because a simple setTimeOut function is here,
//       // so it execute easily, but problem occurs when write a function inside promisse to fetch the
//       // from DB. If data is fatched from db then 'resolve' otherwise 'reject', and both return something.


// ============ Promise One ===============
// const promiseOne = new Promise(function(resolve, reject)  {
    
//     setTimeout(function (){

//       console.log('Task is executed.');
//       resolve();
//     }, 1000)
// })

// promiseOne.then( function(){         // ====> this '.then' is directly connected to resolve() ( line 24)
//     console.log('Resolve is invoked');
// })


// =========== Promise Two ===============
// new Promise( function ( resolve, reject) {  // ==> It work same as line 19 to line 30

//     setTimeout(function(){
//         console.log('Async task 2 ');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("resolve task 2 ");
// })


// // ========== Promise Three ===========

// const promiseThree = new Promise(function(resolve, reject)  {
    
//     setTimeout(function(){

//         resolve({username: "Simran", city: "Hazaribagh"});   // ==> resolve return mostly time object.
//     },1000)
// })

// promiseThree.then(function(data){
//     console.log(data);
// })


// ========= Chaining promise =========
// const promiseFour = new Promise( function(resolve, reject){

//     setTimeout(function(){

//         // const error = true;  // ===> because error = true so else part is invoked
//         const error = false;
//         if(!error){
//             resolve({username : "Simran Parveen", city: "Hazaribag"})
//         }
//         else{
//             reject("Something went wrong..")
//         }
//     },1000)
// })

// promiseFour.then(function(data){

//     console.log(data);
//     return data.username;

// }).then(function( name){

//     console.log('UserName = ', name);
// }).catch(function(er){
//     console.log(er);
// }).finally(function(){
//     console.log('Promise is either resolved or rejected.');
// })


// ======== Promise handle using async and await =========

const promiseFive = new Promise( function(resolve, reject){

    setTimeout(function(){

        const error = true;  // ===> because error = true so else part is invoked
        // const error = false;
        if(!error){
            resolve({username : "Simran Parveen", city: "Hazaribag"})
        }
        else{
            reject("Something went wrong..")
        }
    },1000)
})

async function promiseFiveHandle (){
   try {
    const response = await promiseFive;
    console.log(response);
    
   } catch (error) {
    console.log(error);
   }
}

promiseFiveHandle()

//========= async function for fetch the data from url =========

// async function getAllUser (){
//     try {
        
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json();
//     console.log(data);

//     } catch (error) {
//         console.log(error);
//     }
// }

// getAllUser();


// ======== Line 121 to 135 same as here using .then() and .catch()

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(res){

    return res.json();
})
.then( function(data){

    console.log(data);
})
.catch(function ( error){
    console.log(error);
})