// create all variables for game
var letters = "abcdefghiklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var userInput = [];
var randomLet = randomLet;
//randomly generate letter
randomLet = letters[Math.floor(Math.random() * letters.length)];
console.log(random);

function guesses() {
    random = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLet);
}
//.onkeyup is input
document.onkeyup = function (event) {
    var userInput = event.key;
    
   if (userInput === random) {
        wins++;
        guessesLeft = 5;
        userInput = [];
    }

    guesses();
    if (userInput !== random) {
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

    document.getElementById('wins') = wins;
    document.getElementById('losses') = losses;
    document.getElementById('guessesLeft') = guessesLeft;

}   
//     directions.textContent = ""
//     wins.textContent = "Wins: " + wins;
//     losses.textContent = "Losses: " + losses;
//     guessesLeft.textContent = "Guesses Left: " + ties;
//     user.textContent = "Your Guesses So Far: " + user;

//   }