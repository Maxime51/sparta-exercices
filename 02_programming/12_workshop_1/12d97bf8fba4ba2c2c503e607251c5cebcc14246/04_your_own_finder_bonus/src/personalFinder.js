const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Code here
function pwd(){
  const data = process.cwd().split("/");
  data.forEach((element,index) => console.log(`${index} - ${element}`));
  reader.question("Choose a number > \n",keyboard => finder(keyboard,data));
}
function finder(keyboard,data){
  const lengthOflines = data.length;
  let chaine = "";
  for(let i = 1; i < (lengthOflines- parseInt(keyboard)) ; i++){
    chaine = `${chaine}../`;
  }
  if(parseInt(keyboard) === lengthOflines){
    chaine = ".";
  }
  console.log(fs.readdirSync(chaine));
  //console.log(keyboard);
}
module.exports = {pwd};
