let a1 =new Promise((resolve, reject) => {
    console.log("pro,ise is pending")
    setTimeout(() => {
        // console.log("i am an peomise  is resolved")
        resolve(true)
    }, 5000)
})
let a2 =new Promise((resolve, reject) => {
    console.log("pro,ise is pending")
    setTimeout(() => {
        console.log("i am an peomise  is rejected")
        reject (new Error("i am an error"))
    }, 5000)
})

console.log(a1, a2)

a2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
} )

a2.catch((error)=>{
    console.log("some error are pending in a2")
})