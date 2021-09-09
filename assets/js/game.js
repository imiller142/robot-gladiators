//Wrap the game logic in startGame() function
//call and endGame()
//  alerts the players total stats
//  ask player if they want to play again
//  if yes call startGame()

//after the player skips or defeats and enemy (and robots left)
//  ask player if they want to "shop"
//  if yes call shop()
//  in the shop() ask the player if they want "refill" health, "upgrade" attack. or "leave" the shop


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

//function to start new game
var startGame = function() {

    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators! Round " + ( i + 1 ) );
    
            var pickedEnemyName = enemyNames[i]
            enemyHealth = 50
    
            fight(pickedEnemyName);
                //shop
                

                if (playerHealth > 0 && i < enemyNames.length - 1) {

                    var storeConfirm = window.confirm("The fight is over! Would you like to visit the shop before your next fight?")
                    if (storeConfirm) {
                        shop();
                    }
                }

        }   else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    
    //play again
    startGame();

    endGame();
}

//End game

var endGame = function() {
    //if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    } else {
    window.alert("The game has now ended. Let's see how you did!")
    }

    var playAgainConfirm = window.confirm("Would you like again?");

    if (playAgainConfirm) {
        //restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}


var fight = function(enemyName) {
    //repeat and execute as long as robot is alive
    while(playerHealth > 0 && enemyHealth > 0){

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player picks "skip" confirm and then stop the loop
        if (promptFight === "skip" || promptFight === "SKIP") {
            // confirm player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
            // if yes (true), leave fight
            if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
            }
        }

        
            enemyHealth = enemyHealth - playerAttack;
            console.log(
                playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
            );
            
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                break;
            } else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            playerHealth = playerHealth - enemyAttack;
            console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
            );

            if (playerHealth <= 0) {
                window.alert(playerName + " has died!");
                break;
            } else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    } 
    
var shop = function() {
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health UPGRADE your attack, or LEAVE the shop? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    
};

startGame();

