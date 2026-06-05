// Object Shallow Copy-->Naya object ya array banata h banta hai,
//  but only one level tak

// const copy = { ...obj };
// const copy = Object.assign(obj2, obj1);

// const obj1 = {
//   name: "Preksha",
//   address: {
//     city: "Lucknow"
//   }
// };

// const obj2 = { ...obj1 };
// obj2.address.city = "Delhi";
// console.log(obj1.address.city); // Delhi

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Array Shallow Copy

// Definition:
// Naya array banta hai, lekin nested arrays/objects ka reference copy hota hai.

// Methods
// const copy1 = [...arr];
// const copy2 = arr.slice();
// const copy3 = Array.from(arr);


// const arr1 = [1, 2, [3, 4]];
// const arr2 = [...arr1];

// arr2[2][0] = 100;

// console.log(arr1); // [1, 2, [100, 4]]
// console.log(arr1[2] === arr2[2]); // true



//////////////////////////////////////////////////////////////////////////
// let arr=[1,2,3,4];
// let newarr=[];
// newarr=[...arr]; //new array creeate hoga
// newarr.push(34);
// console.log(arr);
// console.log(newarr);


// let arr=[1,2,3,4];
// let newArr=[].concat(arr);
// arr.push(34);
// console.log(arr);
// console.log(newArr);

// let arr=['aa','bb','cc'];
// let myarr=arr.slice(); 
// console.log(myarr);