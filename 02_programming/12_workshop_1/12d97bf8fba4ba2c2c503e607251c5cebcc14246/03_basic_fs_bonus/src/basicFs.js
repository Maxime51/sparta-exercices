const fs = require("fs");
const path = require("path");

function pwd(){
  return process.cwd();
}

function touch (string) {
  fs.openSync(string);
}
function deleteFile(string){
  fs.rmSync(string);
}
function copyPaste(string,string2){
  fs.copyFileSync(string,string2);
}
function cutPaste(string,string2) {
  copyPaste(string,string2);
  deleteFile(string);
}
module.exports = {pwd,touch,deleteFile,copyPaste,cutPaste};
