function isColorful(number) {
  // Code here

  let tab1=[];
  let tab2=[];
  let tab3=[];
  let tab4=[];
  let finalArray = [];

  if(number === 0 ||number === 1 ||number === 2 ||number === 3 ||number === 4 ||number === 5 ||number === 6 ||number === 7 ||number === 8 ||number === 9 ){
    return true;
  }else{
    for (let i = 0; i < number.toString().length; i++){
      tab1.push(number.toString()[i]);
      if(i>0){
        tab2.push(tab1[i-1] * tab1[i]);
      }
      if(i>=2){
        tab3.push(tab2[i-2] * tab1[i]);
      }
      if(i>=3){
        tab4.push(tab1[i-3] * tab3[i-2]);
      }}
  }
  finalArray = [...tab1,...tab2,...tab3,...tab4];

  finalArray.forEach( (element,element2) => {

  });
  const findDuplicates = (arr) => {
    let retour = true;
    let sorted_arr = arr.slice().sort();
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        retour = false;
      }
    }
    return retour;
  };

  return findDuplicates(finalArray);
}

isColorful(999);
// Do not remove last lines, it is for tests
module.exports = isColorful;
