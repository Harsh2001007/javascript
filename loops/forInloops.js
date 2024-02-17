const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
  swift: "swift by apple",
};

for (const key in myObj) {
  console.log(`${key} shortcut is for ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const item in programming) {
  console.log(programming[item]);
}

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");
map.set("IN", "India");

for (const key in map) {
  console.log(key);
}
