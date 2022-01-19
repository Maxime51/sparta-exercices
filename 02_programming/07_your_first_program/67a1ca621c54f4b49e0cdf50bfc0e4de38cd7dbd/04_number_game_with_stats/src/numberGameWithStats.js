function numberGameWithStats(reader, min = 1, max = 100) {
  // Code here
  const randomNumber = Math.floor(Math.random() * (max - min)+1) + min;

  let numberQuestion = 1;
  question();



  function response (number){
    if(min === max){
      if(number === min){
        console.log("You won! \n");
        console.log(numberQuestion);
        reader.close;
      }
    }
    if (number > randomNumber){
      console.log("Too high \n");
    }
    if (number < randomNumber){
      console.log("Too low \n");
    }
    if (number < min || number > max){
      console.log( "The number is between 1 and 100 \n");
    }
    if (isNaN(number) === true){
      console.log("This was not a number \n");
    }
    if (number == randomNumber || number === 100 || number === 1){
      console.log("You won! \n");
      console.log(numberQuestion);
      reader.close;
    }
    numberQuestion = numberQuestion + 1;
    question();

  }

  function question()
  {
    reader.question("Enter a number :", response);
  }

}

module.exports = numberGameWithStats;
