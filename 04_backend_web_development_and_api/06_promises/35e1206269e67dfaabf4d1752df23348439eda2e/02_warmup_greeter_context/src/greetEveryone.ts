// Copy your function greetEveryone here
type ParamRest = string[];

export function greetEveryone(...ParamRest: string[]): void {
  // Code your function here
  ParamRest.forEach((element) => {
    console.log(`"Welcome to ${element}"`);
  });
}
