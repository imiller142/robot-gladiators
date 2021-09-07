// Game states
//"WIN" - Player robot has defeated all enemy-robots 
//  *Fight all enemy-robots
//  *Defeat each enemy-robot
//"LOSE" - Player robot's health is zero or less

//player
var playerName = window.prompt("What is your robots name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//enemy
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

//do they want to fight.
var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

var fight = function(enemyName) {
    //repeat and execute as long as robot is alive
    while(enemyHealth > 0){
        if (promptFight.toUpperCase() == "FIGHT") {
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        } else if (promptFight.toUpperCase() === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                playerMoney = playerMoney-2;
            } else {
                fight();
            }

        } else {
            window.alert("You need to choose a valid option. Try again!");
        }
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    var pickedENemyName = enemyNames[i]
    enemyHealth = 50
    fight(pickedENemyName);
}


