let a = "32"

console.log(typeof a) // string

let val = Number(a)
console.log(typeof a) // number

a = "23asdf"
val = Number(a)
console.log(typeof a) // NaN  -> not a number


// "32" => 32
// "32se" => NaN
// true =>1 false => 0

// Boolean(varName) to convert num to boolean 
// 1,2,3 .. => true 
// 0 => false
// "" => false
//  "asdf" => true

let num = 33
let str = String(num) // convvet to string



