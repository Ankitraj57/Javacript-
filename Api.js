const URL = "https://api.thecatapi.com/v1/images/search?limit=10";
const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
    console.log("getting data.....");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    factPara.innerText = data[1].url;
}

function getFacts() {
    fetch(URL)
    .then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
        factPara.innerText = data[1].id;
    });
}
btn.addEventListener("click", getFacts);