const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'purple'){
        //     body.style.backgroundColor = e.target.id
        // }

        // switch case
        const color = e.target.id
        switch(color){
            case  "grey":
            case  "white":
            case  "blue":
            case  "yellow":
            case  "purple":
              body.style.backgroundColor = color
              break;
              default: 
              console.log("unknown color: ", color);
              
        }
    })
})