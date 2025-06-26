//1 Can Vt or not
let age = 18;

const canVote = age >= 18 ? true : false;

console.log("Can Vote", canVote);

//2 Even or odd;

let number = 17;
const evenOrOdd = number % 2 === 0 ? "Even" : "Odd";
console.log("EVen Or Odd", evenOrOdd);

//3Evaluate
console.log("ram" && "shyam"); //shyam
console.log("ram" && ""); //""
console.log("" && "shyam");
console.log("ram" && null); //null
console.log("ram" && 0); //0
console.log(0 && "shyam"); //0
console.log(5 > 4 && 3 > 1 && 2 > 1 && 4 < 1); //F

//4
let num = 33;
let isBetweenRange = num > 10 || num > 50;
console.log(isBetweenRange);

//5 pos and negative
let b = 20;
const isPositive = b >= 0 ? true : false;

//6 Neither null, nor undefined

let numm = 5678;
if (typeof num === "undefined" || typeof num === null) {
  console.log("NOo");
} else {
  console.log("Yes");
}
