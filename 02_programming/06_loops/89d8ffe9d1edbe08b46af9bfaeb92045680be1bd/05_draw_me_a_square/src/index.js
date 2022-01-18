function square(sqar) {
  // Code here
  for(let i = 0; i<sqar; i++){
    let ligne ="";
    for (let y = 0; y<sqar; y++){
      ligne = `${ligne}*`;
    }
    console.log(ligne);
  }
}
square(5);
// Do not remove the following line, it is for tests
module.exports = square;
