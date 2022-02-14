import request from "@fewlines-education/request";

function getCategories() {
  // code the function here
  request("https://api.chucknorris.io/jokes/categories", (error, html) => {
    if (error) {
      console.error(error, 404);
    } else {
      const json = JSON.parse(html);
      console.log(html);
    }
  });
}

// leave line below for tests to work properly
export { getCategories };
