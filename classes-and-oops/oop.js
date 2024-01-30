// ======= Object Literal =============
// const user =  {
//     username: "Sartaj Alam",
//     city: "RajDhanwar",
//     loginCount : 8,
//     signedIn : true,
//     getuserDetails : function(){
//         // console.log('Got User Detail from DB');
//         // console.log(`UserName : ${username}`);      // ===> node is confused about which username;
//         console.log((`UserName : ${this.username}`));
//     }
// }

// console.log(user.city);
// console.log(user.getuserDetails());

// ======== Constructor Class ===========

function user (username, loginCount, isLoggedIn){
    this.username = username,
    this.loginCount = loginCount,
    this.isLoggedIn = isLoggedIn

    return this
}

// const userOne = user("Sartaj", 12, true); 
// const userTwo = user("Simran", 11, false)  // ==> It overwrites the userOne, kyunki we don't use new instance.

const userOne = new user('Sartaj', 12, true);
const userTwo = new user('Simran', 11, false)

console.log(userOne);