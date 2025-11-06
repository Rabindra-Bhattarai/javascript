//fucntion
function greet(name){
    return "Hello ", + name
}

let first = greet("Hari")
console.log(first)

//no restriction of argument and return
function greetNormal(){
    console.log("Hello")
}

greetNormal()

const arrowFunc = () => "Hello arrow"
console.log(arrowFunc())

const arrowFunc2 = (firstName) => {
    //function stataement
    return "Hello " + firstname
}

console.log(arrowFunc2("Ram"))


const add =(a,b) => a+b  //single arrow function
const subtract =(a,b)=> { 
    return a-b
}


//practice

//make a function with "function" with keyword named average1
function average1(a,b,c){
    let avg = (a+b+c)/3
    return avg
}

//make the sme function using arrow function named average without scope
const average2 =(a,b,c)=>(a+b+c)/3


//make the sme function using arrow function named average with scope
const average3 =(a,b,c) =>{
    let avg =(a+b+c)/3
    return avg
}



//High order Functions/ callbacks


const cb1 = (a,b,operation) =>{
    console.log("Starting operations")
    //logics
    return operation(a,b)
}

let num1 =10
let num2=5
let sumFunc =(a,b)=>{
    let sum =a+b
    console.log(sum)
}

cb1(num1, num2, sumFunc)

//practice
//make a function named userStatus that takes 2 parameter
//first parameter is a string username
//second paramter is a callback function that takes username as parameter
//make 2 function to pass in the callback
//first function is named isAdmin that returns true if username is "admin", else false
//2nd function is named isGuest that returns true if username is "guest", else false
//call userStatus with different usernmes and both functions are print the result

const userStatus =(username, callback) => {
        return callback(username)
}

const isAdmin =(username)=>{
    return username =="admin"

}

const isGuest =(username)=>{
    return username=="Guest"
}

let scenerio1 = userStatus("admin", isAdmin) //True
let scenerio2 = userStatus("guest", isAdmin) //False
let scenerio3 = userStatus("unknown", isAdmin) //False
let scenerio4 = userStatus("Guest", isGuest) //True
console.log(scenerio1, scenerio2, scenerio3, scenerio4)


//practice with annonymous functions
//pass an anonymous function as callback to check if user is "student"
let scenrio5 =userStatus("student", (username)=> username =="student")
let scenerio6 =userStatus("teacher", (username)=>{
    return username==="teacher"
})
console.log(scenrio5, scenerio6)

//closure function
function outerFunction(outerVariable){
    console.log("outer function logic")
    return function innerFunction(innerVariable){
        console.log("Outer Variable: "+outerVariable)
        console.log("Inner variable: " + innerVariable)
    }
}
  const newFunction =outerFunction("outside") //runs outer function
  newFunction ("Inside") //runs inner function with outer variable preserved


  const counter = (start) => {
    let count =start
    return ()=>{
        count ++
        return count
    }
  }
const addOne = counter(5);
console.log(addOne()) //6
console.log(addOne()) //7
console.log(addOne()) //8



//practice
//make a function student Record that takes a parameter name, age
//inside studentRecord make another function addMarks that takes a parameter
//(science, math, english)
//addmarks should print the name, age and average of marks
//studentRecord should return addMarks function
//call studentRecord with diffferent names and stored the returned function

const studentRecord=(name, age)=>{
    const addMarks =(science, math, english)=>{
        let average =(science +math +english)/3
        console.log("name: "+name)
        console.log("age: "+age)
        console.log("Average marks: "+ average)
    }
    return marks
}

const student1=studentRecord("Hari", 20)
student1(70,80,90)
