
import { chooseAnAction } from "./index.js";
import { printCustomer,addNewPurchase } from "./customer.js";
import * as uuid from "uuid";
import  moment from "moment";

let customer = [];

function majCustomer(first,last,email,date,city,country){
  customer.push({
    id : uuid.v4(),
    firstName : first,
    lastName: last,
    email : email,
    birthDate : date,
    purchase : [],
    city : city,
    country : country,

  });
  return chooseAnAction();
}
function addPurchase(purchase,keyboard,reader){
  if(isNaN(purchase) === true){
    addNewPurchase(keyboard,reader);
  }
  else{
    customer[keyboard-1].purchase.push(`${moment().format("L")}`,`${purchase}`);
    return printCustomer(keyboard,reader);
  }
}
export {customer,majCustomer,addPurchase};
