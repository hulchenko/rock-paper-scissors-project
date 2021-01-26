let gameWeapon = ["Rock", "Paper", "Scissors"];
        const player = 0;
        const computer = 0;
        const playerScore = document.querySelector("#player-score");
        const computerScore = document.querySelector("#computer-score");
        const scoreBoard = document.querySelector(".score-board");
        const result = document.querySelector(".result");
        const rock = document.getElementById("rock");
        const paper = document.getElementById("paper");
        const scissors = document.getElementById("scissors");


    function game(userChoice){
        console.log(userChoice);
    }
   

    function main() {
        rock.addEventListener("click", function(){
            game("1");
        })
        paper.addEventListener("click", function(){
            game("2");
        })
        scissors.addEventListener("click", function(){
            game("3");
        })
        scoreBoard.addEventListener("click", function(){
            game("Score!");
        })
    }
    main();
    
//        let playerSelection;
//        let computerSelection = computerPlay();
//
//        userInput();
//
//        //first function:
//        function userInput () {            
//            let playerSelection = document.querySelector//(button);
//                 if ((playerSelection.toLowerCase()//=="rock")
//                 || (playerSelection.toLowerCase()//=="paper")
//                 || (playerSelection.toLowerCase()//=="scissors")) {
//            console.log(gameRound(playerSelection, //computerSelection))
//            } else {
//                        alert ("Wrong input!");
//                        userInput();
//            }
//        }
//
//        //second function:
//        function computerPlay() {
//            return gameWeapon [Math.floor(Math.random()//*gameWeapon.length)];
//        }
//        // to test: console.log(computerPlay());
//
//        //third function:
//        function gameRound(playerSelection, //computerSelection) {
//            playerSelection;
//            computerSelection = computerPlay().toLowerCase//();
//            
//                if (playerSelection === //computerSelection) {
//                return ("Draw!");
//                    }
//                    if ((playerSelection == "rock" && //computerSelection == "paper")
//                    ||  (playerSelection == "paper" && //computerSelection == "scissors") 
//                    ||  (playerSelection == "scissors" && //computerSelection == "rock")) {
//                    return ("Computer won!");
//                     }
//                        else {
//                         return ("You won!");
//                        }
//        }