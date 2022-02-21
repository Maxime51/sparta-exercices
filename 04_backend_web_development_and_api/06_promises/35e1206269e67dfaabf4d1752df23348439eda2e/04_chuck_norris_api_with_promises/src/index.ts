import { getCategories, getJoke } from "./chuck";

getCategories().then((categories) => {
  console.log(categories);
});

getJoke("dev")
  .then((joke) => {
    console.log(joke);
  })
  .catch((error) => {
    console.error(error);
  });
