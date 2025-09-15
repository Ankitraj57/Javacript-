// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + " from Apna College student";
// console.dir(h2.innerText);

// let divs = document.querySelectorAll(".box");

// let idx = 1;
// for(div of divs){
//     div.innerText = `new unique value ${idx}`;
//     idx++;
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


/*1.practice question */
let newBtn = document.createElement("button");
newBtn.innerText = "click me";

newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

/*2.practice question*/ 
let newpara = document.createElement("p");
newpara.innerText = "Ankit kumar singh";

newpara.style.backgroundColor = "green";
newpara.style.color = "#fff";

document.querySelector("p").prepend(newpara);

let footer = document.createElement("footer");
footer.innerText = "this is a footer section of this page";

footer.style.backgroundColor = "#0f1111";
footer.style.color = "#fff";
footer.style.height = "5rem";
footer.style.borderRadius = "3rem";
footer.style.textAlign = "center";

document.querySelector("body").append(footer);