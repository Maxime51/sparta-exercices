import { chooseAnAction } from "./index.js";
import { majCustomer,customer,addPurchase } from "./list.js";
import { clear } from "console";

function addCustomer (reader){
  clear();
  console.log("********************************************************");
  console.log("CREATE NEW CUSTOMER");
  console.log("********************************************************");
  firsName();

  function firsName(){
    reader.question("\ud83e\udd16 - first name :> \n >",(firstNameValue) => lastName(firstNameValue));
  }
  function lastName(firstNameValue){
    reader.question("\ud83e\udd16 - last name :> \n >", lastNameValue => email(firstNameValue,lastNameValue));
  }
  function email(firstNameValue,lastNameValue){
    reader.question("\ud83e\udd16 - email:> \n >",emailValue => birthDate(firstNameValue,lastNameValue,emailValue));
  }
  function birthDate(firstNameValue,lastNameValue,emailValue){
    reader.question("\ud83e\udd16 - birth date :> \n >",birthDateValue => city(firstNameValue,lastNameValue,emailValue,birthDateValue));
  }
  function city(firstNameValue,lastNameValue,emailValue,birthDateValue){
    reader.question("\ud83e\udd16 - city :> \n >",cityValue => country(firstNameValue,lastNameValue,emailValue,birthDateValue,cityValue));
  }
  function country(firstNameValue,lastNameValue,emailValue,birthDateValue,cityValue){
    reader.question("\ud83e\udd16 - country :> \n >",countryValue => majCustomer(firstNameValue,lastNameValue,emailValue,birthDateValue,cityValue,countryValue));
  }

}
function chooseCustomer (reader){
  customer.forEach((element,index) => console.log(`${index+1} - ${element.firstName} ${element.lastName}`));
  reader.question("\ud83e\udd16 Choose a customer \n >",keyboard => {
    if((isNaN(keyboard) === true) || keyboard > customer.length || keyboard === "" || keyboard === "0"){
      chooseCustomer(reader);
    }else{
      printCustomer(keyboard,reader);
    }
  });
}

function printCustomer(keyboard,reader){
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(`${(customer[keyboard-1].firstName).toUpperCase()} ${(customer[keyboard-1].lastName).toUpperCase()}\n`);
  console.log("1 - Show account");
  console.log("2 - Add purchase");
  console.log("3 - Show purchase history");
  console.log("4 - Choose another customer");
  console.log("5 - Back to menu");
  console.log("6 - Quit \n");
  reader.question(`\ud83e\udd16 Choose an action for ${(customer[keyboard-1].firstName)} ${(customer[keyboard-1].lastName)}\n >`,choice => chooseAnActionTwo(choice,reader,keyboard));
}
function chooseAnActionTwo(choice,reader,keyboard){
  if(choice === "1"){
    showCustomer(keyboard,reader);
  }else if (choice === "2"){
    addNewPurchase(keyboard,reader);
  }
  else if (choice === "3"){
    showPurchaseHistory(keyboard,reader);
  }
  else if (choice === "4"){
    chooseCustomer(reader);
  }
  else if (choice === "5"){
    chooseAnAction(reader);
  }
  else if (choice === "6"){
    reader.close();
  }
  else{
    printCustomer(keyboard,reader);
  }
}
let total = 0;
function showCustomer(keyboard,reader){
  clear();
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(`${(customer[keyboard-1].firstName).toUpperCase()} ${(customer[keyboard-1].lastName).toUpperCase()}'S INFORMATION`);
  console.log("*************************************************");
  console.log("************\n");
  console.log(`Name:.............${(customer[keyboard-1].firstName)} ${(customer[keyboard-1].lastName)}`);
  console.log(`Email:............${customer[keyboard-1].email}`);
  console.log("Address:");
  console.log(` - City:..........${customer[keyboard-1].city}`);
  console.log(` - Country:.......${customer[keyboard-1].country}`);
  console.log(`Total purchase:...${totalPurchase(keyboard)}`);
  printCustomer(keyboard,reader);
}
function totalPurchase(keyboard){
  customer[keyboard-1].purchase.forEach(elem => {
    const number = elem.split("-");
    total = total + parseInt(number[0]);
  });
  return total;
}
function addNewPurchase(keyboard,reader){
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(`${(customer[keyboard-1].firstName).toUpperCase()} ${(customer[keyboard-1].lastName).toUpperCase()} - ADD PURCHASE`);
  console.log("*************************************************");
  console.log("************\n");
  reader.question("\ud83e\udd16 Purchase amount \n >",purchase => addPurchase(purchase,keyboard,reader));
}
function showPurchaseHistory(keyboard,reader){
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(`${(customer[keyboard-1].firstName).toUpperCase()} ${(customer[keyboard-1].lastName).toUpperCase()}'S PURCHASE HISTORY`);
  console.log("*************************************************");
  console.log("*************************************************");
  customer[keyboard-1].purchase.forEach(element => console.log(element));
  console.log("\n");
  printCustomer(keyboard,reader);
}
export {addCustomer,chooseCustomer,printCustomer,addNewPurchase};
