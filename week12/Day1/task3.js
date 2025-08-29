// make objectCreator2 DRY
// you may make modifications to objectCreator1 if required
// invoke objectCreator1 inside objectCreator2 in such a way that property1 to property5 are attached to the obj in objectCreator2


function objectCreator1(o,a, b, c, d, e) {
  let obj1 = o;
  
  obj1.property1 = a;
  obj1.property2 = b;
  obj1.property3 = c;
  obj1.property4 = d;
  obj1.property5 = e;
  
  return obj1;
}

function objectCreator2(a, b, c, d, e, f) {
  // obj2.property1 = a;
  // obj2.property2 = b;
  // obj2.property3 = c;
  // obj2.property4 = d;
  // obj2.property5 = e;
  obj2.property6 = f;

  return obj2; 
}

console.log(objectCreator2('a1', 'b1', 'c1', 'd1', 'e1', 'f1'));