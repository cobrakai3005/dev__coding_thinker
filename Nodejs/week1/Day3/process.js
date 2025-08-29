//Process
//process.argv  method usede to take user inoout r=through
//command line arguement

const process = require("process");

const argv = process.argv; //[]
const a = +process.argv[2];
const b = +process.argv[3];
const op = process.argv[4];
console.log(a, b, op);
// var res = 10;

switch (op) {
  case "+":
    // res = a + b;
    console.log(a + b);
    break;
  case "-":
    res = a - b;
    // console.log(res);
      console.log(a - b);
    break;
  case "*":
    res = a * b;
    // console.log(res);
      console.log(a * b);
    break;
  case "/":
    res = a / b;
    // console.log(res);
      console.log(a / b);
    break;

  default:
    break;
}

//2. randomInt
const crypto = require("crypto");
//Generate num betwwn 1-6 using crypto
// for (let i = 0; i < 5; i++) {
//   const num = crypto.randomInt(1, 7);
//   console.log(num);
// }
