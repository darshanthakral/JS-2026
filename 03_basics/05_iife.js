// Immediately InvokedFunction Expression (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }
// chai()

//IIFE Syntax - To prevent from global scope pollution
//()-> ,()-> . Should be ended by ;
(function chai() {
    //named iife
    console.log(`DB CONNECTED`);
})();

(() => {
    //arrow / unnamed iife
console.log(`DB CONNECTED 2`);
})();

((name) => {
    //parameter iife
console.log(`DB CONNECTED 2 ${name}`);
})("darshan");

