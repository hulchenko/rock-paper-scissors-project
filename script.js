let gameWeapon = ["Rock", "Paper", "Scissors"];
        let playerSelection;
        let computerSelection = computerPlay();

        userInput();

        //first function:
        function userInput () {            
            let playerSelection = window.prompt("Make your choice: Rock, Paper or Scissors?", "");
                 if ((playerSelection.toLowerCase()=="rock")
                 || (playerSelection.toLowerCase()=="paper")
                 || (playerSelection.toLowerCase()=="scissors")) {
            console.log(gameRound(playerSelection, computerSelection))
            } else {
                        alert ("Wrong input!");
                        userInput();
            }
        }

        //second function:
        function computerPlay() {
            return gameWeapon [Math.floor(Math.random()*gameWeapon.length)];
        }
        // to test: console.log(computerPlay());

        //third function:
        function gameRound(playerSelection, computerSelection) {
            playerSelection;
            computerSelection = computerPlay().toLowerCase();
            
                if (playerSelection === computerSelection) {
                return ("Draw!");
                    }
                    if ((playerSelection == "rock" && computerSelection == "paper")
                    ||  (playerSelection == "paper" && computerSelection == "scissors") 
                    ||  (playerSelection == "scissors" && computerSelection == "rock")) {
                    return ("Computer won!");
                     }
                        else {
                         return ("You won!");
                        }
        }

        //let fiveRounds = [
        //    console.log(gameRound(playerSelection, computerSelection)),
        //    console.log(gameRound(playerSelection, computerSelection)),
        //    console.log(gameRound(playerSelection, computerSelection)),
        //    console.log(gameRound(playerSelection, computerSelection)),
        //    console.log(gameRound(playerSelection, computerSelection)),
        //]
       
        //fourth function:
        //function game() {
        //    return fiveRounds;
        //}