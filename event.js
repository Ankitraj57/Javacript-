let btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", (evt) => {
    console.log("button was clicked - handler1");
});

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler2");
});

const handler3 = () => {
    console.log("button1 was clicked - handler3");
};
btn1.addEventListener("click", handler3);

btn1.addEventListener("click", () => {
    console.log("button was clicked - handler4");
});

btn1.removeEventListener("click",handler3);

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// }

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

// let box = document.querySelector("div");
// box.onmouseover = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }