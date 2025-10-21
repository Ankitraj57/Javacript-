const user = {
    username: "ankit",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log("Got user dtails from database");
        console.log(`username: ${this.username}`);
        
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = new User("ankit", 12, "true")
const userTwo = new User("krish", 11, "false")
console.log(userOne);
console.log(userTwo);
               