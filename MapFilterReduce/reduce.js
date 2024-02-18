// Reduce method - needed accumulator which increases on every iteration

const bill = [
  {
    course: "javascript",
    price: 2000,
  },
  {
    course: "python",
    price: 1000,
  },
  {
    course: "Mongo",
    price: 1000,
  },
  {
    course: "typescript",
    price: 2000,
  },
  {
    course: "java",
    price: 3000,
  },
];

const totalBilledAmmount = bill.reduce((acc, item) => item.price + acc, 0);
console.log(totalBilledAmmount);
