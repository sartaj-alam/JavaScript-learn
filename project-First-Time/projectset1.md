# Project related to DOM

## project Link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## project 1 (Color Changer)

```javascript
// console.log("Sartaj")

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function (button){
  console.log(button);
  
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if(e.target.id === "grey"){
      body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === "white"){
      body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === "blue"){
      body.style.backgroundColor = e.target.id;
    }
     if(e.target.id === "yellow"){
      body.style.backgroundColor = e.target.id;
    }
   
  })
});

```

## project 2 (BMI)

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', function (e) {

  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if(height === '' || height < 0 || isNaN(height)){
    result.innerHTML = "Please give a valid Height" ;
  }
  else if(weight === '' ||weight < 0 || isNaN(weight)){
    result.innerHTML = "Please give a valid weight" ;
  }
  else {
     const res =(weight / ((height * height ) / 10000)).toFixed(2);
     if(res <= 18.6 ){
       result.innerHTML = `${res} ( Under Weight )`;
     }
     else if (res > 18.6 && res <= 24.9){
       result.innerHTML = `${res} ( Normal Range )`;
     }
     else if(res > 24.9){
       result.innerHTML = `${res} ( Overweight )`;
     }
  }

});
```

## project 3 (Digital Clock)
```javascript

const clock = document.getElementById('clock');

setInterval(function (){

  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000)

```
## project 4 (Guess The Number )
```javascript
let number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const leftChance = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', function(e){

    e.preventDefault();
    const guess = parseInt((userInput).value);
    validateGuess(guess);
  })
}

function validateGuess (guess){

  if(isNaN(guess)){
    alert("Please enter a valid number.");
  }
  else if( guess < 0){
    alert("Please enter number more than 1")
  }
  else if( guess > 100){
    alert("Please enter number less than 100")
  }
  else {
  prevGuess.push(guess);
  
  if( numGuess === 11){
    displayGuess(guess);
    displayMeassage(`Game Over. Random number was ${number}`)
    endGame();
  }
  else {
    displayGuess(guess);
    checkGuess(guess);
  }
 }
}

function checkGuess (guess){
   if(guess === number){
     displayMeassage(`You guessed it right.`);
     endGame();
   }
   else if( guess < number){
     displayMeassage(`Number is tooo low.`);
   }
   else if(guess > number){
     displayMeassage(`Number is tooo high.`)
   }
}

function displayGuess (guess){
  
   userInput.value = '';
   guessSlot.innerHTML += `${guess} ,`
   numGuess++;
   leftChance.innerHTML = `${ 11 - numGuess}`
}

function displayMeassage(message){
      lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame (){
    userInput.value ='';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2   id= "newGame" > Start Game</h2 `;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame(){

  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function(e){
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    leftChance.innerHTML = `${ 11 - numGuess}`
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}

```

## project 5 ( Keyboard Linsteining)
```javascript

console.log('Project 5');
const insert = document.querySelector('#insert');
window.addEventListener('keydown', (e) => {

  insert.innerHTML = `
  
  <div class = 'color'>
  <table>
  <tr>
  <th>Key</th>
  <th>KeyCode</th>
  <th>Code</th>
  </tr>
  <tr>
  <td>${e.key === ' ' ? 'Space' : e.key}</td>
  <td>${e.keyCode}</td>
  <td>${e.code}</td>
  `
})

```


## project 6(Unlimited Color)
```javascript
// // ============ Our Code =============
// let interval;

// // ============== Code for Start ============= 
// document.querySelector('#start').addEventListener('click', function(){

// interval = setInterval(function(){

//   let colorId = '#';
//  let colorValue = Math.floor(Math.random() * 10000 + 1);
//  let color = colorId.concat(colorValue);
//  document.querySelector('body').style.backgroundColor = color;
// console.log(colorValue)
// },1000);

// })
// // =========== Code for Stopped ============
// document.querySelector('#stop').addEventListener('click', function(){

//   console.log('Stopped');
//   clearInterval(interval);
// })


// ========= Code From Chai aur Code ============

// generate a random color

let intervalId;
const randomColor = function() {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  // console.log(color);
  return color;
};

const startChangingColor = function(){

  if(!intervalId){
  intervalId = setInterval(changeBgColor, 1000)
  }

  function changeBgColor  (){
  document.body.style.backgroundColor = randomColor();
  }
}

const stopChangingColor = function(){
  console.log("Stopped");
  clearInterval(intervalId);
  intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

```

