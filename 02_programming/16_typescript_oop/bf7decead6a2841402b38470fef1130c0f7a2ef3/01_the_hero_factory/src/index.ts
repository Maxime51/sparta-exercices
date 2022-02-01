// Code the class here.
class Hero {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHi(name: string): string {
    return `Ì'm ${name}`;
  }
}
// Leave the line below for tests to work properly.
const batman = new Hero("Batman");
export { Hero };
