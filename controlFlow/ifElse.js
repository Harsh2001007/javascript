const isUserLoggedIn = true;

if (isUserLoggedIn) {
  console.log("user is logged in");
} else {
  console.log("user is not logged in");
}

const totalAmount = 400;
const salary = 1000;
const expense = 200;

function addTotalPrice(num1, num2, num3) {
  return num1 + num2 + num3;
}

if (addTotalPrice(totalAmount, salary, expense) < 1000) {
  console.log("total is less than 1000");
} else if (addTotalPrice(totalAmount, salary, expense) < 1600) {
  console.log("less than 1700");
} else {
  console.log("more than sufficient");
}
