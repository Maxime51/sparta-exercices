import { helloSailor } from ".";

test("Console.log used", () => {
  expect.assertions(1);

  const spy = jest.spyOn(console, "log");

  helloSailor("Bob");
  helloSailor();
  expect(spy).toHaveBeenCalled();
});
