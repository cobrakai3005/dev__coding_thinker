function IPhone(generation, color) {
  let obj = {};
  obj.generation = generation;
  obj.color = color;
  return obj;
}
let x = IPhone("1st", "Silver");
console.log(x);
