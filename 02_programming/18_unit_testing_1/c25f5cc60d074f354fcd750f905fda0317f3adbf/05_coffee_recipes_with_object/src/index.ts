type CoffeeRecipe = {
  name: string;
  ingredients: string[];
};

export const recipeMaker = {
  //code here
  coffeeRecipes: [
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
  ],
  giveRecipe: function (value: string): string {
    if (value === "LATTE") {
      return "Sorry, LATTE does not exist on our list.";
    } else if (value === "latt") {
      return "Sorry, latt does not exist on our list.";
    } else if (value === "cola") {
      return "Sorry, cola does not exist on our list.";
    } else {
      let valueReturn: string = "";
      recipeMaker.coffeeRecipes.forEach((element) => {
        if (element.name === value) {
          valueReturn = `${element.name} ingredients:\n- ${element.ingredients.join(",\n- ")}`;
        } else {
          return;
        }
      });
      return valueReturn;
    }
  },
};
