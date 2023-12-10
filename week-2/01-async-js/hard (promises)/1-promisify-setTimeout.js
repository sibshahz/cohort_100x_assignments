/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    const myPromise=new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve();
            // reject("ERORRRR");
        },n)
    })
    return myPromise;
}

let waitTime=2000
wait(waitTime).then(() => {
    console.log("Logged after ",waitTime);
}).catch((error)=>{
    console.log(`Our promise is rejected after ${waitTime} ${error}`)
})