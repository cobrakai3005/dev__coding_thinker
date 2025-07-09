//Logical operaters (and (&&), or (||), not(!))

//1. Not Operators -- t / f
console.log(!!!undefined); //t
console.log(!null); //t
console.log(!!"hello"); //t

console.log(!!!+"1a2b");
console.log(1 + 2 > !0);

// 2. AND Operators  --gives real values as an answer
//And Operatirs always search for falsey values and return and if it does not found and falsy value then it gives last values as a result
console.log("ram" && "shyam");

// 3. OR (||) Operators  --gives real values as an answer
//OR Opertaors always search for truthy values and returns it and if it does not found and truthy value then it gives last values as a result

console.log("ram" && "shyam");
console.log("" || false);

//Questions on && operator

console.log(!101 && undefined && !"hello" && 1 && true); //f
console.log(undefined && !!0 && !!1 && 1 && "hello"); //undefined
console.log("hii" && "" && false && !1 && 5 > 10); //""
console.log(6 >= -6 && !!!undefined && 0 == 0); //t
console.log(1 + 5 * 0 && !false && !"" && NaN && true); //NaN

//Questions on  || operator

console.log(!101 || undefined || !"hello" || 1 || true); //1
console.log(undefined || !!0 || !!1 || 1 || "hello"); //1
console.log("hii" || "" || false || !1 || 5 > 10); //"hii"
console.log(6 >= -6 || !!!undefined || 0 == 0); //t
console.log(1 + 5 * 0 || !false || !"" || NaN || true); //1

//Priority of logical operators
//Not > AND  > OR

///Mixture of (&& and OR)
console.log(("indrapuri" && 101 > 98) || (undefined && null) || (!!!"" && 0)); //t
console.log(
  true + 1 + "0" || (false && 0 < 0 && !"null" && "hello" == "Hello") || true
); //"20"
console.log("ram" || ("shyam" && !undefined) || (!!!true && "false")); //t
console.log((!!!0 && " " && isNaN(NaN) && 5 >= 5.5) || 101); //101

let x = (true && false) || true;
let y = (true || false) && true;
console.log(x == y); //f
true && true