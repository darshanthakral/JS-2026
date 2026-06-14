//Conditional in JS / Control FLow / Logic Flow



//if statement

// const isUserLoggedIn = true
// const temp = 31

// if (condition) {
//     //scope
//     console.log("executed");  
// }else{
// // scope
// //if the condition returns false
// }

//operators
//<,>,<=,>=,==, !=, ===, !==


const score = 200

if (score > 100){
    const power = "fly"
    console.log(`User power ${power}`);
}

//Implicit scope -> only one line scope
const balance = 1000
if (balance > 500) console.log("test");


//Else If Ladder

if (condition) {
    
} else if (condition) {
    
}else if (condition) {
    
}else{
    
}

//switch case 

switch (key) {
    //implicit scope -> One line statment only 
    case value:
        
        break;
    //scoped
    case value: {
        break;
    }

    default:
        break;
}

// Operator - && , ||