//truthy and falsy values


//truthy value
const userEmail = "d@darshan.ai"

if (userEmail){
    console.log("Got user email")
}else{
    console.log("Don't have a email")
}

//falsy values 
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//Anything else than what comes in falsy value is truthy values

//truthy values
// "0" // this is string not zero numeric value
// 'false' // this is string not a false
//" " // this is also truthy
//{} // Empty object is also truthy
// function(){} // truthy
 

//Nullish Coalescing Operator (??): null / undefined
//If null comes, from database, or json, it checks of safty

// syntax -> const/let {variable_name} = value/expression ?? value/expresson

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 5


console.log(val1);

//NOTE - Nullish / Nul; Coalescing Operator (??) and Ternary Operator is diffrent


//Ternary Operator

const chai = 10
chai <=10 ? console.log("less than 10") : console.log("more tha 10");


