let a =new Promise((resolve, reject) => {
    setTimeout(() => {
        // alert("hay i am not resolve")
    resolve("i am resolve")
    }, 1000);
    
})

a.then((value)=>{
    console.log("hurray")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(78)
        }, 6000);
    })
}).then((value)=>{
    console.log(value)
})


a.then((value)=>{
    console.log("congratulation you are resolve")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject (new Error("i am reject")) 
        }, 6000);
    })
}).catch((error)=>{
    console.log(error)
})