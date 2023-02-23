let p1 =new Promise((resolve, reject) => {
    setTimeout(()=>{
        console.log("resolve after 2 second")
        resolve(56)
    },3000)
})
p1.then((value)=>{
    console.log(value)
   let p2 =new Promise((resolve, reject) => {
    setTimeout(()=>{  resolve("promise2")},2000)
   })
return p2
}).then((value)=>{
    console.log("We are Done")
})

const loadscript=(src)=>{
    return new Promise((resolve, reject) => {
    let script=document.createElement("script")
    script.type="text/javascript"
    script.src=src
    document.body.appendChild(script)
script.onload=()=>{

   resolve("script has been loaded")
}
script.onerror=()=>{reject(0)}
    })
}

let p3=loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")

p3.then((value)=>{
    console.log(value)
    return loadscript("https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.js")
}).then((value)=>{
    console.log("second script is redy to use")
})
    .catch((error)=>{
        console.log("we are Erroe and we arw loading lodash the reject value is 0")
    })

