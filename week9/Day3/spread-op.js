//Spread Operator -- to copy element

let o1 = {
  a: 1,
};
let o2 = {
  b: 2,
  a: 3,
};
o1["d"] = 4;
o1["c"] = 3;
let o3 = { ...o1, ...o2 };
console.log(o3);
