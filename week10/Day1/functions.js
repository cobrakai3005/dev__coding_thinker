//Functions
//a resusable block of code

//1.function declaration / function initialisation
function greet() {
  //Block Of code
  console.log("Hello");
}

greet(); //function calling /invoking

//Types of functions
//1. Regular function
//2. Arrow function

//Patterns in function

//1.function with no paramerters

function hi() {
  console.log("hi");
}

hi();

//2 function with with paramerters

function add(a, b) {
  //paramerter

  console.log(a + b);
}

add(1, 2); //arguements
add(6, 5); //arguement

//3. function with no parameters return  keyword
function hiii() {
  return "hiiii"; //return keyword
}

hiii();

//4.function with  parameters return  keyword

function sub(x, y) {
  return x - y;
}
console.log(sub());

//5 function expression / Method

let x = function ok() {
  console.log(ok);
};

console.log(x);
console.log(x()); //undiefined becoaus you not returning in function body;

//Arrow Function

//With no Parametere
let arrowFunction = () => {
  console.log("Hello Arrow Function");
};

arrowFunction();

//With Parameters

const addition = (a, b) => {
  console.log(a, b);
};


//With Parameters with return keyword

const multiply = (a, b) => {
    console.log("start");
  return a * b;
};

multiply(2, 7)
