import { chooseAnAction } from "./index";
import { printCustomer, addNewPurchase } from "./customer";
import * as moment from "moment";
import * as fs from "fs";
import { randomUUID } from "crypto";
import { Interface } from "readline";

let customer: Customer;

type Customer = [
  {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    birthDate: string;
    city: string;
    country: string;
    purchase: string[][];
  },
];

function loadData(): void {
  fs.readFile("src/data/customers.json", "utf8", function (err, data): void {
    const content: string = data;
    const recupArray: Customer = JSON.parse(content);
    recupArrayFile(recupArray);
  });
}

function saveData(array: Customer): void {
  const string: string = JSON.stringify(array);
  fs.writeFile("src/data/customers.json", string, function (err): void {
    if (err) throw err;
    console.log("Fichier mis à jour !");
  });
}

function recupArrayFile(data: Customer) {
  customer = data;
}

function majCustomer(
  first: string,
  last: string,
  email: string,
  date: string,
  city: string,
  country: string,
  reader: Interface,
): void {
  customer.push({
    id: randomUUID(),
    firstName: first,
    lastName: last,
    email: email,
    birthDate: date,
    city: city,
    country: country,
    purchase: [],
  });
  saveData(customer);
  loadData();
  return chooseAnAction(reader);
}
function addPurchase(purchase: string, keyboard: number, reader: Interface) {
  const regex = /\d/;

  if (regex.exec(purchase) !== null) {
    customer[keyboard - 1].purchase.push([`${moment().format("L")}`, `${parseInt(purchase)}`]);
    saveData(customer);
    loadData();
    return printCustomer(keyboard, reader);
  } else {
    addNewPurchase(keyboard, reader);
  }
}
export { customer, majCustomer, addPurchase, loadData, saveData };
