let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
];

/* your code here */

console.log(newArr);
/*
Use proper array method such that the newArr becomes: 
 {John: 1, Pete: 2, Mary: 3}
 
Note: the order doesnot matter here. 

Problem Statement: you are expected to use of the array mehtods
to create a new object called newArr using the users Array.

the keys of the new object (newArr) would be the name of the user 
and the values would be the id of the user
*/

let users = [{ age: 16 }, { age: 20 }, { age: 23 }, { age: 30 }];

// [16, 20, 23, 30]

let newArr;

console.log(newArr); // [16,20,23,30]

/*
Problem Statement: 

Use proper array method such that the newArr becomes: 
 [16,20,23,30]
 
The newArr is simply an array of numbers, in this problem the ages of the users. 
*/

let data = [
  { name: "John", subject: "Javascript" },
  { name: "John", subject: "HTML" },
  { name: "John", subject: "CSS" },
  { name: "Pete", subject: "Java" },
  { name: "Pete", subject: "English" },
  { name: "Pete", subject: "Maths" },
  { name: "Mary", subject: "Rust" },
  { name: "Mary", subject: "Elm" },
];

console.log(ans);
/*
Expected output:
{
  John: ["Javascript", "HTML", "CSS"],
  Pete: ["Java", "English", "Maths"],
  Mary: ["Rust", "Elm"]
}
*/

/*
 - Use proper array methods to create an object from the data arrray.
 - from the data, the name would become the key of the new object.
 - keys must be unique, one key per user.
 - the value would be an array of their subjects.
*/

let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped =
  /* ... your code ... */

  /* 
end result/sample output: 
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

  console.log(usersMapped);

/*
 form a new array using the users array
 the new array is expected to have objects with the following properties:
  - fullName: <name><space><surname> 
  - id: <id>
 check the end result / sample output in the comment above. 
*/
