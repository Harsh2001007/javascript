if (true) {
  let userName = "harsh";
  if (true) {
    let websiteName = "youtube";
    console.log(`${userName} : ${websiteName} `);
  }
  //   console.log(websiteName);
}

// arrow function

// console.log(addTwoNum(5, 5));
const addTwoNum = (num1, num2) => num1 + num2;
console.log(addTwoNum(5, 5));

console.log(addOneNum(5));
function addOneNum(num1) {
  return num1 + 1;
}

const myObj = {
  username: "harsh",
  age: 22,
  welcome: function () {
    return `Hi ${this.username}, welcome to the game`;
  },
};

console.log(myObj.welcome());
