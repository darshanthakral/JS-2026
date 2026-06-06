const claudeUser = new Object

// const claudeUser = {}

claudeUser.id = "123abc"
claudeUser.name = "Darshan"
claudeUser.isLoggedIn = false

//console.log(claudeUser);

const regularUser = {
    email: "dt@hotmail.com",
    name: {
        firstName: "Darshan",
        lastName: "Thakral"
    },
    username: "dt_professional",

}

console.log(regularUser.name.firstName);


//Object merging / combining

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const completeObj = {...obj1, ...obj2}//spread operator
console.log(completeObj);
const obj3 = Object.assign(obj1, obj2)// assign operation
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2)
console.log(obj4);


//Array of objects
const user =[
    {
        id: 123,
        name: "darshan",
        email: "dt@gmail.com"
    },

    {
        id: 123,
        name: "darshan",
        email: "dt@gmail.com"
    },

    {
        id: 123,
        name: "darshan",
        email: "dt@gmail.com"
    },

    {
        id: 123,
        name: "darshan",
        email: "dt@gmail.com"
    },

]

console.log(user[0].email);


//Object properties
console.log(claudeUser);
console.log(Object.keys(claudeUser));
console.log(Object.values(claudeUser));


console.log(Object.entries(claudeUser));

//Error handling
console.log(claudeUser.hasOwnProperty('isLoggedIn'))

