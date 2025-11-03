//1. Variable types
//const, let, var

const firstname = "Hari"; // const cannot be rearranged / cannot be changed
//const firstname = "Ram"; // //cannot be reassigned
//const firstName = "Ram"; // //cannot be changed


let lastName = "Rai"; // let cannot be rearranged / can be changed
//lastName = "Sharma"; // cannot be reassigned
lastName = "Sharma"; // can be changed

var age = 25; // var can be rearranged / can be changed
var age =30; // can be reassigned
age = 32; // can be changed

//global scope
//scope of variable  {}

console.log(continent);
//hoisting example
if(true){
    let city = "Kathmandu"; // block scope
    let country = "Nepal"; // block scope
    var continent = "Asia"; // function scope

    console.log(city);
    console.log(country);
    console.log(continent);
}

//console.log(city); // cannot be accessed outside block
//console.log(country); // cannot be accessed outside block
console.log(continent); // can be accessed outside block

//2. Data types
const stringType = "This is a string"; // string " ", ' ', ` `
const numberType=100 //number 1,2,3,4.5,-5, 0.5
const booleanType = true //boolean true, false
const nullType = null; //null -intended empty
let undefinedType = undefined; //undefined // not assigned any value
let bigNumber =90812389912n  //bigInt if number is gretaer than 2^31
let symbolType1= Symbol("name")// symbol unique value
let symbolType2= Symbol("name")// symbol unique value
//symbolType1 does not equal to symbolType2

console.log(typeof stringType); //string
console.log(typeof nullType) //object (empty object)
console.log(typeof undefinedType) //undefined
console.log(typeof bigNumber) //bigint
console.log(symbolType1 == symbolType2) //false

//3. Operators
// = (equal)
let x1=10 //one = , assignment operator
let x2 =10 =="10" //two =, comparison operator
let x3=10 ==="10" //three =, strict comparison operator

console.log(x1); //10
console.log(x2); //true
console.log(x3); //false

console.log(true =="1"); //true
console.log(10.2=="10.2"); //true
console.log(null == undefined); //true
console.log(0 == undefined); //false
console.log(0 ==null); //false

//Arithmetic/Mathematical
console.log(5+3)
console.log(5-3)
console.log(5*3)
console.log(5/3)
console.log(5%3) 
console.log(5**31)
let num1 =5
console.log(num1++)
console.log(num1--)


//Assignment 
let num2=10
num2 +=5 // num2 = num2 +5
console.log(num2)
//any arithemetic operator before = is valid

//Comparison --> returns boolean value
console.log(5>3) //true
console.log(5<3) //false
console.log(5>=3) //true
console.log(5<=3) //false
console.log(5 !=3) //true
console.log(5==="5") //false
console.log(5!=="5") //true


//logical --> returns boolean value
console.log(true && false) //AND
console.log(true || false) //OR
console.log(!true) //NOT

//Nullish Coalescing Operator (??)
let stats
let var2 = stats?? "N/A"
console.log(var2) //"N/A"


//Ternary Operator
let age1= 18
let canVote = (age1>=18) ? "Yes, can vote" : "No, cannot vote"
console.log(canVote)


//conditional statements
if (true){
    console.log("This is true")
}
 if(false){
    console.log("if");
    
 }  else if (1==1){
    console.log("else if");
 }else{
    console.log("else");
 }


 //switch case
 let day= 2
    switch(day){
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        default:
            console.log("Holiday");
          
    }



//loops
//for loop
for(let i=1; i<=5; i++){
    console.log("For loop iteration: " + i);
}

//while loop
let j=1
while(j<=5){
    console.log("While loop iteration: " + j);
    j++;
}

//do while loop
do{
    console.log("Runs 1");
}while(false)

