// const students = [
//   { name: "Preksha", marks: 85 },
//   { name: "Riya", marks: 45 },
//   { name: "Aman", marks: 72 },
//   { name: "Rohit", marks: 38 },
// ];

// let arr = students
//        .filter(function(data){
//            return data.marks>=50
//        })
//        .map(function(data){
//         return data.name;
//        });


//        console.log(arr);


// const cart = [
//   { item: "Shoes", price: 999 },
//   { item: "Bag", price: 1499 },
//   { item: "Watch", price: 2999 },
//   { item: "Belt", price: 499 },
// ];

// let res=cart.reduce(function(acc,i){
//     return acc+i.price;
// },0);
// console.log(res);



// const orders = [
//   { item: "Shoes", price: 999, delivered: true },
//   { item: "Bag", price: 1499, delivered: false },
//   { item: "Watch", price: 2999, delivered: true },
//   { item: "Belt", price: 499, delivered: false },
// ];

// let res=orders.filter(function(data){
//     return data.delivered==true;
// }).
//  reduce(function(acc,i){
//     return acc+i.price;
// },0);
// console.log(res);


const students = [
  { name: "Preksha", marks: 85 },
  { name: "Riya", marks: 45 },
  { name: "Aman", marks: 72 },
  { name: "Rohit", marks: 38 },
  { name: "Sneha", marks: 90 },
];

let res=students.filter(function(data){
 return data.marks>=50;

})

let ma=res.reduce(function(acc,i){
    return acc+i.marks;
},0);

console.log(ma/res.length);
