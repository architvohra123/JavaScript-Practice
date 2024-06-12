if(true){
    var varVariable = "This is var" // OK
}
console.log(varVariable);

if(true){
    // let letVariable = "This is let" // refError out of scope
    // const constVarible = "This is const" //refError out of scope
}
console.log(letVariable);
console.log(constVarible);

console.log(a); // undefined
var a = 10;
console.log(a); // 10

// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 20;
console.log(b); // 20

// console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c = 30;
console.log(c); // 30


// var is function scoped and let, const are block scoped




////////////////////////////////////////////


// var
// Scope: Function-scoped. Variables declared with var are confined to the function in which they are declared. If declared outside of a function, they are global.
// Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they can be accessed before their declaration, but their value will be undefined until the line where they are initialized.
// Re-declaration: You can re-declare the same variable in the same scope without any error.
function example() {
    console.log(x); // undefined
    var x = 5;
    console.log(x); // 5
    var x = 10;
    console.log(x); // 10
}
example();

// let
// Scope: Block-scoped. Variables declared with let are confined to the block in which they are declared (e.g., inside a pair of curly braces {}).
// Hoisting: Variables declared with let are hoisted, but not initialized. They are in a "temporal dead zone" from the start of the block until the declaration is encountered.
// Re-declaration: You cannot re-declare the same variable in the same scope.
function example() {
    // console.log(y); // ReferenceError: y is not defined
    let y = 5;
    console.log(y); // 5
    // let y = 10; // SyntaxError: Identifier 'y' has already been declared
}
example();

//  const
// Scope: Block-scoped, like let.
// Hoisting: Variables declared with const are also hoisted but not initialized, and are in the "temporal dead zone" until the declaration.
// Re-declaration: You cannot re-declare or reassign a const variable. The value must be initialized at the time of declaration and cannot be changed afterwards. However, if the const is an object or array, the properties or elements can be modified.
function example() {
    const z = 5;
    console.log(z); // 5
    // z = 10; // TypeError: Assignment to constant variable.
    const obj = { prop: 1 };
    obj.prop = 2; // This is allowed
    console.log(obj); // { prop: 2 }
}
example();