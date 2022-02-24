export function humanPercentage(percentages: number[]): string[] {
  return percentages.map((element) => {
    return `${Math.round(element * 100)}%`;
  });
}
