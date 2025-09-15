// const employee = {
//     calcTax() {
//         console.log("tax rate is 10%");
//     },
// };

// const karanArjun = {
//   salary:50000,
//   calcTax() {
//     console.log("tax rate is 20%");
//   },
// };

// karanArjun.__proto__ = employee;

// class*/
// class ToyotaCar {
//     constructor(brand, mileage) {
//         console.log("creating new object");
//         this.brandName = brand;
//         this.mileage = mileage;
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
// }

// let fortuner = new ToyotaCar("fortuner", 10);
// let lexus = new ToyotaCar("lexus", 5);

/*Inheritance */
// class parent {
//     hello() {
//         console.log("hello");
//     }
// }

// class Child extends parent {}

// let obj = new Child();

// class Person {
//     constructor() {
//         this.species = "homo species";
//     }
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//         console.log("sleep");
//     }
// }

// class Engineer extends Person{
//     work() {
//         console.log("work");
//     }
// }

// class Doctor extends Person {
//     work() {
//         console.log("patients");
//     }
// }

// let shradhaObj = new Engineer();
// let ankitObj = new Doctor();


// class Person {
//     constructor(name) {
//         this.species = "homo species";
//         this.name = name;
//     }
//     eat() {
//         console.log("eat");
//     }
// }
// class Engineer extends Person{
//     constructor(name) {
//         super(name);
//         // this.branch = branch;
//     }
//     work() {
//         super.eat();
//         console.log("work");
//     }
// }
// let engObj = new Engineer("Ankit");

/*practice question */
//1.

// let Data = "secert Data";
// class User {
//     constructor(name, email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData () {
//         console.log("data = ", Data);
//     }
// }

// class Admin extends User{
//     constructor(name, email){
//         super(name, email);
//     }
//     editData() {
//         Data = "secert information ";
//     }
// }

// let student1 = new User("ankit", "ank12@email.com");
// let student2 = new User("krish", "kri12@email.com");

// let teacher1 = new User("Dean", "dean@college.com");

// let admin1 = new Admin("admin", "admin@email.com");

/*error handling*/

let a = 5;
let b = 10;
console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
try {

    console.log("a+b = ", a+c);
}
catch(err) {
     console.log(err);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);