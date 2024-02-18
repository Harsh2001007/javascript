const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter - can be returned in new variable but not in case of forEach method
const filteredNums = myNums.filter((item) => item > 4);
console.log(filteredNums);

// return in case of forEach loop
const myNums2 = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

const numContainer = [];
myNums2.forEach((num) => {
  if (num > 50) {
    numContainer.push(num);
  }
});
console.log(numContainer);

// looping over arrays using filter
const books = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const filterGenre = books.filter((bk) => bk.genre == "History");
console.log(filterGenre);

const filterPublish = books.filter((bk) => {
  return bk.publish > 2009;
});
console.log(filterPublish);
