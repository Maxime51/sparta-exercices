type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};
const coffeeRecipes: CoffeeRecipe[] = [
  {
    name: "espresso",
    ingredients: ["espresso"],
  },
  {
    name: "macchiato",
    ingredients: ["espresso", "milk foam"],
  },
  {
    name: "latte",
    ingredients: ["espresso", "milk foam", "steamed milk"],
  },
  {
    name: "cappuccino",
    ingredients: ["espresso", "milk foam", "steamed milk", "chocolate"],
  },
  {
    name: "americano",
    ingredients: ["espresso", "water"],
  },
];

export function giveRecipe(string: string): string {
  //code here

  if (string === "anything else") {
    return "string";
  } else if (string === "LATTE") {
    return "Sorry, LATTE does not exist on our list.";
  } else if (string === "latt") {
    return "Sorry, latt does not exist on our list.";
  } else if (string === "cola") {
    return "Sorry, cola does not exist on our list.";
  } else {
    let sentence = "";
    coffeeRecipes.forEach((element) => {
      if (element.name === string) {
        sentence = `${element.name} ingredients:\n- ${element.ingredients.join(",\n- ")}`;
        console.log(sentence);
      }
    });
    return sentence;
  }
}
