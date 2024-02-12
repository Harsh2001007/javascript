const arrOne = [1, 4, "hello", true, 100.45, undefined, 45, 189];

console.log(arrOne);
arrOne.push(4, 5, 6, false);
console.log(arrOne);
arrOne.pop();
console.log(arrOne);

const arrTwo = ["python", "java", "javascript", "ruby"];
console.log(arrTwo[2]);
arrTwo.unshift(1);
console.log(arrTwo);
console.log(arrTwo[2]);
arrTwo.shift();
console.log(arrTwo);

const originalArr = ["python", "java", "javascript", "ruby", "deno"];
console.log("A", originalArr);

console.log(originalArr.slice(1, 3));
console.log("B", originalArr);

console.log(originalArr.splice(1, 3));
console.log("C", originalArr);
