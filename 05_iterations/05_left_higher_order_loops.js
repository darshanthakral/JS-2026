//For each
//Syntax ->

// array.forEach(element => {
    
// });

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function (item) {
//      console.log(item);  
// })

//via arrow fuction
// coding.forEach((e) => {
//     console.log(e);  
// })

// coding.forEach(e => {
//     console.log(e);  
// })

// function printMe(item){
//     console.log(item);   
// }

// coding.forEach(printMe)


// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr );
    
// })


const myCoding =[
    {
        languageName: "javascript",
        languageFileExtension: "js"
    },
    {
        languageName: "java",
        languageFileExtension: "java"
    },
    {
        languageName: "Ruby",
        languageFileExtension: "rb"
    },
    {
        languageName: "C++",
        languageFileExtension: "cpp"
    },
    {
        languageName: "Python",
        languageFileExtension: "py"
    },
]

myCoding.forEach((lang, index, arr) =>{
    // console.log(lang.languageName);
    // console.log(lang.languageFileExtension);
    //console.log(lang);
    //console.log(arr[index]);

})

