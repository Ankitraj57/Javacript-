//function -> 2 numbers, sum
/*
function sum (x, y) {
    //local variables -> scope
    s = x + y;
    return s;
}

let val = sum(3, 4);
console.log(val);
*/
/*
//sum function
function sum(a, b) {
    return a + b;
}
//multiplication function
function mul(a, b) {
     return a * b;
}

let val = sum(3, 5);
console.log(val);

let num = mul(3, 5);
console.log(num);
*/
/*
//sum function
function sum(a, b) {
    return a +b;
}
//Modern JS
const arrowSum = (a, b) => {
    // console.log(a + b);
    return a + b;
};

function mul(a, b) {
    return a *b;
}

const arrowMul = (a, b) => {
    // console.log(a * b);
    return a * b;
};
*/

//forEach Loop Arrays (forEach is a higher order function / methods)

let arr = ["Dhanbad", "Ranchi", "Bokaro", "Hazaribag"];

// arr.forEach(function printVal (val, idx, arr) {
//     console.log(val.toUpperCase(), idx, arr );
// });

arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});
