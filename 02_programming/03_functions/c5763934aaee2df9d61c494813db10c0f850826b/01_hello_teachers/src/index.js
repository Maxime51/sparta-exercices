function sayHelloToTeachers(teachers) {
  // Code the function here.
  console.log(`Hello ${teachers} !`);
}
// Do not remove last lines, it is for tests
const spartaTeachers = ["Thomas", "Fenn", "Florian", "Martin", "Louis"];
sayHelloToTeachers(spartaTeachers[0]);
sayHelloToTeachers(spartaTeachers[1]);
sayHelloToTeachers(spartaTeachers[2]);
sayHelloToTeachers(spartaTeachers[3]);
sayHelloToTeachers(spartaTeachers[4]);
sayHelloToTeachers(spartaTeachers[5]);
module.exports = sayHelloToTeachers;
