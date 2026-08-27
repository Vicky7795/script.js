const accountId = 45637;
let accountEmail = "vicky@gmail.com";
accountPassword = "123212";
accountCity = "mumbai";
let accountState;


console.log(accountId);

// Prefer not use to var 
// because issue of block scope 


console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
});