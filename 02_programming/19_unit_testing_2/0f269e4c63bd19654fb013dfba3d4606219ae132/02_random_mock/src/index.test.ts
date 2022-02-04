import { getRandomUser } from ".";

test("User Frida random", () => {
  expect.assertions(6);

  const random = jest.spyOn(Math, "random");
  random.mockImplementation(() => 0.2);

  const fonction = getRandomUser(["Frieda", "Francis", "Frederic"]);

  expect(fonction).toBe("Frieda");
  expect(fonction).toBe("Frieda");
  expect(fonction).toBe("Frieda");
  expect(fonction).toBe("Frieda");
  expect(fonction).toBe("Frieda");
  expect(fonction).toBe("Frieda");

  random.mockRestore();
});
test("User Francis random", () => {
  expect.assertions(6);

  const random = jest.spyOn(Math, "random");
  random.mockImplementation(() => 0.6);

  const fonction = getRandomUser(["Frieda", "Francis", "Frederic"]);

  expect(fonction).toBe("Francis");
  expect(fonction).toBe("Francis");
  expect(fonction).toBe("Francis");
  expect(fonction).toBe("Francis");
  expect(fonction).toBe("Francis");
  expect(fonction).toBe("Francis");

  random.mockRestore();
});

test("User Francis random", () => {
  expect.assertions(6);

  const random = jest.spyOn(Math, "random");
  random.mockImplementation(() => 1);

  const fonction = getRandomUser(["Frieda", "Francis", "Frederic"]);

  expect(fonction).toBe("Frederic");
  expect(fonction).toBe("Frederic");
  expect(fonction).toBe("Frederic");
  expect(fonction).toBe("Frederic");
  expect(fonction).toBe("Frederic");
  expect(fonction).toBe("Frederic");

  random.mockRestore();
});
