const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Code here

function pwd(data = process.cwd().split("/")){
  data[0]= ".";
  data.forEach((element,index) => console.log(`${index} - ${element}`));
  reader.question("Choose a number > \n",keyboard => finder(keyboard,data));
}

function finder(keyboard,data){
  const lengthOflines = data.length;
  let chaine="";
  console.log("test =>>>>>>>>>>>>>>",lengthOflines,keyboard);
  for(let i = 1; i < (lengthOflines- parseInt(keyboard)) ; i++){
    chaine = "../"+chaine;
  }
  if(parseInt(keyboard) === lengthOflines-1){
    chaine = ".";
    console.log(fs.readdirSync(chaine));
  }
  else{
    console.log(fs.readdirSync(chaine));
  }

  pwd(fs.readdirSync(chaine));
}
module.exports = {pwd};
