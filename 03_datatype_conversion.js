let score = 22
console.log(typeof (score))
console.log(typeof score)

let score1 = "22abd"
console.log(typeof score1)

// to convert string into number
let valueInNumber = Number(score1)
console.log(typeof valueInNumber)
console.log(valueInNumber) // output : NaN
 
let score3 = null
let valuInnumber1 = Number(score3)
console.log(valuInnumber1)// it will gives value 0
console.log(typeof score3) // it will gives type object

let score4 = undefined
let valuInnumber2 = Number(score4)
console.log(valuInnumber2)// it will gives value NaN
console.log(typeof score4) // it will gives type undefined

let score5 = true
let valueInNumber3 = Number(score5)
console.log(typeof score5)
console.log(valueInNumber3)// gives 1
console.log(typeof valueInNumber3)

//"33" => 33  convert in number and give this value
//"33eqw" => NaN convert but give NaN
// true => gives 1
// false => gives 0


// to convert into boolean
let isloggedIn = 10
let booleanIsloggedIn = Boolean(isloggedIn)
console.log(booleanIsloggedIn)
//1 => true
//0 => false
//"" => false
//"<any_string>" => true
//" " => true

//to convert into string
let number = 22
let stringNumber = String(number)
console.log(stringNumber)