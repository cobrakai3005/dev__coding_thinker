//Conditional Statement
//when you want to control the flow of execution
//with certain condition to meet

//1. if Statement

//syntax

console.log("start");
if (isNaN(NaN)) {
  //if body//id block code
  console.log("hello");
}
console.log("end");

if ("") {
  console.log("byy"); // will not execute
}

//2.  if ...else statement
let age = 10;
if (age >= 5) {
  console.log("greater");
} else {
  console.log("smaller");
}

//3. if .. elseif .. else statment

let num = 4;
if (num < 0) {
  console.log("Negative");
} else if (num == 0) {
  console.log("zero number");
} else {
  console.log("postive");
}

//Trfic light program

let light = "red";

if (light === "red" && light === "yellow") {
  console.log("stop");
} else {
  console.log("go");
}

//4.  if ....if .... if statement

if (true) {
  console.log("one");
}

if (0.1 + 0.2 == 0.3) {
  console.log("two");
}

if ("hello" == !undefined) {
  console.log("three");
}
if ("hello") {
  console.log("four");
}
