// ES6

// class User {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("krish", "krish@gmail.com", "123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function () {
    return `Password:- ${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `Username:- ${this.username.toUpperCase()}`
}

User.prototype.changeEmail = function () {
    return `Emai:- ${this.email}`
}

const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.changeUsername());
console.log(tea.encryptPassword());
console.log(tea.changeEmail());
