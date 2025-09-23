// Immediately Invoked Function Expression (IIFE)
// iife is used tto protect the function from global pollution this is why we you iife

(function DB () {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('ankit')