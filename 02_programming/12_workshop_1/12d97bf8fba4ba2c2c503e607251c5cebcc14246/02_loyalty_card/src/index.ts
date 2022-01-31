import { clear } from "console";
import * as readline from "readline";
import { addCustomer, chooseCustomer } from "./customer";
import { loadData } from "./list";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

loadData();

function chooseAnAction(reader: readline.Interface) {
  clear();
  console.log("Welcome");
  console.log("************************************************");
  console.log("1 - Add new customer");
  console.log("2 - Access customer data");
  console.log("3 - Quit");
  reader.question("\ud83e\udd16 Choose an action \n >", (keyboard: string): void => {
    if (keyboard === "1") {
      addCustomer(reader);
    } else if (keyboard === "2") {
      chooseCustomer(reader);
    } else if (keyboard === "3") {
      reader.close();
    } else {
      chooseAnAction(reader);
    }
  });
}
chooseAnAction(reader);

export { chooseAnAction };
