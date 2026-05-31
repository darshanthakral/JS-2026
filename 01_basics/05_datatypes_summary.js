//Primitive

// 7 Types: String, Number, Boolean, 
// null -> Null is not 0, its empty
// undefined -> Undefined is variable declared but not defined.
// Symbol -> Used in frontend dev. More tha bigeer project is the component feels preatable. Wrapping it into Symbol makes it uniqiue and reusable.
// BigInt -> Bigger values in 4bit, which cant be stored in int. Like scintific values are store in BigInt

// JS -> Is a dynamic typed language

const score = 100 // Dynamically typed to Number
const scoreValue = 100.3 // Dunamically typed to Float

const isLoggedIn = false // Dynamically typed to Boolean
const outsideTemp = null //Dynamically typed to null
let userEmail; // Dynamically typed to undefined.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 21347897498731984708921374970897130987409089873n
console.log(typeof bigNumber);


// Non-Primitive / Reference Types
//These are the values to for which direct reference can be allocated to you

//Arrays -> Storing multiple values in one variable of same datatype or different datatype is done by array
let myArray = ["11", "22", "33", "44", "55", "66", "77", "88", "99"]
console.log(myArray);
console.log(myArray[9]);


//Object -> 
let myObj = {
    name: "darshan",
    age: "24",
}

console.log(myObj.name);


//Functions ->

function myFunc (params) {
    //execution block
}
