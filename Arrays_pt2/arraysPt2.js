const marvel_heroes = ["thor", "ironman", "cap"];
const dc_heroes = ["batman", "superman", "flash"];

// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes);

marvel_heroes.concat(dc_heroes);

console.log(marvel_heroes.concat(dc_heroes));

console.log(Array.isArray(["bgmi", "pluto"]));
console.log(Array.isArray("hello"));
console.log(Array.from("i am batman"));
console.log(Array.of("hitesh"));
