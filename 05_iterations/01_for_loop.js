//for

// for (let i = 0; i < 10, i++;){
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i < 10, i++;){
//     const element = i;
//     if(element == 5){
//         console.log("5 is my number");
        
//     }
//     console.log(element);
// }

// for (let i = 0; i <= 10, i++;){
//     console.log(`outer loop - ${i}`);
//     for (let j = 0; i <=10, j++;){
//         console.log(`inner loop - ${j} and outer loop value ${i}`);
//     }   
// }


let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);

// for(let i = 0; i < myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);   
// }

// for(let i = 1; i <= myArray.length; i++){
//     const element = myArray[i];
//     console.log(element);  
// }

//last value will come undefined


//break and continue


for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`5 is detected`);
        break;
    }
    console.log(`Value of i is ${i}`);
}

for(let i = 1; i <= 20; i++){
    if(i == 5){
        console.log(`5 is detected`);
        continue;
    }
    console.log(`Value of i is ${i}`);
}

