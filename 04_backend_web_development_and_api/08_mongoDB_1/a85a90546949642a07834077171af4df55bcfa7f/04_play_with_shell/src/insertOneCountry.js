import "dotenv/config";
import { MongoClient } from "mongodb";

const newCountry = {
  name: "France",
  capital: "Paris",
  continent: "Europe",
}

db.worldAtlas.insertOne(newCountry);
