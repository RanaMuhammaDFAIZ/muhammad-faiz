// const loadscript = async (src) => {
// return new Promise((resolve, reject) => {
// let script = document.createElement('script')
// script.src = src
// script.onload = () =>{
//     resolve(src)
// } 
// document.head.append(script)
// })
// }

// const main2 = async () => {
// let a = await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js')
// console.log(a)
// }

// main2()

// // problem 01
// const loadscript =async(src)=>{
// return new Promise((resolve, reject) => {
// let script = document.createElement('script')
// script.src=src 
//     script.onload=()=>{
//         resolve(src)
//     }
//     document.head.appendChild(script)
// })
// }
// let a =loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js')
// a.then((value)=>{
//     console.log(value)
// })

// problem 02
// const c =async()=>{
//     let a=await loadscript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js')
//     console.log(a)
// }
// c()


// problem 02

let a=()=>{
return new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error('error'))
    }, 2000);
})
}

let c =async()=>{
    try {
        let b =await a()
        console.log(b)
    } catch (error) {
        console.log("This error is from catch block")
    }
}
c()


let a1 =async()=>{
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 2000);
})
}

let a2 =async()=>{
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 1000);
})
}

let a3 =async()=>{
return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(30)
    }, 3000);
})
}

const d =async()=>{
    console.time('run')
let b1=a1()
let b2=a2()
let b3=a3()
let a1a2a4=await Promise.all([b1,b2,b3])
console.log(a1a2a4)
console.timeEnd('run')

}

d()