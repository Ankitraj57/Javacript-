function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
    
}
// sayMyName()

// function addTwoNumbers(a, b){
//     console.log(a + b);
// }
// addTwoNumbers(3, 5)  // output => 8
// addTwoNumbers(3, "5") // 35
// addTwoNumbers(3, "a") // 3a
// addTwoNumbers(3, null) // 3

function addTwoNumbers(a, b){
    // let result = a + b
    // return result
    return a + b
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username){
    return`${username} just logged in`
}

// console.log(loginUserMessage("ankit"));
// console.log(loginUserMessage());

function loginUserMessage(username = "bot"){
    if(username === undefined){
        // (!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
    // else{
    //     return `${username} jsut logged in`
    // }
}
// console.log(loginUserMessage("ankit"));

function calculateCardPrice(val1, val2, ...num1){ // ...num1 is a rest operator
    return num1
}
// console.log(calculateCardPrice(200, 400, 659, 999));

const user = {
    username: "ankit",
    price: 299
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
// handleObject({
//     username: "bheem",
//     price: 389
// })

const myNewArray = [200, 100, 400, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 300, 500, 700]));


