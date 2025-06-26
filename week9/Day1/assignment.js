let names = ["Nobita ", "N", "nobody", "Shin", "Oswold"];

let count = 0;
names.forEach((el) => {
  if (el.startsWith("N") || el.startsWith("n")) {
    count++;
  }
});
// console.log(count);

let nums = [1, 2, 3, 4, 5];
nums.sort();
console.log("min", nums[0]);
console.log("max", nums[nums.length - 1]);

let max = nums[0];
let min = nums[0];

for (let el of nums) {
  if (el > max) {
    max = el;
  } else {
    min = el;
  }
}
console.log("max", max);
console.log("min", min);

let array = [1, 1, 2, 3, 3, 4, 4, 4];
let ans = [];
for (let el of array) {
  if (!ans.includes(el)) {
    ans.push(el);
  } else {
    continue;
  }
}
console.log(ans);

// remove duplicate ell
let arr1 = [1, 1, 2, 3, 4];

console.log([...new Set(arr1)]);
