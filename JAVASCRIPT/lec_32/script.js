
//Function Declaration-->fully hoisted
// Both declaration AND definition hoisted. Can call before it's written.

// greet(); // works!
// function greet() {
//   console.log("hi");
// }


// Function Expression (var)-->partially hoisted
// Variable is hoisted as undefined, function is NOT. Calling before declaration → TypeError.

greet(); // TypeError ❌
var greet = function() {
  console.log("hi");
}

var greet; // undefined
greet(); // TypeError!
greet = function() {
  console.log("hi");
}


Arrow Function (let/const)-->not hoisted (TDZ)

// Same as let/const — TDZ applies. Cannot call before declaration.
greet(); // ReferenceError 
const greet = () => console.log("hi");