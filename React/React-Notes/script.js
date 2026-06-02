// Imperative = HOW karna hai batao
// Declarative = WHAT chahiye batao

// Imperative — Vanilla JS
// js// Manually har step batao
// const div = document.createElement("div")
// div.className = "box"
// div.innerText = "Hello"
// document.body.appendChild(div)

// Tu khud DOM manipulate kar raha hai — har step tu likh raha hai

// Declarative — React
// js// Bas bata kya chahiye — React khud karega
// return <div className="box">Hello</div>

// Tu sirf bata kya dikhna chahiye — React khud handle karega!


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Why React? 

// Problem pehle samjho
// Facebook ne vanilla JS se apni website banai — time ke saath features badhte gaye:
// Features badhe 
//     → Codebase bulky ho gaya
//     → Maintain karna mushkil ho gaya
//     → UI aur Data sync karna problem ban gaya
//     → Performance affect hui
// Sabse bada problem tha — Data aur UI sync karna
// js// Vanilla JS mein — manually sab update karna padta tha
// let count = 0
// document.getElementById("counter").innerHTML = count

// count++
// document.getElementById("counter").innerHTML = count // manually update!
// Imagine karo 100 jagah same data use ho raha ho — har jagah manually update karo! 😵

// React ne kya solve kiya?
// 1. Component Based Architecture

// UI ko chhote chhote pieces mein todo karo
// Har piece independent hai — maintain karna easy!

// App
// ├── Navbar
// ├── Sidebar
// └── Feed
//     ├── Post
//     ├── Post
//     └── Post


// 2. Data aur UI automatically sync

// State change karo → UI khud update ho jaata hai
// Manually DOM touch karne ki zaroorat nahi!

// js// React mein — automatic sync!
// const [count, setCount] = useState(0)
// setCount(count + 1) // UI khud update ho jaayega




// 3. Virtual DOM

// React pehle Virtual DOM mein changes karta hai
// Phir sirf jo change hua wahi real DOM mein update karta hai
// Poora page reload nahi hota → Fast! ⚡

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// What is react-->open source frontend js library used to build complex ui specially single page applications

// SPA ek hi HTML page load karta hai aur baaki sab JavaScript dynamically render karti hai bina page reload ke."

// // Library vs Framework
// // The core difference is who's in control.
// // Library — you call it. You're in charge of the flow, and you reach for the library when you need it.
// // Framework — it calls you. The framework defines the structure; you fill in the blanks.
// // This is called Inversion of Control (IoC).

// Features of react-->
// -->component based architecture
// -->virtual dom-->iski wajah se rect fast h
// -->JSX-->js ke file k andar html likhna
// -->conditional rendering

// -->props state ke bina component nhi -->component k bina react nhi


// Bundlers
// aclass and function based components


//  react-->Core functionality
//  react DOM-->Web developement
//  React Native-->App development

// React.createElement(type, props, ...children)
// type ('div', 'h1') 
// props — attributes like className, onClick
// children --Andar ka content — text, aur elements

// Pehle React project setup karna bahut complex tha — Webpack config, Babel config, folder structure sab manually karo.
// CRA ek tool hai jo yeh sab automatically setup kar deta hai.

// create-react-app
//     ├── Webpack (bundler)
//     ├── Babel (JSX → JS)
//     ├── ESLint (code errors)
//     ├── Dev Server (local server)
//     └── Scripts (start, build, test)
   

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

// In react components are of two types :
// class based component
// function based component--just a function which return react element or html like code


// Babel
// JSX → Babel → React.Element (Object) → .render() → DOM

// JSX — HTML jaisa code jo hum likhte hain
// Babel — JSX ko JS mein convert karta hai
// React.Element — ek JavaScript object banta hai
// .render() — object ko DOM mein inject karta hai
// DOM — final output browser pe

//basically properties are custom attributes

// State in raect is data of a component
//hook hame kisi bhi function ki state ka access deta h kyuki functional component stateleass hote h\
//Basically hooks are the new features in react .they allow you to use
//state and other react features without writing a class
// class based component statefull hote h

// Agar tumhari app mein 100 jagah ek hi data show ho raha ho — DOM se 100 jagah manually update karo? 😭
// useState se? Ek baar setCount — sab update! 

// "Hooks are special functions in React that give functional components access to React features like state management, lifecycle methods, and help in keeping the data and UI layer in sync automatically."