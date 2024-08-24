//  Loops in JS

//  > For Loop

// PRINT 1 TO 5
// for(let count=1 ; count <=5; count++){
//     console.log("Mohammad armagan Jaigum");
// }
// console.log("Loop hAS ENDED")

// Calculate some of 1 to 5

// let sum = 0;
// for(let i=1; i<=5; i++){
//     sum = sum+i;
// }
// console.log("Sum =",sum);
// console.log("Loop has ended")


// While Loop

// let i=0;
// while(i<=5){
//     console.log("i =",i)
//     i++;
// }


// Do While

// let i=1;
// do{
//     console.log("i =", i)
//     i++;
// } while (i<=5);


// >For-of loop

// let str = "MohammadArmaganJaigum"
// let size = 0;

// for(let val of str){          // itterator 
//     console.log("val =", val);
//     size++;
// }
// console.log("String size is = ", size)


// For in Loop

// let student = {
//     name : "Mohammad Armagan",
//     age : 21,
//     cgpa : 8,
//     isPass : true,
// };

// for(let key in student){
//     console.log("Key =", key, "Value =", student[key]);
// }


//  Practice Question 1 > Print all the even number from 0 to 100

// for(let num=0; num <=100; num++){
//     if(num%2!==0){
//     console.log("num =", num);
//     }
// }


// Practice 2 > Create a game number

// let gameNum = 25;
// let userNum = prompt("Guess the game number");

// while(userNum != gameNum){
//     userNum = prompt("You entered awrong number. Guss Again");
// }
// console.log("Congurutulation, you enter the right Nu");


//  STRING > Create String

// let str = "Mohammad";

// console.log(str[5]);

// Template literal

// let obj = {
//     item : "Pen",
//     price : 10,
// };
// let output = `the price of ${obj.item} is ${obj.price} rupees`
// console.log(output);
// let str = `Mohammad\nArmagan\nJaigum`  // For net line we use \n
// console.log(str)

// Upper Case or Lower Case
// let str = "  MohammadArmaganJaigum      ";
// str = str.toUpperCase();
// str2 = str.toLowerCase();
// str3 = str.trim();
// console.log(str);
// console.log(str2);
// console.log(str3);  // to erase all spaces in strat and last

// let str = "012345678";
// console.log(str.slice(2,5));

// let str1 = "Mohammad";
// let str2 = "Armagan";
// console.log(str1.concat(str2));
// console.log(str1 + str2);


// Practice set

let fullName = prompt("Enter Your Name without spaces");

let userName = "@" + fullName.toLowerCase() + fullName.length;
console.log(userName);