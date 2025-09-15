// let score = prompt("enter a score: ");

// if(score >= 90 && score <= 100){
//     console.log("A");
// }
// else if (score >= 70 && score <= 89) {
//     console.log("B");
// }
// else if(score >= 60 && score <= 69){
//     console.log("C");
// }
// else if(score >= 50 && score <= 59){
//     console.log("D");
// }
// else {
//     console.log("F");
// }

let score = prompt("enter score:");
let grade;

if(score >= 90 && score <= 100){
    grade = "A";
}
else if(score >= 70 && score <= 89){
    grade = "B";
}
else if (score >= 60 && score <= 69){
    grade = "C";
}
else if (score >= 50 && score <= 59){
    grade = "D";
}
else {
    grade = "F";
}

console.log("according to your score, your grade is : ", grade);