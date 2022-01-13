// Code here
const stealthyFuelLevelCheck = (number) => {
  if(number >= 20){
    return "Fuel level: green";
  }else if (number > 10 && number < 20){
    return "Fuel level: yellow";
  }else{
    return "Fuel level: red";
  }
};
const stealthyCargoHoldCheck = (cargo) => {
  const fullSpaceCargo = 4;
  console.log(cargo.length);
  if(cargo.length === fullSpaceCargo){
    return "Full";
  }else if(cargo.length < fullSpaceCargo){
    return `Spaces available: ${fullSpaceCargo-cargo.length}`;
  }else{
    return `Over capacity by ${cargo.length - fullSpaceCargo} items.`;
  }
};
// Do not remove last lines, it is for tests

module.exports = { stealthyFuelLevelCheck, stealthyCargoHoldCheck };
