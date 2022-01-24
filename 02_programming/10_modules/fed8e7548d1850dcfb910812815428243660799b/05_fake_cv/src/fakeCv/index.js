const faker = require("faker");
const identity = require("./identity");
const motivation = require("./motivation");
const currentJob = require("./currentJob");

function fakeCv(){

  const cv = {identity : identity(), motivation : motivation(),currentJob : currentJob()};

  return cv;

}


module.exports = fakeCv;

