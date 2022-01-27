import { menu } from "./index.js";
import { product } from "./produits.js";
import { panier,addToCart } from "./panier.js";

function buy(reader){
  console.log("**************************************************");
  console.log("SHOP                                              ");
  console.log("**************************************************");
  product.forEach((element,index) => {
    console.log(`${index+1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });

  questionOne(reader);

}

function questionOne(reader){
  reader.question("Choose a product \n >", element => questionTwo(element,reader));
}

function questionTwo(keyboard,reader){
  reader.question("How much? \n >", element => {
    if(product[keyboard-1].quantity < element){
      console.log("Warning, there is not enough stock");
      questionTwo(keyboard,reader);
    }else{
      addToCart(keyboard,element,reader);
    }
  });
}
function checkout(reader){
  let totalEuroCart = 0;
  console.log("**************************************************");
  console.log("CHECKOUT                                          ");
  console.log("**************************************************");
  panier.forEach((element,index) => {
    totalEuroCart = totalEuroCart + (parseFloat(element.price) * parseFloat(element.quantity));
    console.log(`${index+1} - ${element.name}: ${element.price}€ (quantity: ${element.quantity})`);
  });
  questionCheckout(reader,totalEuroCart);
}

function questionCheckout(reader,total){
  reader.question(`You have to pay : ${total}€ \n >`, element => {
    if((isNaN(element) === true) || (element === "") || (element === "0")){
      checkout(reader);
    }else{
      if(parseInt(element) > total){
        console.log("Thank you !                                       ");
        console.log(`Your money : ${element-total} €                   `);
        console.log("**************************************************");
        console.log("GOODBYE !                                         ");
        console.log("**************************************************");
        reader.close();
      }else if (parseInt(element) < total){
        questionCheckout(reader,total-element);
      }else if (parseInt(element) === total){
        console.log("Thank you !                                       ");
        console.log("**************************************************");
        console.log("GOODBYE !                                         ");
        console.log("**************************************************");
        reader.close();
      }
    }
  });
}
export {buy,checkout};
