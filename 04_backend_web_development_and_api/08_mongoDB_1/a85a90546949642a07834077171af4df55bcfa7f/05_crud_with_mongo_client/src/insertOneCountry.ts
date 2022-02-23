import { Db } from "mongodb";

export function insertOneCountry(
  db: Db,
  country: {
    name: string;
    capital: string;
    continent: string;
  },
) {
  // code your function here
  return db
    .collection("worldAtlas")
    .insertOne(country)
    .then((result) => result.insertedId);
}
