import { buy, checkout } from "./buy.js";
import { showCart,panier } from "./panier.js";
import { clear } from "console";

function menu(reader){
  console.log("**************************************************");
  console.log("MENU                                              ");
  console.log("**************************************************");
  console.log("1 - Buy a product ");
  console.log("2 - Show cart ");
  console.log("3 - Checkout ");
  console.log("4 - Quit ");
  reader.question("Choose an action \n >",element => direction(element,reader));
}

function direction(keyboard,reader){
  if((isNaN(keyboard) === true) || (keyboard === "") || (keyboard === "0") || (keyboard > 4)){
    menu(reader);
  }else{
    if(keyboard === "1"){
      clear();
      buy(reader);
    }
    else if(keyboard === "2"){
      clear();
      showCart(reader);
    }
    else if(keyboard === "3"){
      clear();
      checkout(reader);
    }
    else if(keyboard === "4"){
      if(panier.length === 0){
        reader.close();
      }else{
        console.log("You must pay for your items");
        menu(reader);
      }
    }
  }
}
export {menu};
