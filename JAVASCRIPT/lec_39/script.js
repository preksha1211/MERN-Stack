// Function--> independently exist krta h;

function greet(){
    console.log("hello");
}
greet();

// Method-->jab function kisi object ke andar hota h as a key 
const obj = {
    hello:function(){
       console.log("hello");

    }
}
obj.hello();



// Har method ek function hai (kyunki andar se function hi hai)
// Har function method nahi  (kyunki wo kisi object se attached nahi)

// Ek real example — console.log() ye ek method hai, kyunki log function console object ke andar hai.
// Lekin tune khud likha function add() {} — ye sirf function hai, kisi object se attached nahi. 😊