function filterFor<ArrayElementType>(
  array: ArrayElementType[],
  predicate: (element: ArrayElementType) => boolean,
): ArrayElementType[] {
  const resultArray = [];

  for (const element of array) {
    if (predicate(element)) {
      resultArray.push(element);
    }
  }

  return resultArray;
}

export { filterFor };
