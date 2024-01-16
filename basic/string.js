// const name = "Sartaj"
// const city = "RajDhanwar"

// console.log(name + city + " done");      //   => it is not suitable for proffessional coder.
// console.log(`My name is ${name} and  belongs to ${city}`);     //  => user stick for concate and print value


const game = new String("Cricket")

console.log(game[0]);
// console.log(game.__proto__);
// console.log(game.toUpperCase());
// console.log(game);
const game2 = game.substring(0,4)
// console.log(game2);

const game3 = game.slice(-8,6);
// console.log(game3);

const name = "      Sartaj      "
// console.log(name);
// console.log(name.trim());

let array = ["Chhoti","Nusrat","Ranju","Simran","Puneeta"]
// console.log(array);
// array.splice(3,0)
// console.log(array);
// array.splice(3,1, "Salini","Shahjadi")
// console.log(array);
let subarray = array.splice(1,2)
console.log(array);
console.log(subarray);
// let gf = array.slice(2,6)
// console.log(gf);

// let user = {
//     fname: "Sartaj",
//     lname: "Alam"
// }
// let user2 = user;
// console.log(user2);
// console.log(user2.fname.toUpperCase());
// console.log(user);