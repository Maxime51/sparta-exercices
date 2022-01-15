const MORSE_CODE = {
  ".-": "A",
  "-...": "B",
  "-.-.": "C",
  "-..": "D",
  ".": "E",
  "..-.": "F",
  "--.": "G",
  "....": "H",
  "..": "I",
  ".---": "J",
  "-.-": "K",
  ".-..": "L",
  "--": "M",
  "-.": "N",
  "---": "O",
  ".--.": "P",
  "--.-": "Q",
  ".-.": "R",
  "...": "S",
  "-": "T",
  "..-": "U",
  "...-": "V",
  ".--": "W",
  "-..-": "X",
  "-.--": "Y",
  "--..": "Z",
  "-----": "0",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
};
function itterator(x){                                    //return parameter + 1
  return x+1;
}

let cutWord;
let finalArray=[];
let finalSentence = "";

const decodeMorse = (sentence,number,param3) => {
  if (param3 === "") {
    finalSentence="";                                       //if param === "" init the variable
    finalArray=[];
    decodeMorse(sentence,number,0);

  }else{
    const phraseCut = sentence.split("   ");                //cut sentence in parametre 1 , to put in array phraseCut
    if (number < phraseCut.length) {
      cutWord = phraseCut[number].split(" ");               //cut phraseCut, to put in array cutWord

      if (param3 < (cutWord.length)) {
        finalArray.push(MORSE_CODE[cutWord[param3]]);       // push to array finalArray the Letter finded
        return decodeMorse(sentence,number,itterator(param3)); // call function decodeMorse
      }else {
        if (number !== phraseCut.length-1) {
          finalArray.push(" ");                             //if is not end of sentence push " " to array finalArray"
          return decodeMorse(sentence,itterator(number),0); // call function decodeMorse
        }else {
          finalSentence = finalArray.join("");              //change finalArray into string
        }
      }
    }else{
      console.log();
    }
  }
  return finalSentence;                                   //return finalSentence
};

// Leave line below for tests to work properly
module.exports = decodeMorse;
