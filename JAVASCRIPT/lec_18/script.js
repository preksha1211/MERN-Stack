// There is only one type of non primitive data type that is called object 
// obects are futher divided into three categories
// -->Object Literals 
// -->Arrays
// -->Functions
// Non-primitives are compared by addresses and primitives are compared by values
let obj1={};
let obj2=obj1;
console.log(obj1===obj2); //true
//because it is  passed by reference both have same memory location 

let obj3={};
let obj4={};
console.log(obj3===obj4); //faslse
//because objects are compared by address and
//  objects has different address instead of same value

const user2 = {
    firstName:'preksha',
    lastName:'gupta',

}
console.log(user2.firstName);
console.log(user2.lastName);
console.log(user2.age); //undefiened
user2.age=26;
console.log(user2.age); //26