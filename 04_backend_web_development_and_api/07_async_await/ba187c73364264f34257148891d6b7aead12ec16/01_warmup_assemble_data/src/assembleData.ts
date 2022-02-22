type Profile = {
  name: string;
  age: number;
  country: string;
  haveTraveled: boolean;
};

export function assembleData(
  listName: string[],
  listAge: number[],
  listCountry: string[],
  listHaveTraveled: boolean[],
): Profile[] {
  // Code here
  const arrayReturn = [];

  for (let i = 0; i < listName.length; i++) {
    arrayReturn.push({
      name: listName[i],
      age: listAge[i],
      country: listCountry[i],
      haveTraveled: listHaveTraveled[i],
    });
  }
  return arrayReturn;
}
