const findPosition = (array,person,number) => {
  // Code here

  function itterator(x) {
    return x + 1;
  }

  if((typeof(number) === "number") && typeof(person) === "string" && typeof(array[number]) === "string"){
    let stringReturn = "";
    let numberItterator=number;
    if(array[number] === person){
      stringReturn = `${person} is at position #${numberItterator+1} in this array.`;
      return stringReturn;
    }else{
      if((array.length)-1 !== numberItterator){
        numberItterator = itterator(numberItterator);
        return findPosition(array,person,numberItterator);
      }else{
        stringReturn = `${person} is not present in this array.`;
        return stringReturn;
      }
    }
  }else{
    throw new Error("Erreur");
  }
};

// Leave line below for tests to work properly
module.exports = findPosition;
