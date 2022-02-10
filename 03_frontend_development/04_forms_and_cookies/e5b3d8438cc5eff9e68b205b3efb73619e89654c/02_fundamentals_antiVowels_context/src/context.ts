import { sentenceJoiner } from "./sentenceJoiner";
import { sentenceSplitter } from "./sentenceSplitter";

export const context = (sentence: string): string => {
  // Code your function for context here
  const regex = /[aeiouyAEIOUY]/m;
  const sentenceCut = sentenceSplitter(sentence);

  const filter = sentenceCut.filter((element) => {
    if (regex.exec(element.charAt(0)) === null) {
      return element;
    }
  });
  return sentenceJoiner(filter);
};
