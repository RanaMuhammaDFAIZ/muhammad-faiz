const contant1=async(todor)=>{
let option ={
method:"post",
headers:{"contant-type":"application/json"

},
body:JSON.stringify(todor),
}

let p=await fetch("https://jsonplaceholder.typicode.com/posts",option)
let responce=await p.json()
return responce

}

const gettodo=async(id)=>{
  let o1=  fetch('https://jsonplaceholder.typicode.com/todos/' + id)
    .then(response => response.json())
    .then(json => console.log(json))
// let responce=await o1.json()
// return responce

}


const faiz=async()=>{
    let todor={

        title:"my first post",
        body:"this is my first post",
        userId:1100,
    }
        
   
    let todo=await contant1 ()
    console.log(todor)
    console.log(await gettodo (200))
}
faiz()