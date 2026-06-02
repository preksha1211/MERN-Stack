// JavaScript creates an Execution Context with two phases —
//  Memory Creation Phase where all variables and functions are stored in memory before execution,
//   and Execution Phase where code runs line by line.
//  This is why hoisting happens."

// Phase 1 — Memory Creation Phase
// JS poora code pehle scan karta hai
// Saare variables aur functions ko memory mein store karta hai
// var ko undefined deta hai
// let / const ko TDZ mein rakhta hai
// Functions ko poora store kar leta hai

// Phase 2 — Execution Phase
// Code line by line run hota hai
// Values assign hoti hain
// Functions call hote hain


// Yahi reason hai ki var hoist hoke undefined deta hai — kyunki memory phase mein usse undefined assign hua tha!



// JS file run hoti hai
//         ↓
// Global Execution Context banta hai
//         ↓
// Call Stack mein push hota hai
//         ↓
// Phase 1 — Memory Creation
//         ↓
// Phase 2 — Execution
//         ↓
// Jab function call hota hai — naya Execution Context banta hai
//         ↓
// Woh bhi Call Stack mein push hota hai
//         ↓
// Function khatam — Call Stack se pop hota hai
//         ↓
// Wapas Global Execution Context
//         ↓
// Sab khatam — Global bhi pop — Stack khali!

// "When a JavaScript file runs, a Global Execution Context is created and pushed to the Call Stack. It has two phases — Memory Creation Phase where variables and functions are stored in memory, and Execution Phase where code runs line by line. When a function is called, a new Execution Context is created and pushed to the stack. When the function finishes, it is popped off the stack."