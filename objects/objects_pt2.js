const pubgUser = {
  name: "poison",
  league: "ace",
  isT2Player: true,
  playingData: {
    s1: {
      topLeague: "ace",
      royalPass: true,
    },
    s2: {
      topLeague: "crown",
      royalPass: false,
    },
  },
};

const bgmiUser = {
  nameInBgmi: "for my pain",
  isMigrated: true,
};

// console.log(pubgUser.playingData.s2.royalPass);
const mergedData = Object.assign({}, pubgUser, bgmiUser);
// console.log(mergedData);
const spreadingObjects = { ...pubgUser, ...bgmiUser };
// console.log(spreadingObjects);

// console.log(Object.keys(pubgUser));
// console.log(Object.values(pubgUser));
// console.log(Object.entries(bgmiUser));
console.log(pubgUser.hasOwnProperty("isT2Player"));
