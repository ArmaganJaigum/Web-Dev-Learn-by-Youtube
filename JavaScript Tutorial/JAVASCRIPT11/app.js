// class ToyotaCar {
//     constructor(brand, milage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);  // constructor automaticaly created
// console.log(fortuner);
// let lexes = new ToyotaCar("lexes" , 20); // constructor
// console.log(lexes);

// Inheritance

// class Parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();

class Person {
    constructor(){
        this.species = "homo sepiens";
    }
    eat(){
        console.log("eat");
    }
    sleep(){
        console.log("Sleep");
    }
    work(){
        console.log("Do Nothing");
    }
}

class Engineer extends Person{
    constructor(branch){
        super();  // to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        console.log("Solve Probem Build Something");
    }
}

// class Doctor extends Person{
//     work(){
//         console.log("Treat Patient");
//     }
// }

let enggObj = new Engineer("chemical engg");
// let docObj = new Doctor();

// Error Handling

let a = 2;
let b = 3;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
console.log("a-b = ", a-b);
try{
console.log("a = ", c);
}
catch (err){
    console.log(err)
}
console.log("a = ", a);
console.log("a = ", a);
console.log("a = ", a);

