/*let heroes = ["ironman", "thor", "hulk", "shaktiman", "spiderman", "antman"];
for loop
for(let i=0; i<heroes.length; i++){
    console.log(heroes[i]);
}

for of loop
for(let el of heroes){
    console.log(el);
}
 */

/*
let cities = ["dehli", "pune", "mumbai", "dhanbad", "ranchi",];

for(let city of cities){
    console.log(city.toUpperCase());
}
*/

/*
let foodItems = ["potato", "apple", "litchi", "tomato"];

console.log(foodItems);
console.log(foodItems.toString());
let deletedItems = foodItems.pop();
console.log(foodItems);
console.log("deleted", deletedItems);
*/

/*

let marvelHeroes = ["thor", "spiderman", "ironman", "antman", "Dr.strange"];

marvelHeroes.unshift("antman");
let val = marvelHeroes.shift();
console.log("deleted", val);
console.log(marvelHeroes);
console.log(marvelHeroes.slice(1));
let heroes = marvelHeroes.concat(dcHeroes, indianHeroes);
let dcHeroes = ["superman", "batman"];
let indianHeroes = ["shaktiman", "krish"];


let arr = [1, 2, 3, 4, 5, 6, 7];

arr.splice(2, 2, 101, 102);

//Add Element
arr.splice(2, 0, 101);

//Delete Element
arr.splice(3, 1);

//Replace Element
arr.splice(3, 1, 101);

console.log(arr);
*/

//some  More Array Methods 
/* 1.MAP.
let nums = [67, 52, 39];

nums.map((val) => {
    console.log(val);
});


let newArr = nums.map((num) => {
    return num*2;
});

console.log(newArr);
*/

/*2. filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(evenArr);
*/

//3. Reduce.
let arr = [5, 6, 2, 1, 3];

const output = arr.reduce((res, curr) => {
    return res > curr ? res : curr; 
});

console.log(output);