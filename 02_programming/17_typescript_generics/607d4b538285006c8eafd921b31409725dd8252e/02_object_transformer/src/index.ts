type Product = {
  productName: string;
  quantity: number;
};

function productTransformer(objectProduct: Product): [string, string | number][] {
  const arrayReturn: [string, string | number][] = [["", 0]];
  arrayReturn[0] = ["productName", objectProduct.productName];
  arrayReturn[1] = ["quantity", objectProduct.quantity];

  return arrayReturn;
}
productTransformer({
  productName: "toto",
  quantity: 30,
});
// Leave the line below for tests to work properly.
export { productTransformer };
