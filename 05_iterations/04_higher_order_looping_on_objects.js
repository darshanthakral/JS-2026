const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift in Apple"
}

//For in loop
/*
for (const key in object) {
    if (!Object.hasOwn(object, key)) continue;
    
    const element = object[key];
    
    
}
    */


for (const key in myObject) {
    console.log(myObject);
    console.log(key);
    console.log(myObject[key]);

}