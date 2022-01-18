function consecutiveCount(string,caractere) {
  // Code here
  let caractereFound ="";
  let y=0;
  let memoring = 0;
  let listChain = "";
  let listChainSave = "";
  for(let i = 0; i <= string.length; i++){
    if(string[i] === caractere){
      y++;
      if(y > memoring){
        memoring = y;
        listChainSave = listChain;
      }
      listChain = `${listChain}${caractere}`;
    }else{
      listChain="";
      y=0;
    }
  }
  if(memoring === 0){
    return (0);
  }else{
    return (memoring);
  }


}
consecutiveCount("utuutuuuuutuu","u");
// Do not remove the following line, it is for tests
module.exports = consecutiveCount;
