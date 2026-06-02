// Almost. Bas ek small correction:

// React ke major phases:

// Render Phase
// Commit Phase
// 1. Render Phase

// Is phase me React decide karta hai ki UI kaisa dikhna chahiye.

// Iske andar render trigger hone ke common reasons:

// Initial Render → jab component first time mount hota hai.
// Re-render → jab:
// state change hoti hai (setState, useState)
// props change hote hain
// parent component re-render hota hai

// Render phase me React:

// component functions execute karta hai
// naya Virtual DOM create karta hai
// previous Virtual DOM se compare (reconciliation) karta hai
// 2. Commit Phase

// Agar render phase me changes milte hain to React:

// Actual DOM update karta hai
// Browser screen update hoti hai
// Effects run hote hain (useEffect)
// Flow
// Initial Render
//       ↓
// Render Phase
//       ↓
// Commit Phase
//       ↓
// UI Display

// State/Props Change
//       ↓
// Re-render
//       ↓
// Render Phase
//       ↓
// Commit Phase
//       ↓
// Updated UI



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// DOM vs Virtual DOM 🌐
// Real DOM (Document Object Model)
// Browser ka ek live representation hai tumhare HTML ka — ek tree structure jisme har element ek node hai.
// Problem with Real DOM:
// Jab bhi kuch change hota hai (e.g., ek button click), browser:

// Poora DOM update karta hai
// Recalculate karta hai styles
// Repaint karta hai screen

// Yeh process slow hai — especially jab frequent updates ho (like a todo list with 100 items).

// Virtual DOM
// React ka solution hai — ek lightweight JavaScript object jo real DOM ka copy hai, but memory mein rahta hai (screen pe nahi).
// How it works (3 steps):

// Render — React pehle Virtual DOM mein changes karta hai (fast, no painting)
// Diffing — Purana Virtual DOM vs naya Virtual DOM compare karta hai → sirf kya badla dhundhta hai
// Reconciliation — Sirf woh changed parts real DOM mein update karta hai aur uske children bhi


// Diffing 🔍
// Diffing matlab — "kya badla?" dhundhna, purane aur naye Virtual DOM ke beech.

// Kaise karta hai React?
// Jab state/props change hoti hai, React 2 Virtual DOM trees ke paas hota hai:
// OLD Tree          NEW Tree
//    div               div
//   /   \             /   \
//  h1   p            h1   p
// "Hi" "Old"        "Hi" "New"   ← sirf yeh badla
// React dono trees ko node by node compare karta hai — aur sirf p ka text update karega real DOM mein.

// React ke Diffing ke 2 Rules
// Rule 1 — Different element type = poora subtree replace
// jsx// Pehle
// <div><Child /></div>

// // Baad
// <span><Child /></span>  // div → span, toh Child bhi destroy & remount hoga
// Rule 2 — Same type = sirf attributes/content update
// jsx// Pehle
// <p className="old">Hello</p>

// // Baad
// <p className="new">Hello</p>  // sirf className update, element wahi rahega


// Virtual DOM se compare kyun, Real DOM se kyun nahi?
// Real DOM se compare karna slow kyun hota?
// Real DOM sirf ek HTML tree nahi hai — har ek node ke saath bahut saara extra baggage aata hai.

// State change
//      ↓
// Naya Virtual DOM banta hai  (old wala as it is rehta hai)
//      ↓
// Diffing — dono Virtual DOMs compare hote hain
//      ↓
// Reconciliation — sirf Real DOM mein changes apply hote hain
//      ↓
// Old Virtual DOM = Naya Virtual DOM ho jaata hai (sync)




// Mount → Component pehli baar DOM mein add hota hai
// Re-render → State/props change hone pe component function dobara run hota hai
// Paint → Browser screen pe actual pixels draw karta hai

// User action
//      ↓
// setState
//      ↓
// Re-render (page reload nahi!)
//      ↓
// Diffing
//      ↓
// Reconciliation
//      ↓
// Paint



//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Fiber ne kya enable kiya?
// Concurrent Mode → multiple updates ko prioritize karna
// Suspense → async loading handle karna
// Time Slicing → kaam ko frames mein todna taaki UI freeze na ho

// React Fiber = React ka reconciliation engine jo kaam ko chunks mein tod ke karta hai, taaki browser responsive rahe aur urgent updates pehle ho sakein.


// Reconciler = diffing karo, changes decide karo | Renderer = woh changes actually apply karo