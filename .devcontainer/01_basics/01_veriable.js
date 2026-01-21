const accountId = 123456
let accountEmail = "aditya458@gmail.com"
let accountCity = "bharatpur"
let accountPassword = "321001"
let accountName = "Aditya Sharma"

console.log(accountId);

console.table([accountId ,accountEmail, accountCity, accountPassword , accountName]);

accountEmail = "sharma458@gmail.com"
accountCity =  "jaipur"
 accountPassword = "346789"
accountName = "Ram Sharma"

console.table([accountId ,accountEmail, accountCity, accountPassword , accountName]);

/* prefer not use var 
bacause of isue in block scope and funstion scope */