// let myName = "Ankit     "
// let mychannel = "ak.org  "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman", "batman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    batman: "bat",

    getSpiderpower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.ankit = function(){
    console.log(`ankit is present in all objects`);    
}

Array.prototype.heyAnkit = function(){
    console.log(`Ankit says hello!`);
    
}
// heroPower.ankit()
// myHeros.ankit()
// myHeros.heyAnkit()
// heroPower.heyAnkit()

// Inheritance

const User = {
    name: "Ankit",
    email: "ankit@google.com"
}

const Teacher = {
    makeVideo: true
}

const  TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "Ankit   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength();
"krish Kumar".trueLength();
"iceTea".trueLength();