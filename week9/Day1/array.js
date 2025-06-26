//Array is collection of values
let ar = ["hello", 2, true, undefined, 5];
///Array is collectionof diferent data type
// It has ordered memory allocation
//index/position

ar.push(20);
console.log(ar);

//mutable (changable)
//dynamic size

//CRUD
//Create Read Updae Delete

//Create

var arr = [1, 2, 3, 4, 5];

//Read
console.log(arr);

console.log(arr[6]);
console.log(arr.at(4));

//add / update using inbuilt method
arr.push(10); //add ringht had side

arr.unshift(10); //add left hand side  (at start)

//update arr using index
arr[2] = 100;

//4. delete / pop
// delete arr[0];

let x = arr.pop(); //right side delete

let y = arr.shift(); //left side delete

console.log(arr);
