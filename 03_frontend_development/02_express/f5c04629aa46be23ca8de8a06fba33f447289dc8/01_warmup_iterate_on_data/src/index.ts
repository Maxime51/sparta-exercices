// Code here
type CustomerType = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
};
const array: CustomerType[] = [
  {
    id: 24,
    first_name: "toto",
    last_name: "bob",
    email: "toto@gmail.com",
    gender: "male",
  },
  {
    id: 32,
    first_name: "lara",
    last_name: "croft",
    email: "lara@gmail.com",
    gender: "female",
  },
  {
    id: 80,
    first_name: "papy",
    last_name: "mougeot",
    email: "papy@gmail.com",
    gender: "male",
  },
];

function getEmails(array: CustomerType[]): string[] {
  const tab: string[] = array.map((element) => element.email);
  return tab;
}

console.log(getEmails(array));
export { getEmails };
