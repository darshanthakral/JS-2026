const user = {
    username: "darshan",
    price: 999,
    welcomeMessage: function(){
        //this means currect context
        console.log(`${this.username}, welcome to our website `);
        console.log(this);
        
        
    }
}

// user.welcomeMessage()

// user.username = "sam"

// user.welcomeMessage()

// console.log(this);
//Now this will give empty object. The reason its giving empty object is becuase its running on local (node/deno/bun) environment. If this runs on browser under console, It will return a Window object


// function chai(){
//     let username = "darshan"
//     console.log(this);
    
// }

// chai()

//In 2015 ES6 arrow function was introduce
//syntax (function parameter) =>{
  //function definition  
//}
 
// const chai = () => {
// let username = "darshan"
// console.log(this);
// }

// chai()


//Explicit return - Basic arrow fucntion
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,5));


//Implicit Return. If only one line statement
// const addTwo = (num1, num2) => num1 + num2 // type 1
// const addTwo = (num1, num2) => (num1 + num2) // type 2
// console.log(addTwo(3, 4));

//Implcit return. If only one line statement, for object
 const addTwo = (num1, num2) => ({username: "darshan"})
 console.log(addTwo(3,4));
 


