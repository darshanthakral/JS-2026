//These loops are arrays pecific loops or more useful in array

//for of loop

//Syntax - 
// for (const element of object) {
//  
//}


const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num)
}

const objArr = [
    {
        one: "1",
        two: "2",
        three: "3",
        four: "4"
    },
    {
        one: "I",
        two: "II",
        three: "III",
        four: "IV",
        five: "V"
    }
]

for(ob of objArr){
  //console.log(ob);  
}

const greetings = "Hello world!"
for (const greet of greetings){
// console.log(`Each char is ${greet}`);
}

//Maps - 
/*
A Map is a collection of keyed data items, similar to a regular JavaScript Object. However, a Map allows keys of any type (including functions, objects, and primitives) and remembers the original insertion order of the keys.

Does not allow repetation of key and needs unique keys
*/

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('FR', "France") // dont shiow. Only shows uniquw values basedon key

// console.log(map);

for(const [key, value] of map){
    // console.log(key, ":-", value)
}

const gameObj = {
    'game1': 'NFS',
    'game2': 'Prototype 2'
}

//For of does not iterate on object
// for (const [key, value] of gameObj) {
//     console.log(gameObj);
// }

