const readline = require("readline");
const versusIA = require("./versusIA");
const versusPlayerOneTurn = require("./versusPlayerOneTurn");
const versusPlayerThreeTurn = require("./versusPlayerThreeTurn");
const hardMode = require("./hardMode");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function startGameMessages (){
  console.log(" --------------------------------------------------------------------");
  console.log(" --------------------------------------------------------------------");
  console.log(" --                    BIENVENUE DANS LE JEU                       --");
  console.log(" --                          SHIFUMI                               --");
  console.log(" --                                                                --");
  console.log(" --               SELECTIONNEZ VOTRE ADVERSAIRE                    --");
  console.log(" --                                                                --");
  console.log(" --------------------------------------------------------------------");
  console.log(" --------------------------------------------------------------------");
  reader.question(" -- 1: VS IA, 2: PVP 1 TURN , 3: PVP 3 TURN , 4: HARD MODE IA --\n", rep => {
    console.log(rep);
    if(rep === "1"){
      return versusIA(reader);
    }else if(rep === "2"){
      return versusPlayerOneTurn(reader);
    }
    else if(rep === "3"){
      return versusPlayerThreeTurn(reader);
    }
    else if(rep === "4"){
      return hardMode(reader);
    }
  });
}

startGameMessages();

module.export = startGameMessages;
