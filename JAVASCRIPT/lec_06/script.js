// Dialog Boxes-->there are three types of dialog Boxes
alert("your message goes here")
// 1. alert()
// Sirf ek message dikhata hai
// User ke paas sirf OK button hota hai
// Koi value return nahi karta

// 2. confirm()
// User se yes/no poochta hai
// OK dabao → true return karta hai
// Cancel dabao → false return karta hai
let result = confirm("Kya aap delete karna chahte ho?")
console.log(result) // true ya false

// 3. prompt()
// User se input leta hai
// User kuch type kare → woh string return karta hai
// Cancel dabao → null return karta hai
prompt("your message goes here")
let name = prompt("Apna naam batao?");
console.log(name); // jo user ne type kiya