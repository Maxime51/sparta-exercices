import { Tree } from "./Tree";

// Code your class here.
class OrangeTree extends Tree {
  oranges: string[] = [];

  ageOneYear(): void {
    this.age = this.age + 1;
    if (this.isAlive()) {
      if (this.age === 0) {
        this.height = 0;
      } else if (this.age >= 1 && this.age <= 9) {
        this.height = this.height + 25;
        this.growOranges();
      } else if (this.age >= 10 && this.age <= 20) {
        this.height = this.height + 10;
        this.growOranges();
      } else if (this.age > 20) {
        this.height;
        this.growOranges();
      }
    }
  }

  isAlive(): boolean {
    if (this.age < 50) {
      return (this.alive = true);
    } else if (this.age > 50 && this.age <= 100) {
      const randomNumber: number = Math.floor(Math.random() * (101 - this.age)) + this.age;
      if (randomNumber === 100) {
        return (this.alive = false);
      } else {
        return (this.alive = true);
      }
    } else {
      return (this.alive = false);
    }
  }

  growOranges(): void {
    this.oranges.splice(0, this.oranges.length);
    if (this.age >= 0 && this.age <= 4) {
      this.oranges;
    } else if (this.age > 4 && this.age <= 10) {
      for (let i = 1; i <= 10; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 10 && this.age <= 20) {
      for (let i = 1; i <= 20; i++) {
        this.oranges.push("🍊");
      }
    } else if (this.age > 20 && this.age <= 40) {
      for (let i = 1; i <= 5; i++) {
        this.oranges.push("🍊");
      }
    }
  }

  pickAnOrange(): void {
    if (this.oranges.length === 0) {
      console.log("null");
    } else {
      this.oranges.pop();
    }
  }
}

// Leave the line below for tests to work properly.
export { OrangeTree };
