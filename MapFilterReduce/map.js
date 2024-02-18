// maps - apply over each element; unlike filter(based on true and false)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const mappedNums = nums.map((item) => item * 10);
console.log(mappedNums);

// chaining with maps and filter

const nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chainedData = nums2
  .map((value) => value * 10)
  .map((value) => value + 1)
  .filter((value) => value > 50);

console.log(chainedData);
