// ===================Date===================
let myDate = new Date()                  // ==> Predefined Date
// console.log(myDate);                     // ==> It gives unreadable date and times
// console.log(myDate.toString());          // ==> It gives few readable date and times
// console.log(myDate.toDateString());      // ==> It gives Sat Jan 20 2024
// console.log(myDate.toLocaleDateString()); // => It gives 1/20/2024
// console.log(typeof myDate);              // ==> It gives Object
console.log(myDate.getDate());              // ==> It gives Todays Date 
console.log(myDate.getMonth() + 1);         // ==> It gives Todays Month, since month started from 0,se add 1
console.log(myDate.getDay());               // ==> It gives Todays day number,Sunday--->0 to Saturday--->6


// =============User Defined Date=============

let myCreatedDate = new Date(2024, 0, 20)       // ==> It gives  Sat Jan 20 2024,  (Year, Month, Date, Time), Month always start from 0
// let myCreatedDate = new Date(2, 20, 2024)    // ==> It gives Tue Mar 16 1909
let myDateTime = new Date(2002, 1, 22, 4,30)    // ==> It gives 2/22/2002, 4:30:00 AM
// console.log(myCreatedDate.toDateString());
// console.log(myDateTime.toLocaleString());

// let dateStringForm = new Date("2024-01-20")     // ==> It gives 1/20/2024, 12:00:00 AM, here month always start from 1
let dateStringForm = new Date("01-20-2024")        // ==> It gives 1/20/2024, 12:00:00 Am
// console.log(dateStringForm.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);                  // ==> It gives time in milisecond from 1 Jan 1970
// console.log(Math.floor(myTimeStamp/1000)); // ==> It gives time in second from 1 Jan 1970
// console.log(myCreatedDate.getTime());      // ==> You can also covert user defined date to milisecond