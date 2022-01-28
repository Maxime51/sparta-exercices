
function arrayCrusher(firstArray, secondArray) {
  // code here
  const thirdArray = [...firstArray,...secondArray];
  return thirdArray;
}


function recursiveBouncer(list) {
  const [head, ...tail] = list;
  console.log(head);
  if (tail.length > 0) {
    recursiveBouncer(tail);
  }
}

module.exports = {
  arrayCrusher,
  recursiveBouncer,
};
