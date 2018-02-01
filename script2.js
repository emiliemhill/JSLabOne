var user = {
    name: null,
    health: 40,
    healsRemaining: 2,
    wins: 0,
    generateAttackDamage: function () {
        return Math.floor(Math.random() * 3) + 1;
    },
    heals: function () {
        return Math.floor(Math.random() * 10) + 1;
        this.heals += health;
        this.healsRemaining--;
    }
}
var grant = {
    name: "Grant the Mighty",
    health: 10,
    generateAttackDamage: function () {
        return Math.floor(Math.random() * 5) + 1;
    }
}
function startGame() {
    var gameStart = prompt("Would you like to play?");
    if (gameStart !== "no") {
        user.name = prompt("What is your name?");
        startCombat();
    }
}
function startCombat() {
    while (user.wins < 6) {
        if (user.wins === 5) {
            console.log("You are the winner!");
            break;
        }
        var choice = prompt("Attack, heal or quit?")
        if (choice === "attack") {
            user.health -= user.generateAttackDamage();
            grant.health -= grant.generateAttackDamage();
            console.log(user.name + " has " + user.health + " health left.");
            console.log("Grant has " + grant.health + " health left.");
        }
        if (choice == "heal") {
            while (user.healsRemaining > 0) {
                user.heals += user.health;
                user.healsRemaining--;
                console.log(user.name + " has " + user.health + " health now!");
            }

        } if (choice === "quit") {
            console.log("Thanks for playing!");
            break;

        } if (grant.health < 1) {
            user.wins++;
            grant.health = 10;
            console.log("Grant has " + grant.health + " health left and you have " + user.wins + " wins.");
        }
        else if (user.health <= 0) {
            console.log("Grant is the winner!");
        }

    }
}

startGame();
