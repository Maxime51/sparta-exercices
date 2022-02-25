export function column(numberOfLines: number, lineContent: string): string {
  let string = "";
  for (let i = 0; i < numberOfLines; i++) {
    string += `${lineContent}\n`;
  }
  return string;
}
