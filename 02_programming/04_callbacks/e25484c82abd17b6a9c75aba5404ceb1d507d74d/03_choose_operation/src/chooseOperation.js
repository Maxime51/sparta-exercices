function addition(number1, number2) {
  // Code here
  return number1 + number2;
}

function substraction(number1, number2) {
  // Code here
  return number1 - number2;
}

function multiplication(number1, number2) {
  // Code here
  return number1 * number2;
}

function division(number1, number2) {
  // Code here
  return number1 / number2;
}

function chooseOperation(number1, number2,funct) {
  // Code here
  if(Number.isInteger(number1) && Number.isInteger(number2) && typeof(funct) === "function" ){
    return funct(number1,number2);
  }else{
    throw new Error ("");
  }
}

// Leave the line below for tests to work
module.exports = { chooseOperation, addition, substraction, multiplication, division };
