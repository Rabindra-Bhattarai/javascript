//promise async/await
//future then/catch

console.log(1)
setTimeout(()=>console.log(2),1000) //run after 1 sec
console.log(3)

const delay = ms => {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                reject(`Failure`)
                resolve(`success`) //success statement/callback
            }, ms)
        }
    )
}

const promiseCall = async () =>{
    console.log("Start")

    try{
    const res =await delay (2000) // blocking
    console.log(res) //resolved value
    }catch(err){
        console.log(err) //rejected value

    }

    delay(2000) //non-blocking
        .then(msg=> console.log(msg)) //wait for promise to resolve
        .catch(err=> console.log(err))
    console.log("End")
}

promiseCall()



const sequientialPromise = async ()=>{
    console.time("sequentialPromise")
    const res1 = await delay(3000)
    console.log(res1)
    const res2 = await delay(5000)
    console.log(res2)
    //wait time is sum of both
    console.timeEnd("sequentialPromise")

}


const parallelPromise = async ()=>{
    const[res1, res2] = await Promise.all([
        delay(3000),
        delay(5000)
    ])//wait time is the max of both
    console.log(res1, res2)
    console.timeEnd("parallelPriomise")



}



//promise, on delay function add another argument, num
//if num % 2==0 resolve after ms
//else reject after ms
//simulate (1000, 1500, 2000, 2500, 3000)
//run this both parallelPromise and sequentialPromise function
//make a new function
//log the resolved and rejected values separately
//using non-blocking .then, run 1000, 2000, 3000, seque


const delayWithNum = (ms, num) => {
    return new Promise(
        (resolve, reject)=>{
            setTimeout(()=>{
                num % 2 === 0
                    ? resolve(`Resolved after ${ms}ms with num ${num}`)
                    : reject(`Rejected after ${ms}ms with num ${num}`)
            }, ms)
        }
    )
}


// delayWithNum(2000, 3)
//    .then(res  => {
//     delayWithNum(1000, 4)
//     .then(res2 =>{
//         console.log(res2)
//         delayWithNum(3000, 5)
//         .then(res3 =>{
//             console.log(res3)
//         })
//         .catch(err3 => console.log(err3))
//     })






