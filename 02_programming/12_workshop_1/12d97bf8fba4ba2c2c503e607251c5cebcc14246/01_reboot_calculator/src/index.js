import readline from "readline";
import {calculator} from "./calculator.js";

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

  console.log(" --------------------------------------------------------------------");
  console.log(" --------------------------------------------------------------------");
  console.log(" --                                                                --");
  console.log(" --                            CALCULATOR                          --");
  console.log(" --                                                                --");
  console.log(" --------------------------------------------------------------------");
  console.log(" --------------------------------------------------------------------");
calculator(reader);
