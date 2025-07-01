//JSON data vs js object
//Uuniversal data transformatino language
//JSON --> Javasccript object Notaion

const obj = {
  name: "love",
  age: 10,
};
console.log(obj, typeof obj);

const jsonData = '{"name": "love", "age": 10}';
console.log(jsonData, typeof jsonData);

//stringify
const json = JSON.stringify(obj);
console.log("json data", json, typeof json);

//parse method
let o = JSON.parse(json);

console.log("js objec data", o, typeof o);
