import fetch from "node-fetch";

function getCategories(): Promise<string[]> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    const arrayCategory = fetch("https://api.chucknorris.io/jokes/categories").then((response) => response.json());
    if (arrayCategory) {
      resolve(arrayCategory);
    } else {
      reject("error");
    }
  });
}

function getJoke(category: string): Promise<string> {
  // Your code goes here
  return new Promise((resolve, reject) => {
    const joke = fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
      .then((response) => response.json())
      .then((result) => result.value);
    if (joke) {
      resolve(joke);
    } else {
      reject("error");
    }
  });
}

// Leave the line below for tests to work properly
export { getCategories, getJoke };
