const user = {
    username: "Ankit",
    age: 18,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        // console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "krish"
// user.welcomeMessage()

// console.log(this);

// function one() {
//     let username = "ankit"
//     console.log(this);
//     console.log(this.username); -> undefined
    
// }
// one()

// const one = function () {
//     let username = "ankit"
//     console.log(this.username);    
// }

const one = () => {
    let username = "ankit"
    console.log(this.username);
    console.log(this);
    
}
// one()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 5));

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "ankit"})

console.log(addTwo(3, 5));

