// Here you can import functions from 'container' and 'drink'
import * as drinks from "./drinks.js";
import * as containers from "./container.js";
//import * as container from ".container.js";
let coffeeMachine = 0;
function fillWithLitersOfCoffee (container){
  coffeeMachine = containers.putLitersOfCoffee(container);
}

function expresso (){
  const expressoValid = containers.consumeLitersOfCoffee(0.08);
  if(expressoValid === true){
    drinks.expresso(coffeeMachine);
    return true;
  }else{
    return false;
  }
}
function longCoffee (){
  const longCoffeeValid = containers.consumeLitersOfCoffee(0.15);
  if(longCoffeeValid === true){
    drinks.longCoffee(coffeeMachine);
    return true;
  }else{
    return false;
  }
}
export {fillWithLitersOfCoffee,longCoffee,expresso};


