// create all variables for game
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userInput = [];


var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var userText = document.getElementById("userInput");


//.onkeyup is input
document.onkeyup = function (event) {

    var userInput = event.key;

    var randomLet = "";
    var randomLet = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLet);

    //randomly generate letter
    
   if (userInput === randomLet) {
        wins++;
        guessesLeft = 5;
        userInput = [];
    }

    guesses();
    if (userInput !== randomLet) {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        userInput = [];
        guessesLeft = 5;
    }
//letter is only used once
    if (userInput.indexOf(userInput) >= 0) {

    } 
    
    else {
//user input is recorded
        userInput.push(userInput) = userInput;
        console.log(userInput);
    }
// Display the user guesses and wins/losses.

    // document.getElementById('wins') = wins;
    // document.getElementById('losses') = losses;
    // document.getElementById('guessesLeft') = guessesLeft;


    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeft.textContent = "Guesses Left: " + ties;
    userIput.textContent = "Your Guesses So Far: " + user;
  }