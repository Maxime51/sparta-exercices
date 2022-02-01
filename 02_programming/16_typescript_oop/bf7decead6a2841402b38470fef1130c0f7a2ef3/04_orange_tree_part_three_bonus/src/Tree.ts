// Paste your previous `Tree` class here.
abstract class Tree {
  protected _age: number;
  protected _height: number;
  protected _alive: boolean = true;

  constructor(age: number) {
    this._age = age;
    if (age === 0) {
      this._height = 0;
    } else if (age >= 1 && age <= 9) {
      this._height = 25 * age;
    } else if (age >= 10 && age <= 20) {
      this._height = 25 * 9 + 10 * (age - 9);
    } else if (age > 20) {
      this._height = 25 * 9 + 10 * 11;
    }
  }
  protected abstract _isAlive(): boolean;

  abstract ageOneYear(): void;

  seed(): void {
    this._age = 0;
    this._height = 0;
    this._alive = true;
  }
}
// Leave the line below for tests to work properly.
export { Tree };
