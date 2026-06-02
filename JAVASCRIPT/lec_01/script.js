// JavaScript is primarily an interpreted language, but interpretation makes it slow. So modern engines like V8 use JIT — Just In Time compilation, in which the engine identifies hot code and compiles it into machine code. This makes JavaScript execution much faster."

// "REPL stands for Read Eval Print Loop. Browser console is an example of REPL — whatever we type, it immediately reads, evaluates, prints the result, and waits for next input."

// NaN is not a valid number its type is number;
// console.log(parseInt('l78'));
// Number · String · Boolean · Undefined · Null · BigInt · Symbol

// null vs undefined

// null = developer ne khaali rakha  |  undefined = JS ne automatically set kiya

// null == undefined // true (loose)
// null === undefined // false (strict)
// typeof null — famous bug!

// typeof null // "object" ← JS ka bug hai!
// null actually object nahi hai — yeh JS ka purana bug hai jo aaj bhi hai

// Symbol hamesha unique hota hai

// Symbol("id") === Symbol("id") // false!
// BigInt — n lagao end mein

// 9999999999999999n // BigInt
// Normal number handle nahi kar sakta



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// programming language of two types:
// low level programming language-->machine freindly(01011)
// high level programming language-->human freindly(java,python)



// Interpreted Language-->Code line by line convert(compiled) + execute hota hai using an interpreter.
// Compiled--> LanguagePehle entire code machine code me convert hota hai (compiled) using a compiler, then execute hota hai.

// scripting language -->isliye bolte hain kyunki ye originally browsers ke andar small scripts likhne ke liye bani thi taaki webpage me behavior add ho sake.

// dynamically typed--> ka matlab hai ki variable ka data type pehle se declare nahi karna padta — runtime par value ke according type decide hota hai.

//single-threaded--> ek samay m ek hi kaam hoga

// syntax-->cheezo ke likhne ka tareeka



// methos to run js

//online ide
// Browser console → quick testing
// running JavaScript using Node.js
// using extension on vs code
// using script tag-->web page console pr


//methods to write js
// Inline → HTML tag ke andar directly
// Internal → same HTML file ke <script> tag ke andar
// External → separate .js file ko link karna

// Script me Body ke end me kyun?
// Browser pehle HTML content load kar leta hai, phir JavaScript run hoti hai.
// Isse page loading better hoti hai.

