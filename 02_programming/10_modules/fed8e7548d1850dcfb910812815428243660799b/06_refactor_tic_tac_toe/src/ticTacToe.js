
const {renderBoard,reader} = require("./display.js");
const {isNotNull,state,updateState} = require("./gameState.js");
const {WINNING_COORDINATES,flattenArray} = require("./utilities.js");

function playTurn() {
  console.log(renderBoard(state));
  reader.question(`${currentPlayer}: What is your move? e.g: a1\n`, handleInput);
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

function handleInput(input) {
  const coordinate = getCoordinate(input);
  if (coordinate) {
    updateState(coordinate);
    if (hasWinner()) {
      console.log(renderBoard(state));
      console.log(`Congratulations ${currentPlayer}, you won! ＼(＾O＾)／`);
      reader.close();
    } else if (gameIsFinished(state)) {
      console.log(renderBoard(state));
      console.log("Looks like it's a tie. Thanks for playing! ¯\\_(ツ)_/¯");
      reader.close();
    } else {
      nextPlayer();
      playTurn();
    }
  } else {
    console.log("This is not a valid move");
    playTurn();
  }
}

let currentPlayer;
function gameIsFinished(state) {
  const allValues = flattenArray(Object.values(state));

  return allValues.every(isNotNull);
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
function start() {
  currentPlayer = ["X", "O"][Math.round(Math.random())];

  playTurn();
}
module.exports = {handleInput,hasWinner,start,nextPlayer,gameIsFinished};

