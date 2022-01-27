import { clear } from "console";
import readline from "readline";
import {menu} from "./eCommerce/index.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
menu(reader);
