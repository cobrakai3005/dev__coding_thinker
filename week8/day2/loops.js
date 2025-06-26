//Repeatation of same sequence of code
//for loop
//1. Initialiseation/ dclrlaration
//2. condition
//3. steps// jump //increment
let str = "";
for (let i = 0; i < 5; i++) {
  //block of code
  str = str + i;
}
console.log(str);

//prime

function isPrime(num) {
  if (num === 1) return false;
  if (num === 2) return true;
  for (let index = 3; index <= Math.floor(Math.sqrt(num)); index = index + 2) {
    if (num % index == 0) return false;
  }

  return true;
}

for (let index = 0; index < 50; index++) {
  if (isPrime(index)) {
    console.log(index);
  }
}

//while loop
