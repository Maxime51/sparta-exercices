function helloSpartan(string = "soldier") {
  // Code the function here.
  if(string !== undefined){
    if(string === "soldier"){
      console.log(`Hello ${string}; not very talkative uh?`);
      //return `Hello ${string}; not very talkative uh?`;
    }
    else{
      console.log(`Hello ${string}: glad to know your name!`);
      //return `Hello ${string}: glad to know your name!`;
    }
  }else{
    console.log("Hello soldier; not very talkative uh?");
    //return "Hello soldier; not very talkative uh?";
  }
}
helloSpartan();
// Do not remove last lines, it is for tests
module.exports = helloSpartan;
