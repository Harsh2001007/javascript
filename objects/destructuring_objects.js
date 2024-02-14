const myObj = {
  name: "harsh",
  gamingName: "for my pain",
  isGamer: true,
  favGames: {
    mobile: {
      one: "genshin impact",
      two: "brawl stars",
      three: "bgmi",
    },
    consoleGames: {
      one: "cod",
      two: "assassins creed",
      three: "fifa",
    },
  },
};

// console.log(myObj);
const { gamingName, favGames } = myObj;
console.log(gamingName);
console.log(favGames);
