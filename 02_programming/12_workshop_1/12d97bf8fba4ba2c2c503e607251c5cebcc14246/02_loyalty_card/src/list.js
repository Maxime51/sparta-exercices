
import { chooseAnAction } from "./index.js";
import { printCustomer,addNewPurchase } from "./customer.js";
import * as uuid from "uuid";
import  moment from "moment";
import fs from "fs";
let customer;

function loadData(){
  fs.readFile("src/data/customers.json", "utf8", function(err, data) {
    const content = data;
    const recupArray = JSON.parse(content);
    recupArrayFile(recupArray);
  });
}

function saveData(array){
  const string = JSON.stringify(array);
  fs.writeFile("src/data/customers.json", string, function (err) {
    if (err) throw err;
    console.log("Fichier mis à jour !");
  });
}


function recupArrayFile (data){
  customer = data;
}


function majCustomer(first,last,email,date,city,country){
  customer.push({
    id : uuid.v4(),
    firstName : first,
    lastName: last,
    email : email,
    birthDate : date,
    city : city,
    country : country,
    purchase : [],
  });
  saveData(customer);
  loadData();
  return chooseAnAction();
}
function addPurchase(purchase,keyboard,reader){
  if(isNaN(purchase) === true){
    addNewPurchase(keyboard,reader);
  }
  else{
    customer[keyboard-1].purchase.push([`${moment().format("L")}`,`${parseInt(purchase)}`]);
    saveData(customer);
    loadData();
    return printCustomer(keyboard,reader);
  }
}
export {customer,majCustomer,addPurchase,loadData,saveData};
