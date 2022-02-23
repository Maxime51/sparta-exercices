import "dotenv/config";

const newCountry = [{
  name: "Italie",
  capital: "Rome",
  continent: "Europe",
},{
  name: "Belgique",
  capital: "Bruxelles",
  continent: "Europe",
},{
  name: "Angleterre",
  capital: "Londre",
  continent: "Europe",
}]

db.worldAtlas.insertMany(newCountry)
