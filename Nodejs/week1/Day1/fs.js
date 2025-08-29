// utf -> unicoded transformation format

const fs = require("fs");

// fs.readFile("./1.js", { encoding: "utf-8" }, (er, data) => {
//   if (er) {
//     console.log("Error in reading file");
//     return;
//   }

//   console.log(data);
// });
// fs.readFile("./1.js", (er, data) => {
//   if (er) {
//     console.log("Error in reading file");
//     return;
//   }

//   console.log(data);
// });
// fs.readFile("./1.js", "utf-8", (er, data) => {
//   if (er) {
//     console.log("Error in reading file");
//     return;
//   }

//   console.log(data);
// });

//2
// Read file sync

// const data = fs.readFileSync("./1.txt", "utf-8");
// console.group(data)

//3 write file

//fs.writeFile("./2.txt", "Himanshu");
// fs.writeFileSync("./2.txt", "Himanshu", (er) => {
//   if (er) {
//     console.log("Error in writing data");
//   } else {
//     console.log("Succesfully added");
//   }
// });

//Append file



// fs.appendFile("./2.txt", "\nData is here", (er) => {
//   if (er) {
//     console.log("Error in append ");
//   } else {
//     console.log("data updated");
//   }
// });


// fs.rename("./1.txt", "Notes.txt", (er) => {
//   if (er) {
//     console.log("Error in renamemin ");
//   } else {
//     console.log("file renamed");
//   }
// });


// fs.unlink("./dl.txt", (er) => {
//   if (er) {
//     console.log("Error in Deleting ");
//   } else {
//     console.log("file Deleted");
//   }
// });
//fs.unlinkSync("./dl.txt");
