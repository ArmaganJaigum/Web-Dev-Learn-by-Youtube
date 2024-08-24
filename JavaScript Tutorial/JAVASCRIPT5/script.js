//  Create my own function
// function myFunction(){
//     console.log("welcome to my Profile");
//     console.log("we learn js");
// }
// myFunction();

// function myFunction(msg){
//     console.log(msg);
// }
// myFunction("Mohammad");

//  Function  2 number sum

// function sum(a, b){
//     return a+b;
// }
// // Arrow function sum
// const arrowSum = (a, b) => {
//     return a+b;
// };
// // Multiplication function
// function mul(a, b){
//     return a*b;
// }
// //  Arrow multiplication function
// const arrowMul = (a, b) => {
//     return a*b;
// };


// // Practice set 1

// function countvowels(str){
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" ||
//             char === "u"
//         )   {
//             count++;
//         }
//     }
//     return count;
// }

// // Practce set 2

// const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(
//             char === "a" ||
//             char === "e" ||
//             char === "i" || 
//             char === "o" ||
//             char === "u"
//         )   {
//             count++;
//         }
//     }
//     return count;
// }

// For each loop in Array
// let arr =["pune", "Delhi", "mumbai"];

// arr.forEach(function printVal(val){
//     console.log(val.toUpperCase());
// });

// Practice set

// let nums = [2, 3, 4, 5, 6];

// nums.forEach((val) =>{
//     console.log(`Square of ${val} = ${val*val}`);
// });

// Filter Method

// let val = [2, 3, 4, 5, 6];

// let newArr = val.filter( (val) =>{
//     return val%2 ===0;
// });
// console.log(newArr);

// Reduce Method
// let array1 = [1, 2, 3, 4, 5, 6];

// const outpot = array1.reduce((prev, curr) => {
//     // return res+curr;
//     return prev > curr ? prev : curr;   // for -rint largest value
// });
// console.log(outpot);

// Practice student

// let marks = [89, 90, 98, 99, 100, 45];

// let topper = marks.filter((val) => {
//     return val > 90;
// })
// console.log(topper);


// Practice 2

let num = prompt("enter a number");

let arr = [];
for(let i=1; i<= num; i++){
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((prev, curr) => {
    return prev+curr;
});
console.log("Sum = ",sum);

let factorial = arr.reduce((prev, curr) => {
    return prev*curr;
});
console.log("factorial = ",factorial);