// array

const myArr1 = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "krish", "chota Bheem", "Ben 10", "Doremon"]

const myArr2 = new Array(1, 2, 3, 4, 5)
// console.log(myArr1[1]);

// Array methods

// myArr1.push(6)
// myArr1.push(7)
// myArr1.pop()

// myArr1.unshift(9)
// myArr1.shift()

// console.log(myArr1.includes(9));
// console.log(myArr1.indexOf(3));

const newArr = myArr1.join()

// console.log(myArr1);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

// console.log("A ", myArr1);

const myn1 = myArr1.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr1);


const myn2 = myArr1.splice(1, 3)
// console.log("C ", myArr1);
// console.log(myn2);


const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]
const indian_heros = ["krish", "shaltiman", "mr.India"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// spread operator
const all_new_heros = [...marvel_heros, ...dc_heros, ...indian_heros]
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Ankit"));
// console.log(Array.from("Ankit"));
// console.log(Array.from({name: "Ankit"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));





