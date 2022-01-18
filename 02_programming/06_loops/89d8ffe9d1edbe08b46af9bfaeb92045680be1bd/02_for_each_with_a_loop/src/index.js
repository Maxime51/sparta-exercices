function forEachLoop(array,funct) {
  // Code the function here.
  for (const test of array){
    funct(test);
  }
}

// Do not remove the following lines, it is for tests
module.exports = forEachLoop;
