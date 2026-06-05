// Arrays functions
// pop () -->Last element remove karta hai aur removed element return karta hai.
// push()-->add element at the end
// shift() -->First element remove karta hai aur removed element return karta hai.
// unshift() --> add element at the front of the array
// Concat()-->Do ya zyada arrays ko merge karta hai. Original array change nahi hota.
// indexOf()-->Element ka index return karta hai. Nahi mila to -1.
// includes()-->Check karta hai element present hai ya nahi.
// reverse()-->Array ko reverse karta hai. Original array modify hota hai.
// sort()-->original arry modifies

// slice()-->Array ka portion copy karta hai. Original array change nahi hota.
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1, 4)); // [2, 3, 4]
console.log(arr); // [1, 2, 3, 4, 5]


// splice(start, deleteCount, items...)
// Elements remove/add karta hai. Original array modify hota hai.

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
console.log(arr); // [1, 4, 5]

let arr = [1, 2, 5];
arr.splice(2, 0, 3, 4);
console.log(arr); // [1, 2, 3, 4, 5]