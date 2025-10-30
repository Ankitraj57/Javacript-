// class User {
//     constructor(email, password) {
//         this.email = email;
//         this.password = password;
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value
//     }

//     get password(){
//         return `${this._password}Ankit`
//     }

//     set password(value){
//         this._password = value
//     }
// }

// const ankit = new User("ankit@123", "1234")
// console.log(ankit.email);
// console.log(ankit.password);


// properties_get_set.js
// function User(email, password){
//     this._email = email;
//     this._password = password

//     Object.defineProperty(this, 'email', {
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email = value
//         }
//     })
//     Object.defineProperty(this, 'password', {
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }

// const chai = new User("ankit@google.com", "asdf")

// console.log(chai.email);
// console.log(chai.password);

// object_get_set.js
const User = {
    _email: 'ankit@facebook.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);

