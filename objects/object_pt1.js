const myObj = {
  name: "Harsh",
  "full name": "Harsh sachan",
  age: 22,
  email: "hs5686584@gmail.com",
  isLoggedIn: true,
  loggedInDays: ["mon", "sat", "thu"],
  greeting: function () {
    console.log("i am greeting one");
  },
};

console.log(myObj.name);
console.log(myObj["full name"]);
console.log(myObj.age);
console.log(myObj["age"]);
console.log(myObj.loggedInDays);

myObj.name = "no body";
console.log(myObj);
// Object.freeze(myObj);
myObj.age = 23;
console.log(myObj);

console.log(myObj.greeting());

myObj.greetingTwo = function () {
  console.log(`i am greeting two, nice to meet you ${this.name}`);
};
console.log(`obj --> ${myObj.age}`);

console.log(myObj.greetingTwo());
