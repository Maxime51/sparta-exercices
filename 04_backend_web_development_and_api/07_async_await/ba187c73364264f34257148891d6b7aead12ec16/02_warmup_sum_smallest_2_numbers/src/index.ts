export function sumTwoSmallestNumbers(arrayNumber: number[]): number {
  const arraySort = arrayNumber.sort(function (a, b) {
    return a - b;
  });
  return arraySort[0] + arraySort[1];
}
