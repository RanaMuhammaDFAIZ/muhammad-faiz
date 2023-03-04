async function faiz()   {
let lahore=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("50 degree")
    }, 6000);
})

let isalamabad=new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("30 degree")
    },9000)
})
 
console.log("Feching lahore Weather please waite....")
let laho=await lahore
console.log("Feching lahore weather:"  + laho  )
console.log("Feching lahore Weather please waite....")
let isala=await isalamabad
console.log("Feching isalamabad weather : " + isala)
return[laho,isala]  

}
const cherry=async ()=>{
    console.log("Hey i am an good persion")
}

const main1=async ()=>{
console.log("Wellcome to weather room")
let a = await  faiz()
let b=await cherry() 
}
main1()