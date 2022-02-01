import { Tree } from "./Tree";

// Code your class here.
abstract class OrangeTree extends Tree {
  protected _oranges: string[] = [];

  get oranges(): string[] {
    return this._oranges;
  }
  get age(): number {
    return this._age;
  }
  get height(): number {
    return this._height;
  }
  get alive(): boolean {
    return this._alive;
  }

  ageOneYear(): void {
    this._age = this._age + 1;
    if (this._isAlive()) {
      if (this._age === 0) {
        this._height = 0;
      } else if (this._age >= 1 && this._age <= 9) {
        this._height = this._height + 25;
        this.growOranges();
      } else if (this._age >= 10 && this._age <= 20) {
        this._height = this._height + 10;
        this.growOranges();
      } else if (this._age > 20) {
        this._height;
        this.growOranges();
      }
    }
  }
  isAlive(): boolean {
    if (this._age < 50) {
      return (this._alive = true);
    } else if (this._age > 50 && this._age <= 100) {
      const randomNumber: number = Math.floor(Math.random() * (101 - this.age)) + this.age;
      if (randomNumber === 100) {
        return (this._alive = false);
      } else {
        return (this._alive = true);
      }
    } else {
      return (this._alive = false);
    }
  }
  growOranges(): void {
    this._oranges.splice(0, this._oranges.length);
    if (this._age >= 0 && this._age <= 4) {
      this._oranges;
    } else if (this._age > 4 && this._age <= 10) {
      for (let i = 1; i <= 10; i++) {
        this._oranges.push("🍊");
      }
    } else if (this._age > 10 && this._age <= 20) {
      for (let i = 1; i <= 20; i++) {
        this._oranges.push("🍊");
      }
    } else if (this._age > 20 && this._age <= 40) {
      for (let i = 1; i <= 5; i++) {
        this._oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    if (this._oranges.length === 0) {
      console.log("null");
    } else {
      this._oranges.pop();
    }
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
