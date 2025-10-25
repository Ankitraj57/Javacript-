const discripter  = Object.getOwnPropertyDescriptor(Math, 'PI')

// console.log(discripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const obj = {
    name: 'ginger chai',
    price: 250,
    isAvailabe: true,

     orderChai: function(){
        console.log("object is not define");
        
     }
}

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));


Object.defineProperty(obj, 'name', {
    // writable: false,
    enumerable: true
})

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));


for (let [key, value] of Object.entries(obj)) {
    if (typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }    
}