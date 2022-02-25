export function line(numberOfStars: number): string {
  let string = "";
  for (let i = 0; i < numberOfStars; i++) {
    string += "*";
  }
  return string;
}
