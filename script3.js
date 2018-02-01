(function () {
    var attackButton = document.getElementById("attackButton");
    var userHealthBar = document.getElementById("userHealth");
    var messageEl = document.getElementById("message");
    var healButton = document.getElementById("healButton");
    var quitButton = document.getElementById("quitButton");
    var userWinsBar = document.getElementById("userWins");
    var userHealsBar = document.getElementById("userHeals");
    var grantHealthBar = document.getElementById("grantHealth");
    var user = {
        health: 40,
        heals: 2,
        wins: 0,
        name: null,
        userGenerateAttackDamage: function () {
            return Math.floor(Math.random() * 3) + 1;
        },
        heal: function () {
            if (this.heals > 0) {
                this.health += Math.floor(Math.random() * 10) + 1;
                this.heals--;
            }
        },
    };
    var grant = {
        name: "Grant",
        health: 10,
        grantGenerateAttackDamage: function () {
            return Math.floor(Math.random() * 5) + 1;
        }
    }

    startButton.onclick = function () {
        user.name = prompt("What is your name?");
        startButton.classList.add("hideStartButton");
        game.classList.remove("hidden");
    }

    attackButton.onclick = function () {
        grant.health -= user.userGenerateAttackDamage();
        user.health -= grant.grantGenerateAttackDamage();
        updateDisplay();
        updateMessage("Ouch! " + grant.name + " has " + grant.health + " health left! " +
            user.name + " has " + user.health + " health left!");
        if (user.health <= 0) {
            updateMessage("Grant is the winner!");
            return;
        }
        if (user.wins === 5) {
            updateMessage(user.name + " is the winner!");
            return;
        }

        if (grant.health < 1) {
            updateMessage("Grant is dead!!");
            user.wins++;
            grant.health = 10;
            UpdateDisplay();
        }
    }



    healButton.onclick = function () {
        user.heal();
        updateDisplay();
        updateMessage("You have healed yourself! You now have " + user.health + " health!");
    }

    quitButton.onclick = function () {
        updateDisplay();
        updateMessage("See ya later!");
    }


    function updateDisplay() {
        userHealthBar.value = user.health;
        grantHealthBar.value = grant.health;
        userWinsBar.value = user.wins;
        userHealsBar.value = user.heals;
    }

    function updateMessage(newMessage) {
        messageEl.innerText = newMessage;
    }



})();