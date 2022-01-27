const checkPhoneNumber = (phoneNumber) => {

  const regex = /(\+336|00336|03|06)(-||.)([0-9])([0-9])(-||.)([0-9])([0-9])(-||.)([0-9])([0-9])(-||.)([0-9])([0-9])/;
  console.log(regex.exec(phoneNumber),phoneNumber);
  if(regex.exec(phoneNumber) !== null){
    return true;
  }else{
    return false;
  }
};

module.exports = checkPhoneNumber;
