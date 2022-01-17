function arrayCrusher(firstArray, secondArray) {
  // code here
  const thirdArray = [...firstArray,...secondArray];
  return thirdArray;
}

function recursiveBouncer(list) {
  // code here
  if(list.length > 0){
    const [number,...other] = list;
    console.log(number);
    return recursiveBouncer(other);
  }
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
