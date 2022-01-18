const array = [1, 4, 9, 16];
function mapLoop(array, double) {
  // Code the function here.
  let resultArray=[];
  for (const element of array){
    resultArray.push(double(element));
  }
  return resultArray;
}
mapLoop(array,double);

function double(number) {
  return number * 2;
}
// Do not remove the following lines, it is for tests
module.exports = mapLoop;
