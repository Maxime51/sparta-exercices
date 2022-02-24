import * as mongo from "mongodb";

export const moviesValidator = {
  validator: {
    $jsonSchema: {
      additionalProperties: false,
      bsonType: "object",
      required: ["_id", "title", "genre", "year"],
      properties: {
        _id: {
          bsonType: "objectId",
        },
        title: {
          bsonType: "string",
          description: "must be a string and is required",
        },
        genre: {
          bsonType: "string",
          enum: ["action", "comedy", "dramatic", "horror", "romance"],
        },
        year: {
          bsonType: "int",
          description: "must be a number and is required",
          minimum: 1950,
          maximum: 2020,
        },
        ratings: {
          additionalProperties: false,
          bsonType: "object",
          required: ["pressRating", "spectatorsRating"],
          properties: {
            pressRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
            },
            spectatorsRating: {
              bsonType: "int",
              minimum: 1,
              maximum: 5,
            },
          },
        },
      },
    },
  },
};

export function createMoviesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("movies", moviesValidator);
}
