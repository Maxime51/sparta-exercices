const calculator = (string) => {
  const regex = /d*\+|-|\*|\/d*/;

  if(regex.exec(string) !== null){
    if(string.includes("+") === true){
      return parseFloat(string.replace(",",".").split("+")[0]) + parseFloat(string.replace(",",".").split("+")[1]);
    }
    else if(string.includes("-") === true){
      return parseFloat(string.replace(",",".").split("-")[0]) - parseFloat(string.replace(",",".").split("-")[1]);
    }
    else if(string.includes("*") === true){
      return parseFloat(string.replace(",",".").split("*")[0]) * parseFloat(string.replace(",",".").split("*")[1]);
    }
    else if(string.includes("/") === true){
      return parseFloat(string.replace(",",".").split("/")[0]) / parseFloat(string.replace(",",".").split("/")[1]);
    }

  }else{
    throw new Error("Can't process the operation");
  }

};

module.exports = calculator;
