// IIFE stands for --> Imediately Invoked Function Expression.
// IIFE is used when the function needs to execute first before onther action is performed,
// it also used in, to prevent from the global variable.
// Syntax --> (function defination)(); here semicolon(;) is mendetory for terminate the IIFE
// function and executes next code.

(function greet() {                        // ==> This is Named IIFE
    console.log("Hii Hello Good Morning.");
})();
// IIFE is generally used for database connectivty before everything if executed.

((name) =>{                                      // ==> This is Unnamed IIFE
    console.log(`Database is Connected ${name}`);
}) ("Sartaj")