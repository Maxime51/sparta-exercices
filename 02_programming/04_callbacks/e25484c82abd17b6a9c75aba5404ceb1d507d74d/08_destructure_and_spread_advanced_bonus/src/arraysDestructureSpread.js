function arrayCrusher(firstArray, secondArray) {
  // code here
  const thirdArray = [...firstArray,...secondArray];
  return thirdArray;
}

function recursiveBouncer(list) {
  // code here
  if((list.length) === 0){
    return;
  }else{
    let [first] = list;
    list.shift();
    console.log(first);
    return recursiveBouncer(list);
  }
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
