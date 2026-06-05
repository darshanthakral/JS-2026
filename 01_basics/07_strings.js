let name = "Darshan"
const repoCount = 50

//Older Syntax
//console.log(name + " " + repoCount + " Repos");

//New Syntax - String Interpolation
console.log(`Hello , this is ${name} github account. And has ${repoCount} repositories in his account.`);


//Another way to declare strings in JS
const gameName = new String('DT_Professional') // Object invvocation

//Methods in String 
console.log(gameName[0]); // key access
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);//Stack memory. Actual value has not changed


console.log(gameName.charAt(2)); // Character position

console.log(gameName.indexOf('T')); // Position of Character

const newString = gameName.substring(0, 4)
console.log(newString);
//cannot obbey to negative value

const anotherString = gameName.slice(1,10)
console.log(anotherString);
//can work with negative values and then starts from end


const newStringTwo = "  Darshan  "
console.log(newStringTwo);
console.log(newStringTwo.trim())
//We also have trimStart, and trimEnd
//Only works on whitespace and newline characters


const base_url = "https://darshanthakral.com"
const newUrl = `${base_url}/my%20portfolio`
console.log(newUrl);
const replacedUrl = newUrl.replace('%20', '-')
console.log(replacedUrl);


console.log(replacedUrl.includes('portfolio'));

console.log(gameName.split('_'));
