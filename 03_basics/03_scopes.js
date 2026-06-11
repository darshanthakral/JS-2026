//Scope and hoisting
function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one()


if (true){
    const username = "darshan"
    if(username === "darshan"){
        const website = " appdev"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// ******************************* Intresting concept  *************************************

addone(5) //Thsi will work

function addone(num){
return num + 1
} 

addone(5)

//------------------------------

addTwo(5) // This will not work

// Function with expression - holding function in variable
const addTwo = function (num) {
    return num + 2
}

addTwo(5)