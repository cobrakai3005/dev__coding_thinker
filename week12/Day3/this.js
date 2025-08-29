function sayHello(age) {
  console.log("hello", this, age);
}

let john = {
  name: "john",
};

sayHello.call(john, 10);
