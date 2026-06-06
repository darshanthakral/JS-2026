// Singleton 

//Object.create // Constructor method


// Object Literals - Way to declare object

const mySym = Symbol("key1")

//Key value pair is the way object elements are stored. the key is also in background is stored as string.
const JsUser = {
    name: "Darshan", // key is internally stored as string
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
//Object.freeze(JsUser)
JsUser.email = "darshan@anthropic.com"
console.log(JsUser);


JsUser.greetings = function(){
    console.log("Hello Js User");
}

JsUser.greetings2 = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greetings());

console.log(JsUser.greetings2());



