import { chooseAnAction } from "./index";
import { majCustomer, customer, addPurchase } from "./list";
import { clear } from "console";
import { Interface } from "readline";

function addCustomer(reader: Interface) {
  clear();
  console.log("********************************************************");
  console.log("CREATE NEW CUSTOMER");
  console.log("********************************************************");
  firsName();

  function firsName() {
    reader.question("\ud83e\udd16 - first name :> \n >", (firstNameValue) => lastName(firstNameValue));
  }
  function lastName(firstNameValue: string) {
    reader.question("\ud83e\udd16 - last name :> \n >", (lastNameValue) => email(firstNameValue, lastNameValue));
  }
  function email(firstNameValue: string, lastNameValue: string) {
    reader.question("\ud83e\udd16 - email:> \n >", (emailValue) =>
      birthDate(firstNameValue, lastNameValue, emailValue),
    );
  }
  function birthDate(firstNameValue: string, lastNameValue: string, emailValue: string) {
    reader.question("\ud83e\udd16 - birth date :> \n >", (birthDateValue) =>
      city(firstNameValue, lastNameValue, emailValue, birthDateValue),
    );
  }
  function city(firstNameValue: string, lastNameValue: string, emailValue: string, birthDateValue: string) {
    reader.question("\ud83e\udd16 - city :> \n >", (cityValue) =>
      country(firstNameValue, lastNameValue, emailValue, birthDateValue, cityValue),
    );
  }
  function country(
    firstNameValue: string,
    lastNameValue: string,
    emailValue: string,
    birthDateValue: string,
    cityValue: string,
  ) {
    reader.question("\ud83e\udd16 - country :> \n >", (countryValue) =>
      majCustomer(firstNameValue, lastNameValue, emailValue, birthDateValue, cityValue, countryValue, reader),
    );
  }
}

function chooseCustomer(reader: Interface) {
  customer.forEach((element, index) => console.log(`${index + 1} - ${element.firstName} ${element.lastName}`));
  reader.question("\ud83e\udd16 Choose a customer \n >", (keyboard): void => {
    const regex = /\d/;
    if (regex.exec(keyboard) !== null) {
      printCustomer(parseInt(keyboard), reader);
    } else {
      chooseCustomer(reader);
    }
  });
}

function printCustomer(keyboard: number, reader: Interface) {
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(`${customer[keyboard - 1].firstName.toUpperCase()} ${customer[keyboard - 1].lastName.toUpperCase()}\n`);
  console.log("1 - Show account");
  console.log("2 - Add purchase");
  console.log("3 - Show purchase history");
  console.log("4 - Choose another customer");
  console.log("5 - Back to menu");
  console.log("6 - Quit \n");
  reader.question(
    `\ud83e\udd16 Choose an action for ${customer[keyboard - 1].firstName} ${customer[keyboard - 1].lastName}\n >`,
    (choice) => chooseAnActionTwo(choice, reader, keyboard),
  );
}
function chooseAnActionTwo(choice: string, reader: Interface, keyboard: number) {
  if (choice === "1") {
    showCustomer(keyboard, reader);
  } else if (choice === "2") {
    addNewPurchase(keyboard, reader);
  } else if (choice === "3") {
    showPurchaseHistory(keyboard, reader);
  } else if (choice === "4") {
    chooseCustomer(reader);
  } else if (choice === "5") {
    chooseAnAction(reader);
  } else if (choice === "6") {
    reader.close();
  } else {
    printCustomer(keyboard, reader);
  }
}
let total = 0;
function showCustomer(keyboard: number, reader: Interface) {
  clear();
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(
    `${customer[keyboard - 1].firstName.toUpperCase()} ${customer[keyboard - 1].lastName.toUpperCase()}'S INFORMATION`,
  );
  console.log("*************************************************");
  console.log("************\n");
  console.log(`Name:.............${customer[keyboard - 1].firstName} ${customer[keyboard - 1].lastName}`);
  console.log(`Email:............${customer[keyboard - 1].email}`);
  console.log("Address:");
  console.log(` - City:..........${customer[keyboard - 1].city}`);
  console.log(` - Country:.......${customer[keyboard - 1].country}`);
  console.log(`Total purchase:...${totalPurchase(keyboard)}`);
  printCustomer(keyboard, reader);
}
function totalPurchase(keyboard: number) {
  total = 0;
  customer[keyboard - 1].purchase.forEach((elem) => {
    total = total + parseInt(elem[1]);
  });
  return total;
}
function addNewPurchase(keyboard: number, reader: Interface) {
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(
    `${customer[keyboard - 1].firstName.toUpperCase()} ${customer[keyboard - 1].lastName.toUpperCase()} - ADD PURCHASE`,
  );
  console.log("*************************************************");
  console.log("************\n");
  reader.question("\ud83e\udd16 Purchase amount \n >", (purchase) => addPurchase(purchase, keyboard, reader));
}
function showPurchaseHistory(keyboard: number, reader: Interface) {
  console.log("*************************************************");
  console.log("*************************************************");
  console.log(
    `${customer[keyboard - 1].firstName.toUpperCase()} ${customer[
      keyboard - 1
    ].lastName.toUpperCase()}'S PURCHASE HISTORY`,
  );
  console.log("*************************************************");
  console.log("*************************************************");
  customer[keyboard - 1].purchase.forEach((element) => console.log(element));
  console.log("\n");
  printCustomer(keyboard, reader);
}
export { addCustomer, chooseCustomer, printCustomer, addNewPurchase };
