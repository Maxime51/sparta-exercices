type Person = {
  firstName: string;
  lastName: string;
};

export function parseName(name: string): Person {
  const cut = name.split(" ");
  return {
    firstName: cut[0],
    lastName: cut[1],
  };
}
