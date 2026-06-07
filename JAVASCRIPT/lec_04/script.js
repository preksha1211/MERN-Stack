//variables -->variables are the named memory location


// LET
// Scope → Block scope { } — sirf us block ke andar accessible
// Redeclare →  No — error aayega
// Reassign →  Yes — value change ho sakti hai
// Hoisting → Hota hai — but TDZ (Temporal Dead Zone) — access karo toh ReferenceError

// CONST

// Scope → Block scope { } — sirf us block ke andar accessible
// Redeclare →  No — error aayega
// Reassign → No — value change nahi ho sakti
// Hoisting → Hota hai — but TDZ (Temporal Dead Zone)


// VAR

// Scope → Function scope — poore function mein accessible
// Redeclare →  Yes — ho sakta hai (problematic!)
// Reassign → Yes — value change ho sakti hai
// Hoisting → Hota hai — undefined milta hai (error nahi aata)