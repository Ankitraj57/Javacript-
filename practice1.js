//Create a game where you start with any random game number. Ask the user to keep guessing 
//the game number until the user enters correct value.

let gameNumber = 25;
let userNum = prompt("Guess the game number :");

while(userNum != gameNumber){
  userNum = prompt("You entered wrong number. Guess again:");

}

console.log("congratulations, you enter the right number");