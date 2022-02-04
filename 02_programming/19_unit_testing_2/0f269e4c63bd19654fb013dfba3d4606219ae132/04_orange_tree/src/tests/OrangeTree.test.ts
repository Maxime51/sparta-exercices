import { OrangeTree } from "../OrangeTree";
import { Tree } from "../Tree";

describe("OrangeTree life", () => {
  beforeAll(() => {
    const tree = new Tree(1);
  });

  test("isAlive: a new tree should be alive", () => {
    expect.assertions(1);

    const tree = new OrangeTree(1);
    expect(tree.isAlive()).toEqual(true);
  });

  test("isAlive: a tree should not die before 50 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that
    // we grow until 50 years old in a loop.
    // We know that the death occur with a call to `Math.random` so we need to mock its result to always return 0:
    // That way, we make sure that if it could die, it would.
    // Replace `isAlive()` by a function that returns `true` if `this.age > 30` (for instance) and this test should fail
    expect.assertions(50);
    const spy = jest.spyOn(Math, "random").mockImplementation(() => 1);
    for (let i = 1; i <= 50; i++) {
      const tree = new OrangeTree(i);
      expect(tree.isAlive()).toEqual(true);
    }
  });

  test("isAlive: a tree should be dead before 101 years old", () => {
    // For this test, we want to check what happens if we create a tree of 1 year old that
    // we grow until 101 years old in a loop.
    // At the end, we should be sure that the tree is dead.
    expect.assertions(1);
    const tree = new OrangeTree(101);
    expect(tree.isAlive()).toEqual(false);
  });
});

describe("OrangeTree oranges", () => {
  test("pickAnOrange: we should not be able to pick oranges from a newly seeded tree", () => {
    // For this tests, `pickAnOrange` does not return anything but is using console.log, so don't forget to mock
    // and to call `mockRestore()` on your mock at the end of the test.
    expect.assertions(1);
    const tree = new OrangeTree(2);
    const spy = jest.spyOn(console, "log");

    tree.pickAnOrange();

    expect(spy).toHaveBeenCalledWith("There is no 🍊.");
  });

  test("pickAnOrange: we should be able to 10 oranges from a tree that starts at 4 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 9, that would mean we picked one.
    expect.assertions(2);

    const tree = new OrangeTree(4);
    tree.ageOneYear();

    expect(tree.oranges).toHaveLength(10);

    tree.pickAnOrange();
    expect(tree.oranges).toHaveLength(9);
  });

  test("pickAnOrange: we should be able to 20 oranges from a tree that starts at 10 years old that age one year", () => {
    // After picking an orange, we can check that the length of our `tree.oranges` array is only 19, that would mean we picked one
    expect.assertions(2);
    const tree = new OrangeTree(10);
    tree.ageOneYear();

    expect(tree.oranges).toHaveLength(20);

    tree.pickAnOrange();
    expect(tree.oranges).toHaveLength(19);
  });
});
