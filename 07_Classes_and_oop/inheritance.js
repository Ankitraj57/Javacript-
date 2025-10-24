class User {
    constructor(username) {
        this.username = username
    }  
    
    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(` A new course was added by ${this.username}`);
    }
    addEmail(){
        console.log(`Email :- ${this.email}`);
        
    }
}

const chai = new Teacher("chai", "chai@gmail.com", "123");

chai.addCourse()
// chai.addEmail()
// chai.logMe()

const coffee = new User("Coffee")

coffee.logMe()

console.log(chai instanceof User);
