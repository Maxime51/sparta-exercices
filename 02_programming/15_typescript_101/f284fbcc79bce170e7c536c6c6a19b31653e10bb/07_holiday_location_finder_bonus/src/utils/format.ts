
// Format user input.

function sanitizeUserInput(response: string) :string {
  // Write your code here
  response = response.replace(" ","");
  response = response.replace("_","");
  response = response.replace("-","");
  response = response.replace("/","");
  response = response.replace(".","");
  console.log("=============================>",response);
  return response;

}

// Leave the line below for tests to work properly.
export { sanitizeUserInput };
