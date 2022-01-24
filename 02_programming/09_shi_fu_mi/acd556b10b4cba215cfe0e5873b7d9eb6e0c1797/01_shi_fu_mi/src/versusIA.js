const startGameMessages = require("./index.js");
function versusIA(reader){

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
  let resulMatch = [0,0];
  // Generate a random number 0, 1, 2
  function generateRandomNumber (){

    return Math.floor(Math.random() * 3);

  }

  //Declarate function log who print pictures of responses
  function log (array,userRep,randomNumber) {
    console.log("First Player move \n");
    console.log(array[userRep-1].value);
    console.log("Second Player move \n");
    console.log(array[randomNumber].value);
    console.log("\n\n");

  }


  //Declarate function Question
  function question (){

    reader.question("Merci de choisir : [1 : Rock, 2 : Paper, 3 : Scissors] \n >", response);

  }

  //Declarate function Compare who return console log win or not
  function compare (array,userRep,randomNumber){
    //console.log(`user superior ${array[userRep-1].heighterOf} || name IA : ${array[randomNumber].name}`);
    if ((array[userRep-1].heighterOf === array[randomNumber].name)) {

      resulMatch[0] = resulMatch[0] + 1;
      console.log("The Player Won !!");

    }else if ((array[userRep-1].lowerOf === array[randomNumber].name)) {

      console.log("The IA Won !!");
      resulMatch[1] = resulMatch[1] + 1;

    }
    else if ((array[userRep-1].egalOf === array[randomNumber].name)) {

      console.log("Match Null !!");

    }

    console.log(" ----------------------------------");
    console.log(` --  PLAYER : ${resulMatch[0]} || IA :  ${resulMatch[1]}         --`);
    console.log(" ----------------------------------");

  }

  //Declarate function Response
  function response(keyboard) {
    if ((isNaN(keyboard) === true) || keyboard > 3) {

      console.log("Merci d'ecrire 1 ou 2 ou 3");
      question();

    }else{

      const number = generateRandomNumber();
      log(arrayOfChoice,keyboard,number);
      compare(arrayOfChoice,keyboard,number);

      if (resulMatch[0] === 3) {

        console.log(" ----------------------------------");
        console.log(" -----------END OF GAME------------");
        console.log(" --------THE PLAYER HAS WON--------");
        console.log(" ----------------------------------");
        //reStartGame();
        reader.close();
      }else if (resulMatch[1] === 3) {

        console.log(" ----------------------------------");
        console.log(" -----------END OF GAME------------");
        console.log(" --------THE IA HAS WON--------");
        console.log(" ----------------------------------");
        //reStartGame();
        reader.close();
      }else{
        question();
      }


    }

  }

  /*function reStartGame (){

    reader.question("Play again ? (Y,n) \n >", again => {
      if (again === "Y" || again === "y") {
        return startGameMessages();
      }else if (again === "N" || again === "n") {
        reader.close();
      }
      else{
        console.log("(Y,n)");
        reStartGame();
      }

    });
  }*/
  console.log(" --------------------------------------------------------------------");
  console.log(" --                    PLAYER VS IA 3 TURN                         --");
  console.log(" --------------------------------------------------------------------");
  question();
}
module.exports = versusIA;
