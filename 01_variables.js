const accountId = 144553
let accountEmail = "saurabh@gmail.com"
var accountPassword = "12345"
accountCity ="jaipur"
let accountState; // print as ' undefined '

//  accountId = 2 // not allowed type error

accountEmail = "saurabh.dhokare@gmail.com"
accountCity = "kolhapur"

console.log(accountId)
console.log(accountEmail)
console.log(accountCity)
console.table([accountId,accountCity,accountEmail,accountPassword,accountState])
/*
prefer not to use var
becoz of issue in block scope and functional scope
*/

//var is function scope means you can use varible inside whole function
function test(){
    if (true){
        var x= 10
    }
    console.log(x)
}
test()

//let is block scoped means cannot access outside the block(if,for,while)

// if (true){
//     let y=20
//     }
// console.log(y) //reference error

// const must initialized at time of declaration
const x =20
console.log(x)

// const y;
// y = 30
// console.log(y) // syntax error
