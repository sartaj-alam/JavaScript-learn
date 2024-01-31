// =========== Prototype Magic =============
// In this segment i will discuss about prototype inheritance, means access the other method 
// from parents. And also discuss about the how to create our own prototype in parents as well
// as child and access from different source


// ========= String =========
const str1 = "Sartaj Alam      ";
const str2 = "      Simran      ";
const str3 = "          ";
// console.log(`Original lenth ofstr ${str1}`, str1.length);         // ==> 17
// console.log(`Original lenth ofstr ${str2}`, str2.length);         // ==> 18
// console.log(`Original lenth ofstr ${str3}`, str3.length);         // ==> 10
// console.log(str.trim().length);  // ==> 11, incase we have thousands of string and kya mein sabhi me trim() use kru.
// === For this reason i want to create our own prototype that is used for give actual length of the string.


// This method is created using Object prototype means it is accessible for every method or every object.
Object.prototype.trueLength = function (string){
      this.string = string.trim();
      return this.string.length;
}

// console.log(`True Lenth of ${str1}`,trueLength(str1));
// console.log(`True Lenth of ${str1}`,trueLength(str2));
// console.log(`True Lenth of ${str1}`,trueLength(str3));

//  Now i am creating personal prototype for single Array
 
const array = [1,2,3,4,5,6,7,8,9]

Array.prototype.sayHello = function (){
    console.log("Hiii Hello");
}
array.sayHello(); 
// str1.sayHello();   // ==> it gives error because sayHello is a Array Prototype, not String or Object
