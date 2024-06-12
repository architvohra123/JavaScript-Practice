// array

const myArr = [0,1,2,3,4,5,6]
console.log(myArr[0]);

// array create shallow copy

// Shallow copy of an object is a copy whose properties share the same refereneces as those of the source object
// Deep copy of an object is a copy whose properties do not share the same ref
// deep copy assures that you are not causing the other object to change too

const myHeros = ["Shaktiman", "Naagraj"]
const myArr2 = new Array(1, 4, 2, 6)
// arrays also provide prototype access

myArr.push(3)
myArr.pop()

myArr.unshift(0)

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join()
console.log(typeof newArr); // string

//slice // splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3); // does not affect og array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // removes  these elements from original array
console.log(myn2);