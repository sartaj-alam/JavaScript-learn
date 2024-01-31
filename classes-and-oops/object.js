// =============> Prototyple Inheritance =========
// In Javascript almost everything is object, for example array refers to object, string refers
// to object and function also refers to object. Therefore if some properties does not exist in
// array, string, and function then they take the properties of parents (Object).
// please see prototype.js for understand prototype


//============= Array refers object ===========
const number = [1,2,3,4,5,6,7,8,9]

console.log(number);
console.log(number.length);
console.log(number.prototype);


// ========== String refers object ==========
const str = "Sartaj Alam"

console.log(str);
console.log(str.length);
console.log(str.toUpperCase());

// ========== Function refers object ==================
function multiplyBy5 (num){
    return num * 5;
}

multiplyBy5.power = 5;

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

// ============ this and new keywords =====================

function createUser ( username, score){
    this.username = username;
    this.score = score
}

createUser.prototype.increment = function (){
    this.score++;
}

createUser.prototype.printMe = function (){
    console.log(`Price is : ${this.score}`);
}

const chai = new createUser('Chai', 25);
const tea = new createUser('tea', 455);

chai.printMe();
tea.printMe();