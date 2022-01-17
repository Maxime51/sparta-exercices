function canTakeArtPieces(pieces) {

  //pieces.forEach(element => element.type === "painting");
  return pieces.every(element => element.type === "painting");

}

// Do not remove the following line, it is for tests
module.exports = canTakeArtPieces;
