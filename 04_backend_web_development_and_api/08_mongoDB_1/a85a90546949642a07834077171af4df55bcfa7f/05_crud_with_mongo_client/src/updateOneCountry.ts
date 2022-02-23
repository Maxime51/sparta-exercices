import { Db } from "mongodb";

export function updateOneCountry(db: Db) {
  return db
    .collection("worldAtlas")
    .updateOne({ name: "Australia" }, { $set: { capital: "Canberra" } })
    .then((result) => {
      return db
        .collection("worldAtlas")
        .findOne({ name: "Australia" })
        .then((test) => test);
    });
}
