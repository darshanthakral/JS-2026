//For in loop
/*
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
    */


//Printing object with for in loop

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift in Apple"
}

for (const key in myObject) {
    // console.log(myObject);
    // console.log(key);
    // console.log(myObject[key]);
   // console.log(`${key} is shortcut for ${myObject[key]}`);    
}


//Printing array in for in loop
const programming = ["js", "cpp", "java", "rb", "swift"]
for (const key in programming) {
   // console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('FR', "France") 

for (const key in map) {
    //maps are not iteratable like this
    console.log(key);
}