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


