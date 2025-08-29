//Event loop call stack, concurrent, single threaded;

setTimeout(() => {
  one();
  console.log(three());
}, 2000);
console.log("start");

function one() {
  console.log(name);
  var name = "iron man";
  three();
  console.log(name);
}

setTimeout(() => {
  two();
  console.log(one());
}, 5000);
console.log("mid");

function two() {
  console.log("err");
  let age = 20;
  return age;
}

function three() {
  console.log("hello from three function");
}

setInterval(() => {
  three();
}, 10000);

console.log("end");
