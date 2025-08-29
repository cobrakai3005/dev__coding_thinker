//Currring
//Using Regular Function
function add(a) {
  return function (b) {
    return function (c) {
      return function (d) {
        return a + b + c + d;
      };
    };
  };
}

let a = add(1)(2)(3)(4);
console.log(a);

//Using Arrow  Function
let addd = (a) => (b) => (c) => (d) => a + b + c + d;
let anss = addd(1)(2)(3)(4);
console.log(anss);
