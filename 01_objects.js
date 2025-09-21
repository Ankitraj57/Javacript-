// singleton
/* object.create */

const mySym = Symbol("key1")

// object literals
const JsUser = {
    name: "Ankit",
    "full name": "Ankit Kumar",
    [mySym]: "mykey1",
    age: 18,
    location: "Dhanbad",
    email: "ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "ankit@yahoo.com"
// console.log(JsUser["email"]);

// Object.freeze(JsUser)
JsUser.email = "ankit@chatgpt.com"
// console.log(JsUser);

JsUser.greeting = function(){
    // console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    // console.log(`Hello JS user, ${this.name}`);
    
}

// console.log(JsUser.greeting);
// console.log(JsUser.greeting());

// console.log(JsUser.greetingTwo);
// console.log(JsUser.greetingTwo());

/*+++++++++++++++++++++ object part-2 +++++++++++++++++++++ */

// const  tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "ABC123"
tinderUser.name = "spidy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "spidy@gmail.com",
    fullname: {
        userfullname: {
            firstname: "ankit",
            lastname: "kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "ankit@gmail.com"
    },
    {
        id: 2,
        email: "ankit@gmail.com"
    },
    {
        id: 3,
        email: "ankit@gmail.com"
    }
    
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
