var userHealth = 40
var grantHealth = 10
var grantsLives = 3
var grantWins = 0

function startGame() {
    if (prompt("Would you like to play against Grant the Mighty?") === "Yes") {
        user = prompt("What's your name?");
        startCombat();
    }
}
function startCombat() {
    while (userHealth > 0 && grantHealth > 0 && grantsLives > 0) {
        if (prompt("Attack or quit?") === "attack") {
            userHealth -= getDamage()
            grantHealth -= getDamage() 
            console.log(user + " has  " + userHealth + " health left.");
            console.log("Grant has " + grantHealth + " health left.");
            if (grantHealth < 1) {
                grantsLives--;
                console.log("Grant has " + grantsLives + " lives left.");
                grantHealth = 10;
            }
        } else {
            break;
        }
        if (grantsLives === 0) {
            console.log(user + " is the winner!");
        } else if (userHealth === 0){
            console.log("Grant is the winner!");
        }
    }
}
function getDamage() {
    return userDamage = Math.floor(Math.random()*5)+1;
    
}
startGame();
