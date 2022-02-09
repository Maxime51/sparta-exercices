import { capitalize } from "./capitalize";

export function context(sentence: string): string {
  // Code here and use the function `capitalize` from exercise one
  const tabSentence: string[] = sentence.split(" ");

  const returnSentence = tabSentence.map((element) => {
    return capitalize(element);
  });

  return returnSentence.join(" ");
}
