// 1. Global Scope
// Anywhere access kar sakte ho
name = "Preksha";
function greet() {
  console.log(name); // works ✅
}



// 2. Function Scope (var)
// Sirf function ke andar accessible
 greet() {
  var msg = "hello";
}
console.log(msg); // ReferenceError ❌


// 3. Block Scope (let/const)
// Sirf { } block ke andar accessible
 (true) {
  let x = 10;
}
console.log(x); // ReferenceError ❌


// var-->3,3,3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}

// let → 0,1,2 ✅
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}