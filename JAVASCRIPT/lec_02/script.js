// //In JavaScript, data types (datatypes) define the kind of value a variable can hold.
// //JavaScript is dynamically typed, meaning you don’t have to declare the type—it’s determined automatically.

// Primitive or non-reference:
// number,
// string, 
// boolean, 
// undefined, 
// null, 
// bigint,
// symbol

// Non-primitive or reference: 
// object,
// array,
// function .

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// non-reference-->
// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10
// console.log(b); // 20
// Yaha b ko copy mila hai, original a affect nahi hua.
// Ye actual value directly store karte hain.

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// reference-->Ye memory address/reference store karte hain.
// let obj1 = {
//     name: "Preksha"
// };
// let obj2 = obj1;
// obj2.name = "Riya";
// console.log(obj1.name); // Riya
// console.log(obj2.name); // Riya
// Yaha obj2 = obj1 ka matlab copy nahi bani, dono same object ko point kar rahe hain.

// let num=20;
// console.log(typeof(num));

// let str="codethread";
// console.log(typeof str);

// let bool=true;
// console.log(typeof bool);

// let b;
// console.log(b); //undefined-->Value not assigned yet

// let a=null;
// console.log(a); // null-->Means intentional absence of a value
// console.log(typeof a); //object

// let a=Symbol("codethread");
// console.log(a);


let big=BigInt(123);
console.log(big);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// objects-->data stored in key-value pair
let obj={
    name:"nishant",
    rollno:33,

};
console.log(obj);
console.log(typeof obj);

//Operators
// -->Arithemetic :+ - * / % **
//Assignment--> =  += -=
//logical--> && || !
//unirary-->x++ ++x x-- --x


let a = 10;
let b = "10";
console.log(a == b);   // true
console.log(a === b);  // false

// == (Loose Equality)
// Ye value compare karta hai, aur agar types different ho to type conversion (coercion) bhi karta hai

// === (Strict Equality)

// Ye value + datatype dono compare karta hai.
// Type conversion nahi hoti.

let v;
console.log(typeof(typeof(v)));