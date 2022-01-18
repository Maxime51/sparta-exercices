function letterCount(string,caracter) {
  // Code here
  let numberOfCaracter =0;
  for(let i = 0; i<string.length; i++){
    if(string[i] === caracter){
      numberOfCaracter++;
    }
  }
  return numberOfCaracter;
}
letterCount("bonjour","o");
// Do not remove the following line, it is for tests
module.exports = letterCount;
