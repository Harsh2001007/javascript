//for of loop

//["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5];
const heros = ["flash", "superman", "batman"];

for (const item of heros) {
  //   console.log(`hello Mr. ${item}`);
}

//maps
const demoMap = new Map();
demoMap.set("IN", "India");
demoMap.set("UK", "United Kingdom");
demoMap.set("FR", "France");
demoMap.set("Por", "Portugal");

console.log(demoMap);
for (const [key, value] of demoMap) {
  console.log(key, ":-", value);
}

const myObj = {
  game1: "NFS",
  game2: "Max payne",
};

// not iterable - objects
for (const [key, value] of myObj) {
  console.log(key, value);
}
