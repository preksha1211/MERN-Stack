// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task is completed");
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("promise consumed");
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async 2 resolved");
//         resolve();
//     },1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username: 'chai' , email: 'chai@gmail.com'})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

const promiseFour = new Promise(function(resolve,reject){
             setTimeout(function(){
                let error = true;
                if(error) {
                    resolve({username: "hitesh",password:"123"})
                }
                else{
                    reject("there is an error")
                }
             },1000)

})

// let res=promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username;
//     })
// console.log(res); //yaha error aaegi kyuki yeh promise 1 sec bad return hoga aur wo user print krega but user toh return hi nhi hua h abhi isiliye promise chaining use hoti hai jab result aae tab print kre

// Ek .then() se jo return karo — wo next .then() ko milta hai
// Agar return nahi kiya toh next .then() mein undefined aayega 

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username;
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(()=>{
//         console.log("the promise is resolved");
//     })

 //async -await
async function getData() {
    const user = await promiseFour;  // Promise ko await karo
    console.log(user.username);      // phir data use karo
}

getData();