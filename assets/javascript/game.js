// create all variables for game
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var attempts = [];

//user input
var userInput = document.onkeyup;

//"computer" letter generator

//display on html
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesText = document.getElementById("guessesLeft");
var attemptsText = document.getElementById("attempts");
var userText = document.getElementById("userInput");


//.onkeyup is input
document.onkeyup = function (event) {

    userInput = event.key;
    attempts.push(userInput);

    var randomLet = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLet.toLowerCase());

   if (userInput === randomLet) {
        wins++;
        guessesLeft = 5;
        attempts = [];
    } 
        
    if (userInput !== randomLet) {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 5;
        attempts = [];
    }

//letter is only used once
    if (userInput.indexOf(userInput) >= 0) {

    }
    
// //user input is recorded
//         userInput.push(userInput) = userInput;
//         innerHTML(userInput);

    winsText.innerHTML = "WINS: " + wins;
    lossesText.innerHTML = "LOSSES: " + losses;
    guessesText.innerHTML = "GUESSES LEFT: " + guessesLeft;
    attemptsText.innerHTML = "ATTEMPTS: " + attempts;
    userText.innerHTML = "YOUR GUESSES SO FAR: " + userInput;
  }

//reset function

  function myFunction() {
    document.getElementById("myForm").reset();
  }
    


// function reset() {
//     userInput.length = 0;
       
// }

