let p1 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('i am faiz1')
    }, 1000)
})
let p2 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('i am faiz2')
    //    reject(error("i am an error"))
    }, 2000)
})
let p3 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve('i am faiz3')
    }, 3000)
})

// let k=Promise.all([p1,p2,p3])
// k.then((data)=>{
//     console.log(data)
// });

// let k=Promise.allSettled([p1,p2 ,p3])
// let k=Promise.race([p1,p2 ,p3])
let k=Promise.any([p1,p2 ,p3])
k.then((value)=>{
    console.log(value)
})