//Crypto Module

//1.createHash
const crypto = require("crypto");

const hash = crypto.createHash("sha256");
console.log(hash);

const data = "hello234567";
const ans = hash.update(data);

console.log(ans.digest("hex"));

//2. randomInt

//Generate num betwwn 1-6 using crypto
// for (let i = 0; i < 5; i++) {
//   const num = crypto.randomInt(1, 7);
//   console.log(num);
// }
