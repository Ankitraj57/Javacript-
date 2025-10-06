/*--------High Order Array loops----------*/

const { Languages } = require("lucide-react")

//1. for of
// ["", "", ""]
//[{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     // console.log(num);
// }

// const greetings = "Hello world!"

// for (const greet of greetings) {
//     if(greet == " "){
//     console.log("Each char is +");
//     continue;
// }
//     console.log(`Each char is ${greet}`);    
// }

// 2. Maps

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
// map.set('IN', "India")

// console.log(map);

// for (const key of map) {
//     console.log(key);
       
// }

// for (const [key, value] of map) {
//     console.log(`${key} :- ${value}`);
// }

// const myObject = {
//     game1 : 'NFS',
//     game2 : 'spiderman'
// }

// for (const [key, value] of myObject) { this loop is not working for this
//     console.log(`${key} :- ${value}`);
// }

// for-in loop
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
    
}

// const programming = ['js', 'rb', 'py', 'java', 'cpp']

// for (const key in programming) {
//     // console.log(programming[key]);
// }

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('FR', 'France')
// map.set('JP', 'Japan')
// map.set('CH', 'China')

// for (const key in map) {    
//     console.log(key);
// }

// forEach loop

const coding = ["js", "ruby", "java", "cpp", "python", "javascript"]

// coding.forEach( function (val) {
//     console.log(val); 
// })

// coding.forEach( (val) => {
//     console.log(val);
    
// })

// function printMe (item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, array)=> {
//     console.log(item, index, array);
// }) 

const myCoding  = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
    
})