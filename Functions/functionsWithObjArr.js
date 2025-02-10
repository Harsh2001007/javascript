const myObj = {
  name: "harsh",
  age: 22,
  isGamer: true,
};

function userDetails(passAnyObject) {
  console.log(
    `username is -> ${passAnyObject.name}. The age is --> ${passAnyObject.age} and gamer status is ${passAnyObject.isGamer}`
  );
}

// userDetails(myObj);

function totalCartPrice(...price1) {
  console.log(price1);
}

// totalCartPrice(300, 500, 700, 1000);

const arrToBePassed = [100, 200, 300, 400, 500,600];
function getSecondElement(arrName) {
  console.log(arrName[1]);
}

getSecondElement(arrToBePassed);
