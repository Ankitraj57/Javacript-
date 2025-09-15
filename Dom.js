// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myclass");
// console.dir(headings);
// console.log(headings);

// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// let firstElement = document.querySelector(".myclass");// 1st element
// console.dir(firstElement);

// let allElements = document.querySelectorAll(".myclass");//all elements
// console.dir(allElements);

// let buttons = document.querySelector("#myId");
// console.dir(buttons);

// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");

// let div = document.querySelector("div");
// console.log(div);

// div.style.visibility = "hidden";
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";

// div.innerText = "ankit";

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// let para = document.querySelector("p");
// console.log(para.setAttribute("class", "newclass"));

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// console.dir(newBtn);

// let div = document.querySelector("div");
//  div.append(newBtn);//add in last
//  div.prepend(newBtn);// add in start
//  div.before(newBtn);
// div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi, i am new!</i>";

document.querySelector("body").prepend(newHeading);

let para = document.querySelector("p");
para.remove();

newHeading.remove();