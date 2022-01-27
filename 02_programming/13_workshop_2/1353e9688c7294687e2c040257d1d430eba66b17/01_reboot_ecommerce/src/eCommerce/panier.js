import { menu } from "./index.js";
import { product } from "./produits.js";
import { clear } from "console";

let panier = [];

function addToCart(numberOfItem,quantityOfItem,reader){
  panier.push({name : product[numberOfItem-1].name,price :product[numberOfItem-1].price ,quantity :quantityOfItem });
  product[numberOfItem-1].majQuantity(quantityOfItem);
  menu(reader);
}

function showCart(reader){
  let totalEuroCart = 0;
  console.log("**************************************************");
  console.log("CART                                              ");
  console.log("**************************************************");
  panier.forEach((element,index) => {
    totalEuroCart = totalEuroCart + (parseFloat(element.price) * parseFloat(element.quantity));
    console.log(`${index+1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
  console.log("**************************************************");
  console.log(`TOTAL: ${totalEuroCart} €                         `);
  console.log("**************************************************");
  console.log("1 - Back to menu");
  console.log("2 - Quit");
  question(reader);
}

function question(reader){
  reader.question("Choose an action \n >", element => {
    if((isNaN(element) === true) || (element === "") || (element === "0") || (element > 2)){
      question(reader);
    }else{
      if(element === "1"){
        clear();
        menu(reader);
      }else if(element === "2"){
        if(panier.length === 0){
          reader.close();
        }else{
          console.log("you must pay for your items");
          showCart(reader);
        }
      }
    }
  });
}


export {panier,addToCart,showCart};
