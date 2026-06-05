//Arrys

const myArray = [0, 1, 2, 3, 4, 5, true, "darshan"]
const myHeros = ["shaktiman", "bhoot-uncle", "naagraj"]

const myArray2 = new Array(1,2,3,4)
//console.log(myArray[1]);

//Array methods

// myArray.push(6)
// myArray.push(7)
// myArray.pop()


// myArray.unshift(9)
// myArray.shift()


// console.log(myArray.includes(9));
// console.log(myArray.indexOf(9));

// const newArray = myArray.join()

// console.log(myArray);
// console.log(typeof newArray);

//Slice and Splice

//Main deferences 
// Slice || Splice
// 1. Doesn't include last element of end parameter 'end' in result || Includes last element of parameter 'end' into result
// 2. Does not mutate orignal array || Mutuates orignal array

console.log("A ", myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("B ", myArray);

const myn2 = myArray.splice(1, 3)

console.log(myn2);
console.log("C ", myArray);



