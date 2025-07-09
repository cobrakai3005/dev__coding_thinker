//1.Fasly Values

// 0;
// false;
// ("");
// null;
// undefined;
// NaN;

//2.Ternary Operators
//Syntax : condition ?  "truthy value"  : "falsy value"

//let x = 5 > 5 ? console.log("hello") : "by";

//3. nullish Operator
//?? -- A and B
// console.log("ram" ?? "shyam");
// console.log(null ?? "shyam");
// console.log(false ?? "shyam");
// console.log(undefined ?? "shyam");
// console.log("ram", undefined);
// console.log(null ?? undefined);

//If the first value is null or undefined  then the answere is second
//else first value is answer

//4 Rest and spread operators
//a. spread operattors

// let ar = [1, 2, 3, 4];
// console.log([...ar, 5]);

// let obj = {
//   a: 1,
// };

// console.log({ ...obj, b: 2 });

//b. Rest Operattor

// function add(x, ...y) {
//   console.log(y);
//   console.log(x);
// }

// add(1, 2);
// add(1, 2, 5);
// add(1);

//5. inBuilt function

// var num = 101;
// let bag = "";
// let ans = num + bag;
// console.log(ans);

// let ans1 = String(num)
// let ans2 = num.toString()

let str = "123";
let ans = parseInt(str);
let ans2 = Number(str);
let ans3 = +str;

//indexOf()

let arr = [1, 2, 3, 4];
console.log(arr.indexOf(3));
console.log(arr.indexOf(30));

//Split and join

let res = arr.join("[+]");
console.log(res);

res = "hello".split("");
console.log(res);

console.log([1, 2, 3, 4].unshift(6));
console.log([1, 2, 3, 4].shift());

//push() and pop()

//Slice and spilce
//copy methods

let b = [1, 2, 3, 4, 5];
let x = b.slice(2, 4);
console.log(x);
console.log(b);

//splice

let y = [21, 34, 78, 98, 56, 5];

let z = y.splice(2, 4);
//here 1s number is starting index
//2nd number is number of elment you want to delete
console.log(z);
console.log(y);

//toUpperCase() && toLowerCase()

let h = "heibjkds";

console.log(h.toLowerCase());
console.log(h.toUpperCase());
