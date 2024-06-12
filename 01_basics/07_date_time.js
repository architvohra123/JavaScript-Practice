let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());


console.log(typeof myDate); // object


let myCreatedDate = new Date(2023, 0, 24)
// let myCreatedDate = new Date("01-14-2024")
console.log(myCreatedDate.toDateString());