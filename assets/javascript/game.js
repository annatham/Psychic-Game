// create all variables for game
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var attempts = [];

//user input
var userInput = document.onkeyup;

//"computer" letter generator

var randomLet = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLet[0].toLowerCase());

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

   if (userInput === randomLet) {
        wins++;
        guessesLeft = 5;
        attempts = [];
    } 

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 5;
    }
        
    if (userInput !== randomLet) {
        guessesLeft--;
        attempts = [];

    }

//letter is only used once
    // if (userInput.indexOf(userInput) >= 0) {


    
// //user input is recorded
//         userInput.push(userInput) = userInput;
//         innerHTML(userInput);
    
//Display the user guesses and wins/losses.

    // document.getElementById("wins") = wins;
    // document.getElementById("losses") = losses;
    // document.getElementById("guessesLeft") = guessesLeft;
    // document.getElementById("userInput") = userInput;


    winsText.innerHTML = "WINS: " + wins;
    lossesText.innerHTML = "LOSSES: " + losses;
    guessesText.innerHTML = "GUESSES LEFT: " + guessesLeft;
    attemptsText.innerHTML = "ATTEMPTS: " + attempts;
    userText.innerHTML = "YOUR GUESSES SO FAR: " + userInput;
  }

//reset function

  function reset() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "Reset Game";
    document.body.appendChild(btn);
    userInput.length = 0;

  }
    


// function reset() {
//     userInput.length = 0;
// //computer chooses new letter
//     randomLet = letters[Math.floor(Math.random() * letters.length)];
//     console.log(randomLet.toLowerCase());        
// }


  //create reset function
  //guesses return to 5
  //empty userImput array
  //computer will need to generate a new random letter