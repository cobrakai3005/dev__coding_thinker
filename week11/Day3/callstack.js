//Call stack

function one() {
  console.log("1");
  second();
  console.log("2");
}

function second() {
  console.log("3");
  console.log("4");
}
