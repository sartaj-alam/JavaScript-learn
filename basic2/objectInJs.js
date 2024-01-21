// Object type 1 ===> Singleton type
// We can get Singleton Object using Object.create means constructor


// Object type 2 ===> Object Literal 





const mySym = Symbol("key1")

const jsUser = {
    name: "Sartaj",
    "full Name": "Sartaj Alam",
    // mySym : "myKey",             // ==> Its type is string, yes it prefered mySym Symbol but It is not a symbol.
    [mySym] : "myKey",
    age: "21",
    location:"RajDhanwar",
    email: "sartaj@google.com",
    isLoggedIn: false
}

// console.log(jsUser.email);        // ==> It gives same as line 17, but generally it avoided.
// console.log(jsUser.full Name); // ==> We can not access the full name using dot(.)
// console.log(jsUser["email"]);     // ==> It gives same as line 15 and I preferred always this.
// console.log(jsUser["full Name"]); // ==> It gives Full Name

// console.log(jsUser.mySym);        // ==> It is uses for line 11,because it gives undefined for line 12
// console.log(typeof jsUser.mySym); // ==> It also for line 11

// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);

// console.log(jsUser);
// jsUser.email = "sartaj@microsoft.com"  //==>It allow to Change the email to sartaj@microsoft.com
// console.log(jsUser);

// Object.freeze(jsUser)               // ==> It don't allow to change the anythings,and do not show error 
// Object.freeze(jsUser.email)            // ==> You can not change the jsUser.email only.
// jsUser.email = "sartaj@chatgpt.com"
// console.log(jsUser);

jsUser.Greeting = function (){
        console.log("Hello JS User.  ");
}

jsUser.Greeting2 = function (){
    console.log(`Hii Hello My Name is ${this["full Name"]}`); // ==> Here This reffered to jsUser.
}
// console.log(jsUser.Greeting);   // ==> Greeting function invoked not execute
// console.log(jsUser.Greeting()); // ==> It gives all content of Greeting Function

// console.log(jsUser.Greeting2()); // ==> It gives whole content of Greeting2 function


const regularUser = {
    email : "simran@sbi.com",
    Name: {
        full_name : {
             first_name: "Simran",
             last_name:  "Parveen"
        }
    },
    city:"Hazaribagh"
}

// console.log(regularUser);                         // ==> It gives whole content of regularUser
// console.log(regularUser.Name);                    // ==> It gives whole content of regularUser.Name
// console.log(regularUser.Name.full_name);          // ==> It gives whole content of regularUser.Name.full_name
// console.log(regularUser.Name.full_name.first_name); // ==> It gives whole content of regularUser.Name.full_name.first_name
// console.log(regularUser.Name.full_name.last_name); // ==> It gives whole content of regularUser.Name.full_name.last_name
  
// ===================Combine two Object==============

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}               // ==> It merge obj2 in obj1 as a object
// const obj3 = Object.assign({}, obj1, obj2, obj4) // ==> First parameter take as a target and remaining as a source, It merge all object  and return a new object 
// const obj3 = {...obj1, ...obj2, ...obj4}           // This is Sprading method mean drop a glass on floor.
// console.log(obj3);

// console.log(Object.keys(regularUser));          // ==> It gives all only keys of the object
// console.log(Object.values(regularUser));        // ==> It gives all only values of the object 
// console.log(regularUser.hasOwnProperty('city')); // ==> It gives ouput as true and false, property match then true otherwise false


// ==============Object Destructuring and JSON API ===============

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor:"Sartaj"
}

// const {courseInstructor: teacher} = course;  // Teacher acts as a variable and take the value of courseInstructor from course.
// console.log(courseInstructor);               // It gives Sartaj as a output
// console.log(teacher);                        // It also gives Sartaj as a output

// ==============JSON API==================
// API is Application Programming Interface, it just like a interface we send the instruction and 
// API send the output as a JSON format, and API hide code of producing output

// ======> JSON output like this <=======
// {
//     "Name": "Sartaj Alam",
//     "city": "RajDhanwar",
//     "age":"21"
// }

// ======> SomeTimes JSON ouput comes as a objects of array <========
// [
//     {

//     },
//     {

//     },
//     {

//     }
// ]