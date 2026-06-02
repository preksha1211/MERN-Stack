// Flow kuch aisa hota hai:
// index.html (id="root")
//     ↓
// main.jsx / index.jsx
//     ↓
// App.jsx
//     ↓
// Your Components


// JSX = JavaScript XML
// JavaScript ke andar HTML likhne deta hai!

// Ek parent element hona chahiye
// class ki jagah className likhte hain
// Self closing tags zaroori hain — <img /> not <img>
// JavaScript likhna ho toh {} curly braces use karo

In react components are of two types :
class based component
function based component--just a function which return react element or html like code


Babel
JSX → Babel → React.Element (Object) → .render() → DOM

JSX — HTML jaisa code jo hum likhte hain
Babel — JSX ko JS mein convert karta hai
React.Element — ek JavaScript object banta hai
.render() — object ko DOM mein inject karta hai
DOM — final output browser pe

