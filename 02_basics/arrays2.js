const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // adds complete 2nd array as a new element in 1st array
// console.log(marvel_heros); 

// marvel_heros.concat(dc_heros) // same as above

const allHeros = marvel_heros.concat(dc_heros)
console.log(allHeros);

// spread operator to spread all elements of array as individual objects

const newAllHeros = [...marvel_heros, ...dc_heros]
console.log(newAllHeros);
const arr = [1,2,3,[4,5,6], 7,[6,7,[4,5]]]

const realArr = arr.flat(Infinity) // flatens out the array with infinity depth
console.log(realArr);


console.log(Array.isArray("Archit")); // false
console.log(Array.from("Archit")); //['A', 'r', ...
console.log(Array.from({name: "Archit"})); // cannot convert without specifiying what to convert to array

let s1 = 100
let s2 = 200
let s3 = 300

console.log(Array.of(s1, s2, s3));
