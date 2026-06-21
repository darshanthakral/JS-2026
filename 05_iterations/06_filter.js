//Filter Maps & Reduce in JS

//If yu want to return values of foreach in any case. Using 

// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach(item => {
//     console.log(item);
//     //if you want to store foreach 
//     return item // does not work
// })

// console.log(values); // returns undefined



const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Filter cam run on array and return array

//type 1
//const result = myNums.filter((num) => num > 4)

//type 2
// const result = myNums.filter((num) => {
//    return num > 4
// })

//console.log(result);

//Using foreach
const newNumbs = []
myNums.forEach((num) => {
    if (num > 4){
        newNumbs.push(num)
    }
} )
console.log(newNumbs);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBooks = books.filter((bk) => bk.genre === "History")
  const userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === "History")
  console.log(userBooks);


  
