//Asynchronous Programming language

const { useEffect } = require("react");

//Dynamic Type Programming Language

//Javascript  is a synchronous language
//it can perform asynchrous opertaion as well
//becouse of event loop js peroform asynchronous operation
//Asynchronous == a code which has some kind of delay
//example of asynchronous:
//1. Network calls
//2. Database connection
//3. Document api
//4. timers
//5. Promises

//Dynamically typed language

// var x = 10;
// console.log(x, typeof x);

//Hoisting
//Hoisting is  mechanism in which  variable created using var keyword and  reular function will get memory before declartion , only declation is hoisted not initialsation or assignment
//var -> undefined and  refular function func(){} allot memory

console.log(name); //undefined
var name = "love";
console.log(name);

console.log(age); //Error: Cannot access age before initialszation
let age = 23;
console.log(age);

// hello();//hello get memory
// function hello() {
//   console.log("hello");
// }

// hello();

hello(); //hello does not get memory
const hello = () => {
  console.log("hello");
};

hello();

//3. Lexical scope

//Lexical scope(visbility or accesibilty) lexical scope is decided  bby the position of variables during declaraion  time rather than runtime

function hello() {
  console.log(name);
  var name = "atul";

  console.log(name);

  if (true) {
    console.log(name); //
    console.log(age);//
    var age = 10;
    console.log(age);
  }

  console.log(name);
  console.log(age);
}

/*
      redclaration   reassignment hoisting  scope
var     yes            yes          yes       functional scope
let     no              yes          no        block scope
const   no             no           no       block scope


*/
