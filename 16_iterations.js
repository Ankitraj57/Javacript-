// for    

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(index); 
// }

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop  value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`);   
        // console.log(i + '*' + j + ' = ' + i*j)
    }
}

// let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);

// for (let i = 0; i< myArray.length; i++){
//     const element = myArray[i];
    // console.log(element);
// }                  


// break and continue

// for (let index = 0; index <= 20; index++) {
//     if (index == 5){
//         console.log("Detected 5");
//         break
//     }
//     console.log(`Value of i is ${index}`);   
// }

// for (let index = 1; index <= 20; index++) {
//     if (index == 5){
//         console.log("Detected 5");
//         continue
//     }
//     console.log(`Value of i is ${index}`);   
// }

// while loop

// let i = 0
// while (i <= 10) {
//     console.log(`Value of index is ${i}`);
//     i = i + 2
// }        

// let myArray = ["flash", 'batman', 'superman']

// let arr = 0
// while(arr < myArray.length) {
//     console.log(`Value is ${myArray[arr]}`);
//     arr = arr + 1   
// }

// DO while loop

let score = 1

do{
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);                   