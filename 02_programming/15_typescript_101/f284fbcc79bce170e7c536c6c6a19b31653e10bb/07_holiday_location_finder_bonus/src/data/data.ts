type ContinentsArray = [string,string,string,string,string,string];

const continents: ContinentsArray = [
  "- Europe",
  "- Asia",
  "- Africa",
  "- North America",
  "- South America",
  "- Oceania"
];

type CitiesObject = {[key: string]: [string,string,string,string,string]};
const cities: CitiesObject = {
  Europe : ["Paris","Berlin","Londre","Madrid","Bruxelles"],
  Asia : ["Pekin","Hong Kong","Bangkok","Séoul","Bombay"],
  Africa : ["Lagos","Nairobi","Accra","Alger","Le Caire"],
  NorthAmerica : ["Whasington","New York","Detroit","Los Angeles","Toronto"],
  SouthAmerica : ["Rio","Mexico","Bogota","Lima","Quito"],
  Oceania : ["Sydney","Camberra","Suva","Perth","Hobart"]
};

// Leave the line below for tests to work properly.
export { continents, cities };
