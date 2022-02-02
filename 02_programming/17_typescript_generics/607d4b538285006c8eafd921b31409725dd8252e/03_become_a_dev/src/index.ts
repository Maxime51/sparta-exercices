type Human = {
  name: string;
  age: number;
  knowsDev: boolean;
};

type Dev = Human & {
  knownLanguage: string;
};
const dev = {
  name: "Maxime",
  age: 31,
  knowsDev: false,
};

function becomeADev(object: Human): Dev {
  return {
    name: object.name,
    age: object.age,
    knowsDev: true,
    knownLanguage: "JavaScript",
  };
}
// Leave the line below for tests to work properly.

becomeADev(dev);
export { becomeADev };
