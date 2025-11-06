//List /array


const arr =[3,4,5]
const arr2 =[1, true, undefined, "Hello"]


//data type is not restricted in JS
//Spread operator

const arr3 =[arr, 3,5] //[{3,4,5].3.5]
const arr4=[...arr, 3,5]// [3,4,5,3,5]
const arr5=[...arr, ...arr2]// [3,4,5,1, true, undefined, "Hello"]
console.log(arr5)
arr.push(10) //adds element at the end
console.log(arr)
const popped = arr.pop () //remove emelement from the end
console.log(popped)
arr.unshift(100) //adds element at the start
const shifted =arr.shift()//removes element from the start
console.log(shifted)
console.log(arr)


//array access
console.log(arr[0])
console.log(arr.at(0))
arr[0]=500 //although variable is const =, array are mutable
//arr = [100,200]


//Iterate array
for(let i=0; i<arr.length; i++){
    console.log(i, arr[i])
}

//Iterate with index
for(let index in arr){
    console.log(index, arr[index])
}

//Iterate with value
for(let value of arr){
    console.log(value)
}


//object //map//Record
const person ={
    firstName:"Hari",
    age:30,
    "isAdmin":false,
    hobbies:["reading", "travelling"],
    address:{
        street:"Kathmandu",
        country:"Nepal"

    }
}


console.log(person)
console.log(person.firstName)
console.log(person["firstName"])
person.age =31 //modify
person.isAdmin=true
console.log(person.hobbies[0])
console.log(person.address.street)
delete person.hobbies //delete keys
console.log(person)



//Nullish Check
console.log(person.address.home) //undefined
// console.log(person.address.home.number) //error, connot read property of undefined
console.log(person.address.home?.number)//undefined
console.log(person.address.home?.number?.prefix)//undefined


console.log(person.address?.home?.number ?? 0) //0
console.log(person.address?.home?.continent ??  "Not specified") //Not specified
console.log(person.gender?.type ?? "N/A") //N/A
