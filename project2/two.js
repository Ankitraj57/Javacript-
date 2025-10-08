const form = document.querySelector("form")

form.addEventListener('submit', (e)=> {
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector("#result")

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight ${weight}`
    } else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)

        let category = '';
        if(bmi < 18.6) {
            category = "Under weight 😟"
        } else if (bmi >= 18.6 && bmi <= 24.9){
            category = "Normal weight 😊"
        } else {
            category = "Overweight 😬"
        }
        result.innerHTML = `<span>Your BMI is ${bmi} - ${category}</span>`;
    }
})