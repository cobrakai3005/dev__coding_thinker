// let st = "hello i am himanshu";

// function captilize(st) {
//   let ar = st.split(" ");
//   ar.forEach((el, index) => {
//     if (el.length > 0) {
//       ar[index] = el[0].toUpperCase() + el.slice(1);
//     }
//   });

//   console.log(ar);
//   return ar.join(" ");
// }
// console.log(captilize(st));

// function checkPrime(n) {
//   for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
//     if (n % i == 0) return false;
//   }

//   return true;
// }

// function primeTill(n) {
//   for (let j = 1; j < n; j++) {
//     if (checkPrime(j)) {
//       console.log(j);
//     }
//   }
// }

// primeTill(7);

// function countOcc() {
//   let count = 0;
//   for (let i = 0; i < st.length; i++) {
//     if (st[i] === " ") {
//       count++;
//     }
//   }
//   console.log(count + 1);
// }
// countOcc();

// let a = "heloo heloo i am himanshu himanshu";
// let ar = a.split(" ");
// let ob = new Map();

// ar.forEach(word => {
//     ob.set(word, (ob.get(word) || 0) + 1);
// });

// console.log(ob);;

let st = "a.b.c.d.e";

let ar = st.split(".");

let ob = ar.reduceRight((acc, el) => {
  return { [el]: acc };
}, {});
console.log(ob);
