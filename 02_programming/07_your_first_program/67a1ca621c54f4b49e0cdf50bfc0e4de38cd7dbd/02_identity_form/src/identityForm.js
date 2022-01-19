const identityForm = (reader) => {
  // Code here
  reader.question("first name",(responseFirstname) => {
    reader.question("last name",(responseLastname) => {
      reader.question("What is your age ? ", (responseAge) => {
        console.log(`Your name is ${responseFirstname} ${responseLastname} and you are ${responseAge}.`);
        reader.close();
      });
    });
  });
};

// Leave line below for tests to work
module.exports = identityForm;
