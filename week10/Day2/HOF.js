//function with default paramerters
function add(x = 0, y = 0) {
  console.log(x + y);
}

add(1, 2);
add(1);

//Array HOF functon (MAp, REduce, Filter, Sort, ForEach)

//a Map
//Map is array higiher order functions taht  returns a nre array
//It is Useed to perform taskon eveery element
//The length of the resulting array is exactly equal to input array
//It return fixed size array
let ar = [10, 9, 8, 7, 6, 5, 4];

// ar.map((el, i, chintu) => {
//   console.log(el, i, chintu);
// });
// let ans = ar.map((el) => {
//   return el * 2;
// });
// console.log(ans);
// console.log(ar);

//2. Filter Method
//It is Higher order function nthat  reutuns new Array
//it is used to filter out elements baased on certain condition
//It return valriable size array

let ans = ar.filter((el) => {
  return el % 2 == 0;
});

console.log(ans);

console.log(ar);

//For Each Method
//It is Higher order function that is used to simpy iteration over an Array
let res = ar.forEach((el) => {
  return el;
});
console.log(res); // undefined  as it does not return any thing

//Sort Method
//Sprt is used to arrange el in ascending or descrning order

let nums = [-1, 2, 7, 3, 4, -66];

let descending = nums.sort((b, a) => a - b);
let ascending = nums.sort((a, b) => a - b);
console.log(descending);
console.log(nums);

let fruits = ["Apple", "banana", "apple", "Carrot"];
//localcompare()

//Reduce
//Reduce is array hof that is used ti return single value

let num = [1, 2, 3, 4, 6, 5];
//sum = ??

let sum = num.reduce((acc, el) => {
  return acc + el;
}, 0);
console.log(sum);

let arrrr = ["h", "e", "l", "l", "o"];

let hello = arrrr.reduce((acc, el) => {
  return acc + el;
}, "");



///Extra.  includes

//return T / F
let j = [1, 2, 3, 4, 5]
console.log(j.includes(6));
console.log(j.includes(4));
console.log(j.includes(1));
console.log(j.includes(66));
