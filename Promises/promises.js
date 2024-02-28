// const promiseOne = new Promise(function (resolve, reject) {
//   // Do async task
//   setTimeout(() => {
//     console.log("hello world");
//     resolve();
//   }, 2000);
// });

// promiseOne.then(function () {
//   console.log("promiseOne resolved");
// });

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("async task 2");
//     resolve();
//   }, 2000);
// }).then(() => {
//   console.log("async 2 is completed");
// });

// const promiseThree = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "pain", pStyle: "Suppoerter" });
//   }, 2000);
// });

// promiseThree.then((user) => {
//   console.log(user);
// });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "onyx", pStyle: "assaulter" });
    } else {
      reject("error:something went wrong");
    }
  }, 2000);
});
promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(error);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise is neither resolved nor rejected");
  });
