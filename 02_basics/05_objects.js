//Object Destructuring

const course = {
    coursename: "GenAI with JavaScript",
    price: 3999,
    currency: "INR",
    courseInstructor1: "Hitesh Choudhary",
    courseInstructor2: "Piyush Garg",
}

//Syntax Adavancement option to extract value
const {courseInstructor1} = course
console.log(courseInstructor1);


const {courseInstructor1L: instructor} = course
console.log(instructor);


//Handling API responses in JSON

{
    "coursename": "GenAI with JavaScript",
    "price": 3999,
    "currency": "INR",
    "courseInstructor1": "Hitesh Choudhary",
    "courseInstructor2": "Piyush Garg",
}


//Api's respoonse in ARRAY
[
    {

    },
    {

    },
    {

    },
]

