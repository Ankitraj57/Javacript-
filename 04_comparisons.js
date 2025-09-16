// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);

/* Avoid this type of comparisons

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

*/

// ===
// console.log("2" === 1);

//---------------------------------------

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubeName = "AnkitKumaryoutube.com"
let anotherName = myYoutubeName

anotherName = "ankitsinghyoutube.com"

console.log(myYoutubeName);
console.log(anotherName);

let userOne = {
    email: "userone@gmail.com",
    upi: "userone@ybl"
}

let userTwo = userOne

userTwo.email = "ankit@google.com"

console.log(userOne.email)
console.log(userTwo.email)