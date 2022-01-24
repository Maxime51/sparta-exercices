const arraysIntoObjects = (keysArray, valuesArray) => {
  /// Code your function here
  let object = {};
  keysArray.forEach((key, value) => {object[key] = valuesArray[value];});
  return object;
};
// Don't change this line for tests to run properly
export default arraysIntoObjects;
