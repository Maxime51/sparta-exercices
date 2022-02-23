import { Db } from "mongodb";

export function findManyCountries(db: Db) {
  // code your function here
  return db
    .collection("worldAtlas")
    .find({ continent: "Europe" })
    .toArray()
    .then((data) => {
      return data;
    });
}
