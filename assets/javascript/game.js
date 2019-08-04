var computerChoices = ["r", "p", "s"];

// Creating variables to hold the number of wins, losses, and ties. They start at 0.
var wins = 0;
var losses = 0;
var guessesLeft = 0;

// Create variables that hold references to the places in the HTML where we want to display things.
var directions = document.getElementById("directions");
var wins = document.getElementById("wins");
var losses = document.getElementById("losses");
var guessesLef = document.getElementById("guessesLeft");
var user = document.getElementById("guesses");

// This function is run whenever the user presses a key.
document.onkeyup = function(event) {

  // Determines which key was pressed.
  var user = event.key;

  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  // Only run the following code block if the user presses "r" or "p" or "s".
  if ((user === "r") || (user === "p") || (user === "s")) {

    // If we choose rock and the computer guesses scissors, increment our wins variable.
    if ((user === "r") && (computerGuess === "s")) {
      wins++;
    }

    // If we choose rock and the computer guesses paper, increment our losses variable.
    if ((user === "r") && (computerGuess === "p")) {
      losses++;
    }

    // If we choose scissors and the computer guesses rock, increment our losses variable.
    if ((user === "s") && (computerGuess === "r")) {
      losses++;
    }

    // If we choose scissors and the computer guesses paper, increment our wins variable.
    if ((user === "s") && (computerGuess === "p")) {
      wins++;
    }

    // If we choose paper and the computer guesses rock, increment our wins variable.
    if ((user === "p") && (computerGuess === "r")) {
      wins++;
    }

    // If we choose paper and the computer guesses scissors, increment our losses variable.
    if ((user === "p") && (computerGuess === "s")) {
      losses++;
    }

    // If we choose the same thing as the computer, increment our ties variable.
    if (user === computerGuess) {
      ties++;
    }

    // Hide the directions
    directions.textContent = "";

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "You chose: " + user;
    computerChoiceText.textContent = "The computer chose: " + computerGuess;
    winsText.textContent = "wins: " + wins;
    lossesText.textContent = "losses: " + losses;
    tiesText.textContent = "ties: " + ties;
  }