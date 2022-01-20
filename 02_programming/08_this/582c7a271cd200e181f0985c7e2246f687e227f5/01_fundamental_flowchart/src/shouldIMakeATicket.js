function shouldIMakeATicket(isStuck, timeBeingStuck, hourOfTheDay){

  if(isStuck === true){
    if(timeBeingStuck >= 20){
      if((hourOfTheDay >= 9 && hourOfTheDay < 13) ||(hourOfTheDay >= 14 && hourOfTheDay < 18) ){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }else{
    return false;
  }
  // Code your function here

}

// Don't touch this for tests to execute properly
module.exports = shouldIMakeATicket;
