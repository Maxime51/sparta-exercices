// Code here
function sortingMachine(array: number[], boolean: boolean): number[] {
  if (boolean === true) {
    return array.sort(function (a, b) {
      return a - b;
    });
  } else {
    return array.sort(function (a, b) {
      return b - a;
    });
  }
}
export { sortingMachine };
