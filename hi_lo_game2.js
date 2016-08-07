var userName;
var randomNumber = Math.floor(Math.random() * (101 - 1 + 1)+ 1);
console.log(randomNumber);
var userGuess;
var userAttempts = 0;


function submitName(){
  userName = document.getElementById("inputFieldName").value;
  document.getElementById("outputName").innerHTML = "Greetings, " + userName + ".";
}

function checkNumber() {

  userGuess = document.getElementById("inputFieldNumber").value;
  console.log(userGuess);


  // If user's guess is not an integer, then execute the following:
  if (parseInt(userGuess,10) != userGuess) {
    document.getElementById("notification").innerHTML = "You can only use numbers. Guess again.";
    // userAttempts = userAttempts + 1;
    document.getElementById("inputFieldNumber").innerHTML = " ";
  }

  // If user's guess is higher than computer's choice, then execute the following:
  if (parseInt(userGuess) > randomNumber) {
    document.getElementById("notification").innerHTML = "Your number is too high. Guess again.";
    userAttempts = userAttempts + 1;
    document.getElementById("inputFieldNumber").value = " ";
  }

  // If user's guess is lower than computer's choice, then execute the following:
  if (parseInt(userGuess) < randomNumber) {
    document.getElementById("notification").innerHTML = "Your number is too low. Guess again.";
    userAttempts = userAttempts + 1;
    document.getElementById("inputFieldNumber").value = " ";
  }

  // If user's guess is correct, execute the following:
  if (parseInt(userGuess) == randomNumber) {
    document.getElementById("notification").innerHTML = "You've guessed the magic number.  Congratulations on defeating me. When computers take over the earth I shall remember your name, " + username + ".";
    document.getElementById("inputFieldNumber").value = " ";
  }

  // If user attempts to guess more than 5 times, execute the following:
  if (userAttempts>=5) {
    document.getElementById("notification").innerHTML = "You lose, paltry mortal.";
    document.getElementById("inputFieldNumber").value = " ";
    document.getElementById("myBtn").disabled = true;
  }

  document.getElementById("attemptsLeft").innerHTML = "You have " + (5 - userAttempts) + " tries left."
  // End function bracket.
}
