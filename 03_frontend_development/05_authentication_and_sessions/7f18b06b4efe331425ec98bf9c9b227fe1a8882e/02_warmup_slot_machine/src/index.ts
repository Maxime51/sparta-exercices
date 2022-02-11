// Code here
function slotMachine(array: unknown[]): boolean {
  let result = false;
  let precedentValue: unknown;
  array.forEach((element) => {
    if (element === precedentValue) {
      result = true;
      precedentValue = element;
    } else {
      result = false;
      precedentValue = element;
    }
  });

  return result;
}
const paylineOfStrings = ["🍒", "🍒", "🍒"];
const paylineOfNumbers = [1, 1, 1];
const losingPayline = [true, false, true];

slotMachine(paylineOfStrings); //return "true"
slotMachine(paylineOfNumbers); //return "true"
slotMachine(losingPayline); //return "false"
export { slotMachine };
