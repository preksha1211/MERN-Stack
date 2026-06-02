//  ternary means three

let res=true ? 'anurag':100;
console.log(res);

const gender='g';
const userMessage = `${gender.toLowerCase()==='f'?'she':'he'} is a college student`;
console.log(userMessage);

let marks = 75

let grade = marks >= 90 ? "A" 
          : marks >= 75 ? "B" 
          : marks >= 50 ? "C" 
          : "F"

console.log(grade) // "B"