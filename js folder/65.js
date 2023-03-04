let friends=async ()=>{
setTimeout(()=>{
console.log("Feching friends list please wait....")
},1000)
setTimeout(()=>{
console.log("Your Friends Facebook id Haking please wait....")
},2000)
setTimeout(()=>{
console.log("Your Friends Id Name Is Tayyab please wait....")
},3000)
setTimeout(()=>{
console.log("Your Friends Id Passwarld Please wait....")
},4000)
setTimeout(()=>{
console.log("Feching friends list please wait....")
},5000)
}

let main1=async ()=>{
    console.log("Wellcome to Facebook")
    let a=await friends()
    console.log(a)                                                  
}
main1()

