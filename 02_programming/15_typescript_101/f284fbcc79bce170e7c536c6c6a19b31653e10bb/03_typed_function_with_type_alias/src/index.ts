function handleTuple(array: MyTuple) :void{
  // Code the function here.

  if(typeof array[0] === "string"){
    console.log(`${array[0]} is a string`);
  }
  if(typeof array[1] === "number"){
console.log(`${array[1]} is a number`);
  }

}

type MyTuple = [string,number];
// Leave the line below for tests to work properly.
export { handleTuple };
