// object freeze aur seal


// seal — naya add ya delete nahi kar sakte, but existing update ho sakti hai
// freeze — kuch bhi nahi kar sakte, full read-only

// const user = { name: "Preksha", age: 21 };
// Object.seal(user);
// user.name = "Riya";     //  Update hoga
// user.city = "Lucknow";  //  Add nahi hoga
// delete user.age;         //  Delete nahi hoga


// const user = { name: "Preksha", age: 21 };

// Object.freeze(user);

// user.name = "Riya";     // Update nahi hoga
// user.city = "Lucknow";  // Add nahi hoga
// delete user.age;         // Delete nahi hoga


// Object.isSealed(user);  // true/false
// Object.isFrozen(user);  // true/false
// Note: Frozen object always sealed bhi hota hai, but sealed object frozen nahi hota.


// Object.freeze(obj);
// Object.isSealed(obj); // true ✅
// Object.isFrozen(obj); // true ✅

// Object.seal(obj);
// Object.isSealed(obj); // true ✅
// Object.isFrozen(obj); // false ❌
// //  Dono shallow hain!
// Dono sirf top-level properties pe kaam karte hain:

// js
// const config = Object.seal({
//   db: { host: "localhost" }
// });

// config.db.host = "production"; // ✅ Ye change HO JAYEGA!
// Interview one-liner
// "seal() structure lock karta hai — add/delete band, but update allowed. freeze() sab kuch lock karta hai — full immutable. Dono shallow hain