// Singleton 
//Object.create


// Object Literals - Way to declare object

const mySym = Symbol("key1")

const JsUser = {
    name: "Darshan",
    "full name": "Darshan Thakral",
    [mySym]: "mykey1",
    age: 27,
    location: "Nagpur",
    email: "darshan@anthropic.com",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Thursday"]
}

console.log(JsUser);
console.log(JsUser.email); // dot property reference
console.log(JsUser["email"]); //Square notation
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "hitesh@openai.com"
Object.freeze(JsUser)

