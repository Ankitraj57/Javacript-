const accountId = 123789
let accountEmail = "one12@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState; 

accountEmail = "two22@gmail.com"
accountPassword = "789456"
accountCity = "Dhanbad"


/*
Prefer not to use var 
because of issue in block scope and functional scope
*/ 
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])