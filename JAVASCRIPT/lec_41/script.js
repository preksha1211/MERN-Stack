const fruits = ['banana','apple','peach','mango','grapes'];

// for(i=0;i<fruits.length;i++){
//     console.log(fruits[i]);
// }

for(let a of fruits){
    console.log(a);
}


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//for...in loop objects ke liye hota hai — keys iterate karta hai.

const user = { name: "Preksha", age: 21, city: "Lucknow" };

for (let key in user) {
  console.log(key);         // name, age, city
  console.log(user[key]);   // Preksha, 21, Lucknow
}



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var — function scoped, loop ke bahar bhi accessible
for(var i = 0; i < 3; i++) {}
console.log(i); // (leak hota hai!)

// let — block scoped, loop ke bahar nahi
for(let i = 0; i < 3; i++) {}
console.log(i); //  ReferenceError

// const — loop mein use nahi kar sakte i++ ke saath
for(const i = 0; i < 3; i++) {} //  Error, i change nahi ho sakta


for(const key in obj) {
    console.log(key); // ✅ works!
}