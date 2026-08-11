const account_ID = 1234
let accountEmail = "ankit@gmail.com"
var accountPassword = "1234"
accountCity = "Jaipur" 
let accountState

// account_ID = 2 // not allowed
accountEmail = "ankit123"
accountPassword = "4321"
accountCity = "Bangalore"

console.log(account_ID);

// prefer no to use var 
// becausue of issue in block scope and functional scope
 console.table([account_ID , accountEmail , accountPassword , accountCity , accountState]);