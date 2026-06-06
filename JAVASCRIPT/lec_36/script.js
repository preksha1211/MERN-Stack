// callback-->kisi function ko pass krna as a argument

// function hello(para){
//     console.log("inside hello");
//     console.log(para);
//     para();
// }
// function cb (){
//     console.log("inside callback");
// }
// hello(cb);

// function hello(para){
//     console.log("inside hello");
     
//     para();
// }
// hello(()=>{
//     console.log("inside callback");
// })
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function fun1(text){
    function func2(){
        console.log(text);
    }
    return func2;
}
let res = fun1("from fun1");
res(); //prints from fun1
// but it pops from callstack still prints beacause closures returns function with its lexical scope

// Normally lagta hai ki fun1 call stack se remove ho gaya to text bhi destroy ho jana chahiye.
// Lekin JavaScript dekhti hai ki returned function (func2) abhi bhi text ko reference kar raha hai.
// Isliye JS text ko memory me rakhti hai aur func2 ke saath uska lexical environment preserve kar deti hai.
// Ye preserved combination:
// function + its lexical environment
// ko closure kehte hain.

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 //cLOSURES


 function fun1(text) {
  let a = 4;
  
  function fun2() {
    console.log(a + " " + text);
  }
  
  a = 50;        // a update ho gaya
  text = "nice"  // text update ho gaya
  return fun2;
}

let res = fun1("from fun 1");
res();