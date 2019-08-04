// create all variables for game
var letters = "abcdefghiklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 5;
var usedLet = [];
var randomLet = randomLet;
//randomly generate letter

randomLet = letters[Math.floor(Math.random() * letters.length)];
console.log(random);

function guess() {
    random = letters[Math.floor(Math.random() * letters.length)];
    console.log(randomLet);
}
//.onkeyup captures the players input as playerGuess
document.onkeyup = function (event) {
    var userGuess = event.key;

    // HANDELING CORRECT GUESSES
    //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
    if (userGuess === random) {
        won++;
        attempts = 5;
        usedLet = [];
    }

    //tests if players guess Does Not Equal ranLetter and decriments attempts by 1
    guess();
    if (userGuess !== random) {
        attempts--;
    }

    //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
    if (attempts == 0) {
        lost++;
        usedLet = []
        attempts = 5;
    }

    //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
    if (usedLet.indexOf(userGuess) >= 0) {

    } else {
        //this pushes the players incorrect guess to the usedArray and writes it to the HTML
        usedLet.push(userGuess);
        document.getElementById('userGuess').innerHTML = usedLet;
        console.log(usedLet);
    }

    //     directions.textContent = "";

//     // Display the user and computer guesses, and wins/losses/ties.
//     wins.textContent = "Wins: " + wins;
//     losses.textContent = "Losses: " + losses;
//     guessesLeft.textContent = "Guesses Left: " + ties;
//     user.textContent = "Your Guesses So Far: " + user;

//   }