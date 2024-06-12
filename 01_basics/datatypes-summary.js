// primitive datatypes - (passed by value)
/* 7 types
    String , number, boolean, null, undefined, symbol, BigInt

*/
   const id = Symbol('322')
   const anotherId = Symbol('322')
   console.log(id === anotherId); // false
   
   const bigNumber = 23423523423435253n

// non-primitive (passed by ref)
/*
    Arrays, Objects, Functions
*/
const heros= ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "archit",
    age: 22
}

const myFunction = function(){  // on printing typeof of this const we will get function so it is also called function object
    console.log("my function");
}

// ////////////////////////////////////////////////////

// memory allocation in javascript

// Stack (stores all primitive type)
// Heap (stores non-primitive type)

//example:
let myName = "Archit" // stored in stack as said

let anotherName = myName  // stord in stack as said and does not have refernce of myName rather it has copied value of myName stored in anotherName
console.log(anotherName); // Archit

anotherName = "Shiv"
console.log(anotherName); // Shiv

let userOne = {        // non - primitive type so stored in heap
    email : "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne // it stores refernce of userOne direct from heap space

userTwo.email = "archit@gmail.com"   // changed in both the variables
console.log(userOne.email); // "archit@gmail.com"
console.log(userTwo.email); // "archit@gmail.com"
