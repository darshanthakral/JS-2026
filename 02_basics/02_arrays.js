
//Merging two arrays
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// console.log(marvel_heros.push(dc_heros));// old and non-good way, its consider complete array as element of other containing array 

//console.log(marvel_heros.concat(dc_heros)); // Actaully merges two array into a new singular array
 


//Spread Operation - Benefit of using this is you can have mor ethan two operations 
const allHeros = [...marvel_heros, ...dc_heros];

//console.log(allHeros);


//Flat operation in array
const another_array = [1, 2, 3, 4, [4, 6, 7], [21, 25, [28, 32]]]

//console.log(another_array);

const another_complete_array = another_array.flat(Infinity)
//console.log(another_complete_array);


//Check if it is array
console.log(Array.isArray("Hitesh")); // Find if array or not
console.log(Array.from("Hitesh")); // Make string array
console.log(Array.from({name: "hitesh"})) // interesing
console.log(Array.isArray(another_complete_array));



let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
