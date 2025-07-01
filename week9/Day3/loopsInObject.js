let obj = {
  name: "iron man",
  age: 59,
  city: "Taxas",
  address: {
    state: "taxas",
    pin: 123,
  },
  movies: ["iron man1", "avengers", "marval"],
};

//Loop For .. in loop
for (let key in obj) {
  console.log(key);

  //In some cases .notation wont work these are some cases specially in a loop
  console.log(obj.key); //undefinded
  console.log(obj["key"]); //undefined
  console.log(obj[key]); // You will get your answer
}

let ar = [1, 1, 1, 2, 2, 3, 4, 4, 5, 6];

/*

{
1:3, 2: 2, 3:1, 4:2, 5:1, 6:1
}
*/

let lookup = {};
ar.forEach((el) => {
  if (!lookup[el]) {
    lookup[el] = 1;
  } else {
    lookup[el]++;
  }
});
console.log(lookup);

let str = "hello";
str = str.split("");

let look = {};
str.forEach((el) => {
  if (!look[el]) {
    look[el] = 1;
  } else {
    look[el]++;
  }
});

console.log(look);
