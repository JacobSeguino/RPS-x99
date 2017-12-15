// All code should be written in this file.
let playerOneMoveOneType, playerOneMoveOneValue, playerOneMoveTwoType, playerOneMoveTwoValue, playerOneMoveThreeType, playerOneMoveThreeValue;

let playerTwoMoveOneType, playerTwoMoveOneValue, playerTwoMoveTwoType, playerTwoMoveTwoValue, playerTwoMoveThreeType, playerTwoMoveThreeValue;

const maxPoints = 99;

let playerOne = 0;
let playerTwo = 0;

const setPlayerMoves = (player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) => {
    if(!validType(moveOneType)){
        return null;
    }
    if(!validType(moveTwoType)){
        return null;
    }
    if(!validType(moveThreeType)){
        return null;
    }
    if(checkValueOf(moveOneValue)){
        return null;
    }
    if(checkValueOf(moveTwoValue)){
        return null;
    }
    if(checkValueOf(moveThreeValue)){
        return null;
    }
    if(moveOneValue === null || moveTwoValue === null || moveThreeValue === null){
        console.log("A value is missing from either Value One:"+moveOneValue+", Value Two:"+moveTwoValue+" or Value Three:"+moveThreeValue);
        return null;
    }
    if (moveOneValue + moveTwoValue + moveThreeValue > 99){
        console.log("the combined value of " +player+" is more then 99");
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
    // if (validType(playerOneMoveOneType) || !checkValueOf(playerOneMoveOneValue) || validType(playerOneMoveTwoType) || !checkValueOf(playerOneMoveTwoValue) ||
    // validType(playerOneMoveThreeType) || !checkValueOf(playerOneMoveThreeValue) || validType(playerTwoMoveOneType)  || !checkValueOf(playerTwoMoveOneValue) ||
    // validType(playerTwoMoveTwoType) || !checkValueOf(playerTwoMoveTwoValue) || validType(playerTwoMoveThreeType)  || !checkValueOf(playerTwoMoveThreeValue)){
    //     return null;
    // }
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
        playerOne++;
        return 'Player One';
       }else{
        playerTwo++;
        return 'Player Two';
       } 
   }
   if (playerOneType === 'rock'){
       if (playerTwoType === 'scissors'){
        playerOne++;
        return 'Player One';
       }else{
        playerTwo++;
        return 'Player Two';
       }
   }
   if (playerOneType === 'scissors'){
       if (playerTwoType === 'paper'){
        playerOne++;
        return 'Player One';
       }else{
        playerTwo++;
        return 'Player Two';
       }
   }
   if (playerOneType === 'paper'){
      if (playerTwoType === 'rock'){
        playerOne++;
        return 'Player One';
      }else{
        playerTwo++;
        return 'Player Two';
      }
   }

}

const getGameWinner = () => {
    playerOne = 0;
    playerTwo = 0;
    getRoundWinner(1);
    getRoundWinner(2);
    getRoundWinner(3);
    if(playerOne > playerTwo){
        console.log("Player One wins");
        return 'Player One';
    }else if(playerOne < playerTwo){
        console.log("Player Two wins");
        return 'Player Two';
    }else{
        console.log("Tie");
        return 'Tie';
    }
}

const setComputerMoves = () => {
    playerTwoMoveOneType = computerType();
    playerTwoMoveTwoType = computerType();
    playerTwoMoveThreeType = computerType();

    computerValueOne = Math.floor(Math.random() * (maxPoints-2));
    computerValueTwo = Math.floor(Math.random() * (maxPoints - computerValueOne));
    computerValueThree = (maxPoints - (computerValueOne + computerValueTwo));

    if (computerValueOne + computerValueTwo + computerValueThree > 99){
        console.log("The combined value of computer's choices is more then 99");
        return null;
    }

    playerTwoMoveOneValue = computerValueOne;
    console.log("Computer picked the value one to be: "+playerTwoMoveOneValue);
    playerTwoMoveTwoValue = computerValueTwo;
    console.log("Computer picked the value two to be: "+playerTwoMoveTwoValue);
    playerTwoMoveThreeValue = computerValueThree;
    console.log("Computer picked the value three to be: "+playerTwoMoveThreeValue);
}

const checkValueOf = (value) => {
    if(value > 99 || value <= 0 || !Number.isInteger(value)){
        console.log("value one is set at " +value+ " which is out side the bounds");
        return true
    }
    return false
}
const validType = (type) => {
    if(type === 'rock' || type === 'paper' || type === 'scissors'){
        return true;
    }
    console.log("Choice of "+type+" does not match the choices 'rock', 'paper', or 'scissors");
    return false;
}

const computerType = () => {
    type = Math.floor(Math.random() * 3);
//    console.log("Random number was: "+type);
    switch (type) {
        case 0:
        console.log("computer picked rock");
        return 'rock';
        break;
        case 1:
        console.log("computer picked scissors");
        return 'scissors';
        break;
        case 2:
        console.log("computer picked paper");
        return 'paper';
        break;
        default:
        console.log("nothing was picked");
        break;
    }
}