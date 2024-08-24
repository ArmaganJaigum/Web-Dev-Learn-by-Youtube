//Arithmetic operator
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b); b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("a ** b = ", a ** b); //5^2

// Unary operator
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// // a++;
// // console.log("a =", a);
// a--;
// console.log("a =", a);

// Assignment Operators
// let a = 5;
// let b = 2;

// console.log("a =", a, "& b =", b);
// a -= 2;
// b *= 4;
// console.log("a =",a,"b =",b);

// Comparision operator
// let a = 5;
// let b = 5;
// let c = "5";

// console.log("a == b  ", a == b);
// console.log("a === c", a === c);

// Logical Operator
// let a = 5;
// let b = 3;

// let cond1 = a > b;
// let cond2 = a === 8;
// console.log("cond1 || cond2 =", cond1 || cond2);

// Conditional Statement

// let age = 15;

// if(age > 18){
//     console.log("You can vote")
// } else {
//     console.log("You Can not do the vote")
// }

// Odd even chaque

// let num = 9;
// if(num%2 === 0){
//     console.log(num, "is even number");
// } else {
//     console.log(num,"is odd number");
// }

// > else-if Statement

// let age = 90;

// if(age<18){
//     console.log(age, "is Junior");
// } else if(age > 60){
//     console.log(age, "is senior");
// } else {
//     console.log(age, "is middle");
// }

// Ternarry operator
// let age = 20;
// age > 18 ? console.log("Mature") : console.log("tinneger");


//  Practice Set 1

// alert("hello"); // one time popup
// let input = prompt("Enter a number"); // to take input yo the user
// if(input%5===0){
//     console.log(input, "is a multiple of 5")
// } else {
//     console.log(input, "is not a multiple of 5")
// }

// > Practice set 2

let score = prompt ("enter your score (0-100):");
let grade = 0;

if(score >= 90 && score <= 100){
    grade = "A";
} else if (score >= 70 && grade < 90){
    grade = "B";
} else if (score >= 60 && grade < 70){
    grade = "C";
} else if (score >= 50 && grade < 60){
    grade = "D";
} else if (score >= 0 && grade < 50){
    grade = "F";
} 
console.log("according to your scores, your grade was : ", grade);