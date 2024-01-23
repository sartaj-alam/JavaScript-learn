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
    console.log(` Values are  ${crushArray[index]}`);
    index = index + 1;
} while (index < crushArray.length);