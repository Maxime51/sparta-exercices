const faker = require("faker");
function identity (){
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const city = faker.address.city();
  const phone = faker.phone.phoneNumber();
  const email  = `${firstName}.${lastName}@fake.local`;
  const avatar = faker.image.avatar();

  const identity = {"firstName" : firstName,"lastName" : lastName,"city" : city,"phoneNumber":phone,
    "email" : email ,"avatar" : avatar};

  return identity;
}

module.exports = identity;
