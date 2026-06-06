const num1 = [1,2,3,4];
const num2 = [5,6,7,8,9];

const myName = 'Anurag';

const joinedArr = [...num1, ...num2, ...myName]
console.log(joinedArr);

const user = {
    name:'anurag',
    age:25
}

const updatedUser = {...user,city:'banglore'};
console.log(updatedUser);
