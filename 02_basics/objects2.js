// const tinderUser = new Object() //this is singleton object
const tinderUser = {} // this is a non-singleton object

tinderUser.id = "123abc"
tinderUser.name = null;
tinderUser.isLoggedIn = false;

const regUser = {
    email: "some@gmail.com",
    fullName: {
        userfullname : {
            firstName: "archit",
            lastName: "vohra"
        }
    }
}

// console.log(regUser.fullName.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {3: "t", 5: "y"}

// const obj3 = {obj1, obj2} // same problem as in array

// const obj3 = Object.assign({}, obj1, obj2, obj4); // not used much

const obj3 = {...obj1, ...obj2, ...obj4};
console.log(obj3);

const users = [
    {
        id:1,
        email:"sdf@ged.com"
    },
    {
        id:2,
        email:"s3df@ged.com"
    },
    {
        id:3,
        email:"s5df@ged.com"
    }
]

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"))