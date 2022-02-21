import * as realReadline from "readline";

interface Reader {
  question: (query: string, callback: (answer: string) => void) => void;
  close: () => void;
}

const createInterface = (options: { input: any; output: any }): Reader => {
  return realReadline.createInterface(options);
};

export { createInterface };
