// There should be no import in this file. Only exports!
let quantityOfCoffee = 0;
function putLitersOfCoffee(number){
  quantityOfCoffee += number;
  return quantityOfCoffee;
}

function consumeLitersOfCoffee(number){
  if (quantityOfCoffee - number >= 0) {
    quantityOfCoffee -= number;
    return true;
  } else {
    return false;
  }
}
export {putLitersOfCoffee,consumeLitersOfCoffee};
