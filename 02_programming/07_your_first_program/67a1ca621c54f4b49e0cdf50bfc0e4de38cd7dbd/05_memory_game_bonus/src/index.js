const { ReadStream } = require("fs");
const readline = require("readline");
const clear = require("./clear");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


const symbols = {

  tree: "🌳",
  ghost: "👻",
  tooth: "🦷",
  fish: "🐟",
  imp: "😈",
  robot: "🤖",
  invader: "👾",
  apple: "🍏",
  car: "🚗",
  cold: "🥶",
  peach: "🍑",
  boom: "💥",
  bomb: "💣",
  boot: "👢",
  pumkin: "🎃",
  fox: "🦊",
  rabbit: "🐇",
  kiss: "💋",
  salad: "🥗",
  clown: "🤡",
};

const ObjectArrayGameStart = createBoard(symbols);
const arrayGameStartShuffle = shuffle(ObjectArrayGameStart);

questionStart();

function createBoard (symbols){
  const array = [{
    key: 1,
    value: symbols.imp,
    find : true,
    valueHidden : "?",
    userFind : false
  },
  {
    key: 2,
    value: symbols.tree,
    find : true,
    valueHidden : "?",
    userFind : false
  },
  {
    key: 3,
    value: symbols.imp,
    find : true,
    valueHidden : "?",
    userFind : false
  },{
    key: 4,
    value: symbols.tree,
    find : true,
    valueHidden : "?",
    userFind : false
  }];
  return array;
}

function shuffle (array){
  return array.sort(function compare(a, b) {
    if (a.key < b.key)
      return -1;
    if (a.key > b.key )
      return 1;
    return 0;
  });
}


//print a Array
function printArray (array){
  let newArray = array.map(function(element) {
    if(element.find === true){
      return `${element.key}:${element.value}`;
    }else{
      return`${element.key}:${element.value.clear}`;
    }
  });
  return newArray;
}
function printArrayClear (array){
  let newArray = array.map(function(element) {
    element.find = false;
    return`${element.key}:${element.valueHidden}`;
  });
  return newArray;
}

function printArrayOneResponse (array,number){
  array[number-1].find = true;
  let newArray = array.map(function(element) {
    if(element.find === true){
      return `${element.key}:${element.value}`;
    }else{
      return`${element.key}:${element.valueHidden}`;
    }
  });
  return newArray;
}
function win (array){
  const winValue = array.filter(element => (element.userFind === false));
  if(winValue.length === 0){
    console.log("You have win! Congratulations!");
    reader.close();
  }else{
    return recurenceQuestion();
  }
}
function response (keyboard){
  if(keyboard === ""){
    console.log("\n");
    recurenceQuestionClear();
  }
  else if(isNaN(keyboard) === false){
    console.log("\n");
    console.log(printArrayOneResponse(ObjectArrayGameStart,keyboard));
    compare(ObjectArrayGameStart);

  }
  else{
    questionStart();

  }
}
function compare (array){
  const isOk = array.filter(element => (element.find === true) && (element.userFind === false));
  if(isOk.length === 1){
    return recurenceQuestion();
  }
  else{
    const identiqueValues = isOk.reduce(function (previousValue, currentValue) {
      if(previousValue.value ===currentValue.value){
        previousValue.userFind = true;
        currentValue.userFind = true;
        return true;
      }else{
        return false;
      }

    });
    if(identiqueValues === false){
      console.log("Wrong!");
      console.log(printArrayClear(ObjectArrayGameStart));
      recurenceQuestion();
    }else{
      win(ObjectArrayGameStart);
    }

  }
}
function recurenceQuestion (){
  reader.question("choose a card \n",response);
}
function recurenceQuestionClear (){
  console.log(printArrayClear(ObjectArrayGameStart));
  reader.question("choose a card \n",response);
}
function questionStart (){
  console.log("Welcome to the Memory Game!");
  console.log(printArray(ObjectArrayGameStart));
  reader.question("Press [Enter] to start!",response);
}
