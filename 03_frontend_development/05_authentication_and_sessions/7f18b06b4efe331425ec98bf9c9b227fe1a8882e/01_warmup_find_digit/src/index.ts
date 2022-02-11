// Code here
function findDigit(array: number[], digit: number): number[] {
  const arrayFilter = array.filter((element) => {
    if (element.toString().includes(digit.toString())) {
      console.log(element);
      return element;
    } else {
      null;
    }
  });
  console.log(array);
  console.log(arrayFilter);
  return arrayFilter;
}
export { findDigit };
