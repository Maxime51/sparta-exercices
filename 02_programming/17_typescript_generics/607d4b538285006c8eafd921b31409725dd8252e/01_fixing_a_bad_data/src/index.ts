const receivedObject: ReceivedObject = {
  a: "somestring",
  b: 42,
};

type ReceivedObject = {
  a: string;
  b: number;
};

function transformObject(object: ReceivedObject): (number | string)[] {
  const array: (number | string)[] = [object.a, object.b];

  return array;
}
console.log(transformObject(receivedObject));
// Leave the line below for tests to work properly.
export { transformObject };
