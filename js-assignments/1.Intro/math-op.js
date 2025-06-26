// 1.
let num = 4;
num = num * 50;
console.log(num);

//2
let len = 5,
  bred = 10;
let area = len * bred;
console.log("Area of rectangle", area);

//3

let rem = 25 % 4;
console.log("remainder", rem);

let otp1 = Math.floor(Math.random() * 1000);
let otp2 = Math.ceil(Math.random() * 1000);
console.log("OTP: ", otp1, otp2);

// 4
function progran(num) {
  return num * num + 10;
}
progran(5);

//5

let radius = 7;
const circleArea = Math.PI * (radius * radius);
console.log("circe Area", circleArea);

//6
let num1 = 10,
  num2 = 20;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

//7
let number = 1000;
//increase it by 10%
number = number * 1.1;

//8 Celsius to Farenheit
//formula °C = (°F − 32) x 5/9
// °F = (°C × 9/5) + 32

let cel = 23;

let far = cel * (9 / 5) + 32;
console.log("Farhenite", far);
