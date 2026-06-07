//"console.log general output ke liye, console.dir DOM elements ki properties explore karne ke liye use karte hain!"

// higher order function-->"A function that takes another function as argument OR returns a function"

// callback-->Function as argument
function greet(name, callback) {
  callback(name);
}
function sayHello(name) {
  console.log("Hello " + name);
}
greet("Preksha", sayHello); // Hello Preksha

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// closures--> Function return karna
function multiply(x) {
  return function(y) {
    return x * y;
  }
}
const double = multiply(2);
console.log(double(5)); // 10
console.log(double(3)); // 6


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Real life examples — ye roz use hote hain!
const nums = [1, 2, 3, 4, 5];

// map — har element pe function apply karo
nums.map(n => n * 2);        // [2,4,6,8,10]

// filter — condition ke basis pe filter karo
nums.filter(n => n > 2);     // [3,4,5]

// reduce — sab ko ek value mein compress karo
nums.reduce((acc, n) => acc + n, 0); // 15
// map, filter, reduce — ye sab HOF hain! 


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

a(function() {
  console.log('Hiiiii');
});

//"Anonymous functions wo functions hain jinका कोई naam nahi hota. Inhe variables mein store karke ya callbacks ke roop mein use karte hain!"