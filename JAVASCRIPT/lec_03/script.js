// let age=18;
// if(age >= 18){
//     console.log("you are aligible for voting");
    
// }else{
//     console.log("pehele 18 ka ho ja");
    
// }


// else-if

// let age=34;
// if(age<=10){
//     console.log("chotta bacha");
// }else if(age>=11 && age<=17){
//     console.log("thoda bada baccha");
    
// }else if(age>=18 && age<=30){
//     console.log("paisa");
    
// }else{
//     console.log("maje lo");
    
// }

// Switch case

// let expression= '=';
// let num1=10;
// let num2=20;

// switch(expression){
//     case '+' : console.log(num1+num2);
//               break;
//     case '-' : console.log(num1-num2);
//               break;
//     default : console.log("choose correct operator");
    
// }

//working of strict equality
// let n1=4;
// let n2='4';
// if(n1==n2 && typeof(n1)==typeof(n2)){
//     console.log("true");
// }else{
//     console.log("false");
    
// }

//for-Loop
// for(let i=1; i<=5; i++){
//     console.log(i);
// }

//table
// for(let i=1; i<=10; i++){
//     console.log(i*3);
// }

//while loop

// let i=1;
// while(i<=10){
//     console.log(i);
//     i++;
    
// }

//do-while loop

// let i=1;
// do{
//     console.log(i);
//     i++;
// }while(i<1);

//ternary operator
//condition ? exp1 : exp2;
// console.log(4 <  9 ? "false" : "true");

//break-->nearest loop se bahar aa jao
// for(let i=0 ;i<10 ;i++){
//     if(i==4){
//         break;
//     }
//     console.log(i);
// }

//continue
// for(let i=0 ;i<10 ;i++){
//     if(i==4){
//         continue;
//     }
//     console.log(i);
// }

// let n=2;
// while(n<=20){
//     console.log(n);
//     n=n+2;
// }

let i=1;
let sum=0;
while(i<=100){
    sum=sum+i;
    i++;
}
console.log(sum);