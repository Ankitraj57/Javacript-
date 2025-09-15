// for(let i=1; i<=5; i++){
//     console.log("i = ", i);
// }

// let sum = 0;
// let n = prompt("enter n :");
// for(let i=1; i<=n; i++){
//     sum = sum + i;
// }
// console.log("sum = ", sum);

// let i = 1;
// while(i<=5){
//     console.log("ankit");
//     i++;
// }

// let i = 1;
// do{
//     console.log("ankit kumar");
//     i++;
// }while( i<=10);

//for-of-loop
/*let str = "AnkitKumar";

let size = 0;
for(let val of str){
    console.log("val = ", val);
    size++;
}
console.log("string size = ", size);*/

//for-in-loop

let student = {
    name : "Rahul Kumar",
    age : 25,
    cgpa : 8.5,
    isPass : true
};

for(let key in student){
    console.log(key,":", student[key]);
}