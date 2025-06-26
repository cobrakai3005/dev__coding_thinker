// Arithmatic Operators + , -, /, %(Remainder), **(Exponential)

let a = 5;
let b = 10;
console.log("Addition is", a + b);
console.log(`Suntraction is ${a - b}`); //Template Literals

console.log(`Multiplication is ${a * b}`);
console.log(`Division is ${a / b}`);
console.log(`Modulo is ${a % b}`);
console.log(`Exponentials is ${a ** b}`);

//Math Object
console.log(Math.PI);
console.log(Math.floor(10 % 3));
console.log(Math.random());
console.log(Math.pow(10, 3));

for (let i = 0; i < 5; i++) {
  console.log(Math.floor(Math.random() * 1000));
}
