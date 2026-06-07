
function sayMyName() {
console.log("D");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("A");
console.log("N"); 
}

// sayMyName // Reference of functionn
// sayMyName() // Function calling


//Function with parameters
// function addTwoNumbers(number1, number2){
//     //When declaring function with value. Its parameter
//     console.log(number1 + number2);
// }

// //Call by value
// //When calling function with values. Its arguments
// addTwoNumbers(3,4)


// //Function with parameters and return value
// function addTwoNumbers(number1, number2){
//     //When declaring function with value. Its parameter
//  let result = number1 + number2
//  return result
// }

// //Call by value
// //When calling function with values. Its arguments
//  const res = addTwoNumbers(3,4)
//  console.log("Result: ", res);
 

 function loginUserMessage(username = "sam"){
    if (!username) {
        console.log("Please enter a username");
        return       
    }
    return `${username} just logged in.`
 }

//   console.log(loginUserMessage());
 

//Passing parameter with rest operator in function

function calculateCartPrice(...num){
    return num
}

//console.log(calculateCartPrice(10, 20, 30 ,30));


//Passing object as parameter in function
const user = {
username: "darshan",
price: 199
}

function handleObject(anyObject) {
console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

//handleObject(user)

handleObject({
    username: "sam",
    price: 212
})

//Passing array as parameter in function
const myNewArray = [212, 346, 257, 897, 104, 629]
function returnSecondValue(arrayInput) {
    return arrayInput[2]
}

console.log(returnSecondValue(myNewArray));
