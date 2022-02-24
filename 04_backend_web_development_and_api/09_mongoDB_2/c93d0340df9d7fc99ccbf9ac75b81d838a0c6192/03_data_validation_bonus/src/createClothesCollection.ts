import * as mongo from "mongodb";

export const sweaterProperties = {
  bsonType: "object",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["sweater"],
    },
    size: {
      bsonType: "string",
      enum: ["XXS", "XS", "S", "M", "L", "XL", "XXL", "XXXL"],
    },
  },
};

export const shoesProperties = {
  bsonSchema: "number",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["shoes"],
    },
    size: {
      bsonType: "int",
      minimum: 30,
      maximum: 50,
    },
    material: {
      bsonType: "string",
      enum: ["leather", "textile", "synthetic"],
    },
  },
};

export const pantsProperties = {
  bsonSchema: "number",
  additionalProperties: false,
  required: ["_id", "name", "color", "category", "size"],
  properties: {
    _id: {
      bsonType: "objectId",
    },
    name: {
      bsonType: "string",
      maxLength: 30,
    },
    color: {
      bsonType: "string",
      maxLength: 15,
    },
    category: {
      bsonType: "string",
      enum: ["pants"],
    },
    size: {
      additionalProperties: false,
      bsonType: "object",
      required: ["width"],
      properties: {
        width: {
          bsonType: "int",
          minimum: 32,
          maximum: 46,
        },
        cut: {
          bsonType: "string",
          enum: ["slim", "skinny", "regular", "straight"],
        },
      },
    },
  },
};

export const clothesValidator = {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      oneOf: [
        {
          bsonType: "object",
          properties: sweaterProperties,
        },
        {
          bsonType: "object",
          properties: shoesProperties,
        },
        {
          bsonType: "object",
          properties: pantsProperties,
        },
      ],
    },
  },
};

export function createClothesCollection(db: mongo.Db): Promise<mongo.Collection> {
  return db.createCollection("clothes", clothesValidator);
}
