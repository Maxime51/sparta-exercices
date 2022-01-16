function getConfig(config = {}) {

  const defaultConfig = {
    user: {
      name: "root",
      password: "admin",
      ...config.user,
    },
    hardware: {
      CPUThreads: 4,
      memory: 2,
      diskSpace: 20,
      ...config.hardware,
    },
  };

  return defaultConfig;
}

function logInfos(user) {
  const redactedUser = {
    firstName: "<REDACTED>",
    lastName: "<REDACTED>",
    address: {
      city: "<REDACTED>",
      country: "<REDACTED>",
    },
  };

  let {
    firstName= "<REDACTED>",
    lastName = "<REDACTED>",
    address: { city ="<REDACTED>", country ="<REDACTED>" },
  } = user;// Change here

  console.log(`${firstName} ${lastName} lives in ${city}, ${country}.`);
}

module.exports = {
  getConfig,
  logInfos,
};
