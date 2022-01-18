function triangle(value) {
  // Code here
  let response = "";
  for (let i = 1; i <= value; i++){
    for(let y =0; y < 1;y++){
      response = `${response}*`;
    }
    console.log(response);
  }
}
triangle(4);
// Do not remove the following line, it is for tests
module.exports = triangle;
