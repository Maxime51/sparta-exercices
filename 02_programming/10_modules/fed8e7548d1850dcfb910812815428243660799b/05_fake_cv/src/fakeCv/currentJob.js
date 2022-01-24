const faker = require("faker");
function currentJob (){
  const currentJob =  {"companyName": faker.company.companyName(), "jobDescriptor": faker.name.jobDescriptor(),"jobTitle": faker.name.jobTitle()};
  return currentJob;
}

module.exports = currentJob;
