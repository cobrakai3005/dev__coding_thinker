//Objects 
//object is collection of key - value pair
//key is always unique and valye may be duplicate
//Mutable (changable)
//loops (using keys)

//1. Create Object

// let o = {};

let obj = {
  name: "himanshu",
  age: 18,
  hobby: ["html", "css"],
  status: true,
  status: false,
};

//key --- is always string;
//value =- can be anything;

//Read
console.log(obj);
// 2 Method

//1 dot notaion
console.log(obj.name);

//2 bracket notaion

console.log(obj["name"]);

//3. Update

obj["age"] = 56; //update
obj.email = "helleo@Gmao..com"; // add

//Delete

delete obj["age"];

console.log(obj);
