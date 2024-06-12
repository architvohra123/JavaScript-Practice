const s = "hello" + "world"
console.log(s); // helloworld

console.log(s+50); //helloworld50

let n = 343
// new latest method of assigning String to a variable
console.log(`Hello my name is ${s} and my repo count is ${n}`);


// declare String
const name = new String('Archit')
// it gives advantage of using various functions of String object present in prototype having key as index and charcter as value
console.log(name[0]); // A
console.log(name.__proto__); // prints {}
console.log(name.length); // 6
console.log(name.toUpperCase()) // ARCHIT but it does not change original value as it is primitive type
console.log(name.charAt(2)); // c
console.log(name.indexOf('t')); //5

const str = new String("Archit-Vohra");
const newString = str.substring(5,6); // 5 is startIdx 5 is endIdx
console.log(newString);
const newStr = str.slice(3, 5); // allows negative indices
console.log(newStr);

const val = "    archit   "
console.log(val.trim());

const url = "https://asdf.com/qwerty%32poui"
console.log(url.replace('%32', '-'));

console.log(url.includes('as'));

console.log(str.split("-"));