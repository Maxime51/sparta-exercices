import { Collection, Db } from "mongodb";

export function deleteOneCountry(db: Db) {
  // code your function here
  return db
    .collection("worldAtlas")
    .deleteOne({ name: "France" })
    .then((result) => {
      if (result.deletedCount === 0) {
        return false;
      } else {
        return true;
      }
    });
}
