//Execution Context
//Executoin context is the envirnment of of js in which is code is evaluted . it has three phases 1. Creatiion phase (hoisting ) 2.execcution phase (code run)  3. Distruction phase  (context remove).
//Every a funtion is called a new execution context is formed

first();
console.log("start");

function first() {
  console.log("name"); //error hoisting
  let name = "ram";
  second();
  console.log(name);
}
console.log("mid");
function second() {
  console.log(age);
  var age = 10;
  return age;
}
console.log(second());
console.log("end");
console.log(first());

/**
 start
 err

 und
 ram
start
mid
end
 */

/*
Two Phases
1. Memrory Phase / Creation Phase
first(){}
second(){}


2. Execution phase

first()

function exection context phase
    1. Memory Phase       |        2. Execution Phase
        name = ram          |
   second()            |
                          |
                          |
                          |
                          |
                          |

*/

//Closures [function + everything its lexical scope]
// Closures is function plus having its lexical scope

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

let ans = outer();

console.log(ans());
console.log(ans()); //it will know about the and the value of varibles inside the funtion
//when a funtion retirrn it having acces tio the variable in their outer scope

console.log(ans());

//Timers  / delay

//1. setTimeout()

setTimeout(() => {
  //block of code
  console.log("hello");
}, 4000);

//2. setInterval()

setInterval(() => {
  //block of code
  console.log("by");
}, 2000);

