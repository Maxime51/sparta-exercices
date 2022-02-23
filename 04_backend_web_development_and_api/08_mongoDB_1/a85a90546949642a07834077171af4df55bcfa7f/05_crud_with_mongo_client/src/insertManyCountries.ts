import { Db } from "mongodb";

export function insertManyCountries(
  db: Db,
  arrayOfCountry: {
    name: string;
    capital: string;
    continent: string;
  }[],
) {
  return db
    .collection("worldAtlas")
    .insertMany(arrayOfCountry)
    .then((result) => result.insertedCount);
}
