function slice(ingredients) {
  // Code here
  return ingredients.map(ingredient => `sliced ${ingredient}`);
}

function makeSandwich(ingredients) {
  // Code here
  function reduce (ancienChain,currentChain){
    return `${ancienChain},${currentChain.replace("sliced","")}`;
  }
  //ingredients.forEach(element => console.log(element.includes("sliced")));
  const sliced = ingredients.every(ingredient => ingredient.includes("sliced"));
  if(sliced === true){
    const chaineOfIngredients = ingredients.reduce(reduce,"");
    return `A tasty sandwich made of${chaineOfIngredients.slice(1)}`;
  }else{
    return "I can't make a sandwich with non-sliced ingredients";
  }

}

// Do not remove the following line, it is for tests
module.exports = {
  slice,
  makeSandwich,
};
