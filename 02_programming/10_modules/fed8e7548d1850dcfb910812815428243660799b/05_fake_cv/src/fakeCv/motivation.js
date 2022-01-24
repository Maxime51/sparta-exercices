const faker = require("faker");
function motivation (){
  const motivation = {"catchPhrase": faker.company.catchPhrase(),"description": faker.lorem.paragraph()};
  return motivation;
}


module.exports = motivation;
