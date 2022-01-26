import {addition} from "./operators/addition.js";
import {soustraction} from "./operators/soustraction.js";
import {division} from "./operators/division.js";
import {multiplication} from "./operators/multiplication.js";

function calculator (reader){


  //function first question
  function firstQuestion(){
    reader.question("Enter the first number \n >",number1 => {
      if(isNaN(number1)){
        console.log("Merci de renseigner un nombre");
        firstQuestion();
      }else{
        return questionOperators(number1);
      }
    });
  }
  firstQuestion();

  //function operator question
  function questionOperators(number1){
    reader.question("Choose an operation: [ + - * / ] \n >",operator => {
      if(operator !== "+" && operator !== "-" && operator !== "*" && operator !== "/"){
        console.log("Merci de renseigner + , - , * , /  \n");
        questionOperators(number1);
      }else{
        return thirdQuestion(number1,operator);
      }
    });
  }
  //function second question
  function thirdQuestion(number1,operator){
    reader.question("Enter the second number \n >",number2 => {

      if(isNaN(number2)){
        console.log("Merci de renseigner un nombre");
        thirdQuestion(number1,operator);
      }else{
        return traitement(number1,operator,number2);
      }
    });
  }
  //function traitement qui appel les operations
  function traitement(number1,operator,number2){
    let result;
    console.log(number1,operator,number2);
    switch (operator) {
      case "+":
        result = addition(number1,number2);
        break;
      case "-":
        result = soustraction(number1,number2);
        break;
      case "*":
        result = multiplication(number1,number2);
        break;
      case "/":
        result = division(number1,number2);
        break;
      default:
    }
    console.log(`${number1} + ${number2} = ${result} \n`);
    reader.question("Clear calculette Y/n \n >",clearCalculator);
  }

  function clearCalculator(response){
    if(response === "y" || response === "Y"){
      calculator(reader);
    }else if (response === "n" || response === "N"){
      reader.close();
    }else{
      reader.close();
    }
  }

}


export {calculator};
