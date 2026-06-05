
//Concept Reference Image Link - https://drive.google.com/file/d/1Uzc-lfRFeSfRR3yBSZZLX2sXAzK16UsH/view?usp=sharing

//Stack Memory -> All primitive datatypes are hold under Stack memory
//It gives the copy of orignal value 

let myYTName = "darshan_appdev"
let anotherName = myYTName

anotherName = "24hundredcode"

console.log(myYTName);
console.log(anotherName);


//Heap Memory -> All non-primitive or reference datatypes are hold under Heap memory.
//It gives the reference of orignal value. i.e orignal value

let userOne = {
    email: "user@yahoo.com",
    upi: "user@oksbi_2"
}

let userTwo = userOne

userTwo.email = "darshan@google.com"

console.log(userOne.email);
console.log(userTwo.email);

