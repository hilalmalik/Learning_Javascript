const accountid = 123456
let accountEmail = "hilal@google.com"
var accountPassword = "12345"
accountCity = "jaipur"

// accountid = 2 //not allowed
accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "delhi"
console.log(accountid);

/* prefer not to use Var because of issue in function of scope
*/

console.table([accountid, accountEmail, accountPassword, accountCity]);
