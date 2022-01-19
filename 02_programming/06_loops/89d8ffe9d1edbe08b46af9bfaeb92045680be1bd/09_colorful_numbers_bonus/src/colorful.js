function isColorful(number) {
  // Code here

  let tab1=[];
  let tab2=[];
  let tab3=[];
  let tab4=[];
  for (let i = 0; i <number.length; i++){
    tab1.push(number[i]);
    for (let y = i+1; y < number.length-1; y++){
      tab2.push(number[y]*tab1[i]);
      for (let z = y+1; z < number.length-2; z++){
        tab3.push(number[z]*tab2[y-1]);

      }
    }
  }
}
isColorful("3245");
// Do not remove last lines, it is for tests
module.exports = isColorful;
