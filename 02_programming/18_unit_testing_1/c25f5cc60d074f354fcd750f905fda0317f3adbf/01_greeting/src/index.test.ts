import { greet } from ".";

describe("Function greet :", () => {
  test("greet() return Hello WORLD!", () => {
    expect.assertions(1);

    expect(greet()).toBe("Hello WORLD!");
  });
  test("greet('Francis') return Hello FRANCIS!", () => {
    expect.assertions(1);

    expect(greet("Francis")).toBe("Hello FRANCIS!");
  });
});
