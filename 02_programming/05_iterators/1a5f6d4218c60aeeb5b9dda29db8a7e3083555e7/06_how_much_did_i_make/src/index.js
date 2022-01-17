function howMuchDidIMake(invoices) {
  // Code here
  const listYourself = invoices.filter(list => list.waiter === "Yourself");
  const tipResult = listYourself.map(tip => tip.tip);
  const getSum = (a, b) => a + b;

  const sum = tipResult.reduce(getSum,0);
  return sum;

}

const invoices = [
  { clients: 3, waiter: "Yourself", price: 5100, tip: 200 },
  { clients: 2, waiter: "Dominique", price: 2200, tip: 50 },
  { clients: 2, waiter: "Yourself", price: 2900, tip: 100 },
];

// Do not remove the following line, it is for tests
module.exports = howMuchDidIMake;
