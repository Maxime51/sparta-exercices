function greeter(people) {
  // Code the function here.
  for (let i=0 ;i< people.length ;i++) {
    console.log(`Hello ${people[i]}!`);
  }
}

// Do not remove the following lines, it is for tests
module.exports = greeter;
