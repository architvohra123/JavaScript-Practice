// singleton

// object literals

const JsUser = {
    name: "Archit",
    age: 13,
    location: "haryana",
    email: "aerca@aadfsj.com",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"],
    "key prop": "bye"
}

console.log(JsUser.email);
console.log(JsUser["email"]); // same output
// console.log(JsUser.key prop); //error
console.log(JsUser["key prop"]); //ok
// Object.freeze(JsUser) // does not allow changes to be made afterward


JsUser.greet = function(){
    console.log("Hello user");
}
console.log(JsUser.greet); // Funciton reference is returned
console.log(JsUser.greet()); // prints ok
JsUser.greet2 = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greet2());