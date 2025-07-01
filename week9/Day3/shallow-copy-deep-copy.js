//Shallow Copy (reference copy) vs Deep Copy (deep copy)
/*
//shallow copy
  let obj = {a: 1};
  let obj1 = obj
  console.log(obj, obj1)

*/

//Deep copy
let obj = { a: 1 };
let obj1 = JSON.parse(JSON.stringify(obj));
console.log(obj, obj1);
