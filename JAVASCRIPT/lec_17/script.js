// JS mein Memory 2 jagah store hoti hai

// 1. Stack Memory

// Primitive values store hoti hain yahan
// number, string, boolean, null, undefined, bigint, symbol
// Direct value store hoti hai
// Fast access hota hai

// jslet a = 10
// let b = a   // b mein value copy ho gayi

// b = 20
// console.log(a) // 10 — a change nahi hua!
// console.log(b) // 20

// Primitive copy hoti hai — dono alag alag hain!


// 2. Heap Memory

// Non-primitive values store hoti hain yahan
// object, array, function
// Stack mein address (reference) store hota hai
// Heap mein actual data hota hai

// jslet obj1 = { name: "Preksha" }
// let obj2 = obj1   // address copy hua, value nahi!

// obj2.name = "Riya"
// console.log(obj1.name) // "Riya" — obj1 bhi change ho gaya!

// Dono same address point kar rahe the — isliye dono change ho gaye!


// Visual Samjho
// STACK              HEAP
// ------             ------
// a = 10             
// b = 20             
// obj1 = [ref] ───→  { name: "Riya" }
// obj2 = [ref] ───↗