function oddEven(number) {
  // Code the function here.
  if(Number.isInteger(number) && number > 0){
    console.log("int et sup 0");
    if(number % 2 === 0){
      return  `${number} is an even number.`;
    }else{
      return `${number} is an odd number.`;
    }
  }else{
    if(number === 0){
      return  `${number} is an even number.`;
    }else{
      console.log(`${number} is not a number.`);
      return `${number} is not a number.`;
    }
    
  }
  

}
oddEven(0);
// Do not remove last lines, it is for tests
module.exports = oddEven;
