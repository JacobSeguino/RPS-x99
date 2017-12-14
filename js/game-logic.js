// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue;

let playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue;

const MaxPoints = 99;

let playerOne = 0;
let playerTwo = 0;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    
    validType(moveOneType);
    validType(moveOneType);
    validType(moveOneType);

    checkValueOf(moveOneValue);
    checkValueOf(moveTwoValue);
    checkValueOf(moveThreeValue);

    if(moveOneValue === null || moveTwoValue === null || moveThreeValue === null){
        console.log("A value is missing from either Value One:"+moveOneValue+", Value Two:"+moveTwoValue+" or Value Three:"+moveThreeValue);
        return null;
    }
    if (moveOneValue + moveTwoValue + moveThreeValue > 99){
        console.log("compaind value of " +player+" is more then 99");
        return null;
    }
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
        return null;
    }

}

const getRoundWinner = (roundNumber) => {
    if (playerOneMoveOneType === null || playerOneMoveOneValue === null || playerOneMoveTwoType === null || playerOneMoveTwoValue === null ||
         playerOneMoveThreeType === null || playerOneMoveThreeValue === null || playerTwoMoveOneType === null || playerTwoMoveOneValue === null ||
          playerTwoMoveTwoType === null || playerTwoMoveTwoValue === null || playerTwoMoveThreeType === null || playerTwoMoveThreeValue === null){
        return null;
    }
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
        default:
         return null;
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

const checkValueOf = (Value) => {
    if(value > 99 || value <= 0){
        console.log("value one is set at " +value+ " which is out side the bounds");
        return null
    }
}
const validType = (type) => {
    if(type !== 'rock' || type !== 'paper' || type !== 'scissors'){
        console.log("Choice one of "+type+" does not match the choices 'rock', 'paper', or 'scissors");
        return null;
    }
}