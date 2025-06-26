let n = 5;
// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (let j = 0; j < n; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// let str = "";
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
//     str += "* ";
//   }
//   console.log(str);
// }

// let bag = "";
// for (let i = 0; i < 5; i++) {
//   bag += "* ";
//   console.log(bag);
// }
// console.log();

// for (let i = 0; i < n; i++) {
//   let str = "";
//   for (let j = 0; j <= i; j++) {
//     str += "*";
//   }
//   console.log(str);
// }
// console.log();
// for (let i = n; i >= 0; i--) {
//   let str = "";
//   for (let j = i; j >= 0; j--) {
//     str += "*";
//   }
//   console.log(str);
// }




// *****
// *   *
// *   *
// *   *
// *****


// for (let i = 0; i < 5; i++) {
//   let ans = "";
//   for (let j = 0; j < 5; j++) {
//     if (i == 0 || i == 4 || j == 0 || j == 4) {
//       ans += "*";
//     } else {
//       ans += " ";
//     }
//   }
//   console.log(ans);
// }

 

// *
// 1
// * *
// 1 2
// * * *
// 1 2 3

for (let i = 1; i < 5; i++) {
  let str = "";
  let num = "";
  for (let j = 1; j <= i; j++) {
    str += "*";
    num += j;
  }
  console.log(str);
  console.log(num);
}
