
const {renderBoard} = require("./display.js");
const {state,updateState} = require("./gameState.js");
const {WINNING_COORDINATES,flattenArray,isNotNull} = require("./utilities.js");
let readers = "";
let currentPlayer;

function playTurn(readers) {
  console.log(renderBoard(state));
  readers.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
}


function getCoordinate(input) {
  const letter = input[0];
  const digit = input[1] - 1;

  if (state[letter] && state[letter][digit] === null) {
    return { letter: letter, digit: digit };
  } else {
    return null;
  }
}
function gameIsFinished(state) {

  const allValues = flattenArray(Object.values(state));
  console.log(allValues.every(isNotNull));
  return allValues.every(isNotNull);
}
function handleInput(input) {

  const coordinate = getCoordinate(input);
  if (coordinate) {
    //console.log(coordinate,currentPlayer);
    updateState(coordinate,currentPlayer);
    console.log("ok");
    if (hasWinner()) {
      console.log("coucou");
      console.log(renderBoard(state));
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      readers.close();
    } else if (gameIsFinished(state)) {
      console.log("ok");
      console.log(renderBoard(state));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      readers.close();
    } else {
      console.log("plop");
      nextPlayer();
      playTurn(readers);
    }
  } else {
    console.log("This is not a valid move");
    playTurn(readers);
  }
}




function nextPlayer() {
  if (currentPlayer === "X") {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
}

function hasWinner() {
  const isWinningLine = (line) => {
    const pattern = line.map((coordinate) => state[coordinate.letter][coordinate.digit]).join("");

    return pattern === "XXX" || pattern === "OOO";
  };

  return WINNING_COORDINATES.some(isWinningLine);
}
function start(reader) {
  currentPlayer = ["X", "O"][Math.round(Math.random())];
  readers = reader;
  playTurn(readers);
}
module.exports = {handleInput,hasWinner,start,nextPlayer,gameIsFinished};

