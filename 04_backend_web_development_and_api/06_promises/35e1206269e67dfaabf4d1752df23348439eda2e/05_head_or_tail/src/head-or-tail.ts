import { getRandomFace } from "./random-face";

function headOrTail(input: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if (getRandomFace() === input) {
      resolve("Well done.");
    } else {
      reject("Nope.");
    }
  });
}

export { headOrTail };
