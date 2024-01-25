// before start, i have covered map in iteration.js
// ======== For Each Loop ============

const arr = [ "c++", "Java", "python", "js"]

let language = arr.forEach( ( items) => {
    // console.log(items);
    return items;               // ===> foreach donot return any value, so we use filter in this place
})

// console.log(language);

// ========== Filter ============
// Filter return the value
 
const ginti = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = ginti.filter ( (num) => {
    return num > 4;
})

// console.log(value);

const Book = [
    { title: 'Book One', genre: 'Non-Fiction', publish: 1990, edition: 2010
    },
    { title: 'Book Two', genre: 'Fiction', publish: 1969, edition: 2012
    },
    { title: 'Book Three', genre: 'History', publish: 1990, edition: 2007
    },
    { title: 'Book Four', genre: 'Geography', publish: 1988, edition: 2010
    },
    { title: 'Book Five', genre: 'History', publish: 1990, edition: 2010
    },
]

let userBook = Book.filter((bk) => bk.genre === 'History')
// console.log(userBook);

userBook = Book.filter((bk) => bk.publish > 1980)
// console.log(userBook);

//============== Map ===============
const number = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// const num = number.map((val) => { return val + 10})
// console.log(num);

// ======== Chaining ============
// output of first operation (map) is input for second operation (map) and output of second 
// operation (map) is input for third operation ( filter) and ouput of filter is final value for num
const num = number
         .map((num) => num * 10)    // here input is 10,20,30,40,50,60,70,80,90,100
         .map((num) => num + 1)     // here input is 100,200,300,400,500,600,700,800,900,1000
         .filter((num) => num >= 40)  // here input is 101,201,301,401,501,601,701,801,901,1001

// console.log(num);

// ========= Reduce ===========
// reduce takes three argument 1. Accumulator (acc), 2.CurrentValue (currVal) 3. StartValue (0)
// Accumulator first iteration takes Start Value, after first iteration Accumulator holds the 
// return Value , Current Value takes Array Value
const arrNumber = [1, 2, 3, 4, 5]

// const returnValue = arrNumber.reduce( function ( acc, currVal) {
    
//     return acc + currVal;   // first times 0+1, second times 1+2, third times 3+3, similarly all
// }, 0)

const returnValue = arrNumber.reduce( ((acc,currVal) => acc + currVal), 0 )

console.log(returnValue);