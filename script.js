var gameStart = prompt("Would you like to play with two players?");
if (gameStart === "Yes") {
  var name = prompt("What is your name?")
}

var userHealth = 40
var grantHealth = 10
var grantsLives = 3
var userWins = 0
var grantWins = 0

while (userHealth > 0 && grantsLives >= 1) {
    var randomNumber = Math.floor(Math.random()*(2-1+1)+1);
    userHealth -= randomNumber;
    grantHealth -= randomNumber;
    console.log(name + " has  " + userHealth + " health left.");
    console.log("Grant has " + grantHealth + " health left.");
    if (grantHealth === 0) {
        grantsLives--;
        userWins++;
        console.log("Grant has " + grantsLives + " lives left.");
        grantHealth = 10;
}
}
if (grantsLives === 0) {
    console.log("You are the winner!");
} else if (userHealth === 0){
    console.log("Grant is the winner!");
}
