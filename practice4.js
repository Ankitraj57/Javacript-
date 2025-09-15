/*//create a function using the "function" keyword that takes a string as an argument & returns the number of vowels in the String.
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }
    // console.log(count);
    return count;
}

//create an arrow function to perform the same task.
const countVow = (str) => {
    let count = 0;
    for (const char of str) {
        if (
            char === "a" || 
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ) {
            count++;
        }
    }
    // console.log(count);
    return count;
}
*/
/*
// for a given array of numbers, print the square of each value using the forEach loop.

let nums = [2, 3, 4, 5, 6];

// nums.forEach((num) => {
//     console.log(num*num);
// });

let calcSquare = (num) => {
    console.log(num * num);
};

nums.forEach(calcSquare);
*/
/*
// 1. 
let marks = [88, 75, 95, 94, 45, 93, 55, 65, 91, 90];

let toppers = marks.filter((val) => {
    return val >= 90;
});

console.log(toppers);
*/

//2.
let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i; 
}

console.log(arr);

let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(`sum : ${sum}`);

let fact = arr.reduce((res, curr) => {
    return res * curr;
});

console.log(`factorial : ${fact}`);