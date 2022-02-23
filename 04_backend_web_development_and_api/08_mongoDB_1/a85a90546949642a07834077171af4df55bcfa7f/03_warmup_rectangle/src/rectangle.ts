export function rectangle(width: number, height: number): string {
  let stringReturn = "";
  for (let i = 0; i < height; i++) {
    for (let y = 0; y < width; y++) {
      if (y === width - 1) {
        stringReturn += "*\n";
      } else {
        stringReturn += "*";
      }
    }
  }
  return stringReturn;
}
