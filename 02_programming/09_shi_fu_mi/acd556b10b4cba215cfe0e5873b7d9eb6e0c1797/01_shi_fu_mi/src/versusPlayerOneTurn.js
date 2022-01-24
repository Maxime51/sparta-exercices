const startGameMessage = require("./index");
function versusPlayerOneTurn(reader){

  //Declarate a arrayOfChoice who contain the object rock, paper, scissors
  const arrayOfChoice = [{
  // Rock
    key : 0,
    name : "rock",
    value : "\ud83e\udd1c",
    heighterOf : "scissors",
    lowerOf : "paper",
    egalOf : "rock"
  },{
  //Paper
    key : 1,
    name : "paper",
    value : "\ud83e\udd1a",
    heighterOf : "rock",
    lowerOf : "scissors",
    egalOf : "paper"
  },{
  //Scissors
    key : 2,
    name : "scissors",
    value : "\ud83e\udd1e",
    heighterOf : "paper",
    lowerOf : "rock",
    egalOf : "scissors"
  }];

  //Declarate function log who print pictures of responses
  function log (array,userRep,userRep2) {
    console.log("First Player move \n");
    console.log(array[userRep-1].value);
    console.log("Second Player move \n");
    console.log(array[userRep2-1].value);
    console.log("\n\n");
  }


  //Declarate function Question
  function questionPlayer1 (){
    reader.question("(Player 1) Merci de choisir : [1 : Rock, 2 : Paper, 3 : Scissors] \n >", questionPlayer2);
  }
  //Declarate function Question
  function questionPlayer2 (userRep){
    reader.question("(Player 2) Merci de choisir : [1 : Rock, 2 : Paper, 3 : Scissors] \n >", userRep2 => {
      return response(userRep,userRep2);
    });
  }

  //Declarate function Compare who return console log win or not
  function compare (array,userRep,userRep2){
    if ((array[userRep-1].heighterOf === array[userRep2-1].name)) {
      console.log("The Player 1 Won !!");

    }else if ((array[userRep-1].lowerOf === array[userRep2-1].name)) {
      console.log("The Player 2 Won !!");

    }
    else if ((array[userRep-1].egalOf === array[userRep2-1].name)) {
      console.log("Match Null !!");
    }
  }

  //Declarate function Response
  function response(keyboard,keyboard2) {
    if ((isNaN(keyboard) === true) || keyboard > 3) {
      console.log("Joueur 1, merci d'ecrire 1 ou 2 ou 3 \n");
      questionPlayer1();

    }else if ((isNaN(keyboard2) === true) || keyboard2 > 3) {
      console.log("Joueur 2, merci d'ecrire 1 ou 2 ou 3 \n");
      questionPlayer2(keyboard);
    }else{
      log(arrayOfChoice,keyboard,keyboard2);
      compare(arrayOfChoice,keyboard,keyboard2);

      console.log(" ----------------------------------");
      console.log(" -----------END OF GAME------------");
      console.log(" ----------------------------------");
      reader.close();
    }
  }

  function reStartGame (){

    reader.question("Play again ? (Y,n) \n >", again => {
      if (again === "Y" || again === "y") {
        startGameMessage();

      }else if (again === "N" || again === "n") {
        reader.close();
      }
      else{
        console.log("(Y,n)");
        reStartGame();
      }

    });
  }
  function startGameMessage (){
    console.log(" --------------------------------------------------------------------");
    console.log(" --                    PLAYER VS PLAYER 1 TURN                      --");
    console.log(" --------------------------------------------------------------------");

  }
  startGameMessage();
  questionPlayer1();
}
module.exports = versusPlayerOneTurn;
