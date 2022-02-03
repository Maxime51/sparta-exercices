import { toWords } from ".";

describe("Fonction toWord", () => {
  test("Fonction return an array of string", () => {
    expect.assertions(2);

    expect(toWords("two words")).toStrictEqual(["two", "words"]);
    expect(toWords("High-tech product")).toStrictEqual(["High", "tech", "product"]);
  });
});
