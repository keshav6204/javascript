const accountId = 14453
let accountEmail = "Keshav@google.com"
var accountPassword = "6204"
accountCity = "jaipur"

// accountId = 6 // not allowed

accountEmail = "raj@google.com"
accountPassword = "8856"
accountCity = "Banglore"
console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope

*/



console.table([accountId, accountCity, accountEmail, accountPassword])