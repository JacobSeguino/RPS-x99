// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue;

let playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue;

const MaxPoints = 99;

let playerOne = 0;
let playerTwo = 0;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if (player === "Player One"){
        console.log("Setting up player one");
        playerOneMoveOneType = moveOneType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player === "Player Two"){
        console.log("Setting up player two");
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveThreeValue = moveThreeValue;
    }else{
        console.log("Unknown Player!!");
    }

}

const getRoundWinner = (roundNumber) => {
   let playerOneType, playerOneValue, playerTwoType, playerTwoValue;
   switch (roundNumber) {
        case 1:
        playerOneType = playerOneMoveOneType;
        playerOneValue = playerOneMoveOneValue;
        playerTwoType = playerTwoMoveOneType;
        playerTwoValue = playerTwoMoveOneValue;
        break;
        case 2:
        playerOneType = playerOneMoveTwoType;
        playerOneValue = playerOneMoveTwoValue;
        playerTwoType = playerTwoMoveTwoType;
        playerTwoValue = playerTwoMoveTwoValue;
        break;
        case 3:
        playerOneType = playerOneMoveThreeType;
        playerOneValue = playerOneMoveThreeValue;
        playerTwoType = playerTwoMoveThreeType;
        playerTwoValue = playerTwoMoveThreeValue;
        break;
   }

   if (playerOneType === playerTwoType){
       if(playerOneValue === playerTwoValue){
        return 'Tie';
       }else if (playerOneValue > playerTwoValue){
           return 'Player One';
       }else{
           return 'Player Two';
       } 
   }
   if (playerOneType === 'rock'){
       if (playerTwoType === 'scissors'){
           return 'Player One';
       }else{
           return 'Player Two';
       }
   }
   if (playerOneType === 'scissors'){
       if (playerTwoType === 'paper'){
           return 'Player One';
       }else{
           return 'Player Two';
       }
   }
   if (playerOneType === 'paper'){
      if (playerTwoType === 'rock'){
          return 'Player One';
      }else{
          return 'Player Two';
      }
   }

}

const getGameWinner = () => {
    

}

const setComputerMoves = () => {

}