import { clear } from "console";
import readline from "readline";
import { addCustomer,chooseCustomer} from "./customer.js";
import { customer } from "./list.js";
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



function chooseAnAction (){
  clear();
  console.log("Welcome");
  console.log("************************************************");
  console.log("1 - Add new customer");
  console.log("2 - Access customer data");
  console.log("3 - Quit");
  reader.question("\ud83e\udd16 Choose an action \n >", keyboard => {
    if(keyboard === "1"){
      addCustomer(reader);
    }else if (keyboard === "2"){
      chooseCustomer(reader);
    }else if (keyboard === "3"){
      reader.close();
    }
    else{
      chooseAnAction();
    }
  });
}
chooseAnAction();

export {chooseAnAction};
