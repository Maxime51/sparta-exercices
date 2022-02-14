import request from "@fewlines-education/request";

function getChuckNorrisJoke(categoriesSelected: string) {
  // code the function here
  request(`https://api.chucknorris.io/jokes/random?category=${categoriesSelected}`, (error, html) => {
    if (error) {
      console.error(error, 404);
    } else {
      const json = JSON.parse(html);
      console.log(json);
    }
  });
}

// leave line below for tests to work properly
export { getChuckNorrisJoke };
