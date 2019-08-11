// create all variables for game
var letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userInput = [];

//display on html
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeft = document.getElementById("guessesLeft");
var userText = document.getElementById("userInput");

//"computer" letter generator

var randomLet = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLet.toLowerCase());

//.onkeyup is input
document.onkeyup = function (event) {

    var userInput = event.key;

   if (userInput === randomLet) {
        wins++;
        guessesLeft = 5;

        //reset function
        function reset () {
            userInput.length = 0;
        //computer chooses new letter
            randomLet = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLet.toLowerCase());        }
        reset();
    } 

    else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        guessesLeft = 5;

        function reset () {
            userInput.length = 0;
        //computer chooses new letter
            randomLet = letters[Math.floor(Math.random() * letters.length)];
            console.log(randomLet.toLowerCase());
        }
        reset();

    }
        
    if (userInput !== randomLet) {
        guessesLeft--;
    }

    if (guessesLeft == 0) {
        losses++;
        guessesLeft =5;
    }
//letter is only used once
    if (userInput.indexOf(userInput) >= 0) {

    } 
    
//user input is recorded
        userInput.push(userInput) = userInput;
        innerHTML(userInput);
    
//Display the user guesses and wins/losses.

    // document.getElementById('wins') = wins;
    // document.getElementById('losses') = losses;
    // document.getElementById('guessesLeft') = guessesLeft;


    winsText.innerHTML = "WINS: " + wins;
    lossesText.innerHTML = "LOSSES: " + losses;
    guessesLeft.innerHTML = "ATTEMPTS: " + guessesLeft;
    userInput.innerHTML = "YOUR GUESSES SO FAR: " + userInput;
  }

  //create reset function
  //guesses return to 5
  //empty userImput array
  //computer will need to generate a new random letter