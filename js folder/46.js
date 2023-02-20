// // alert("hay")

//  let a= setTimeout(function(){
// alert("you are hacked")

// } , 5000)

// console.log(a)
// clearTimeout(a)

// let b = prompt("enter your name");
// if("n==b"){
// clearTimeout(a)
// }
// console.log(b)

const a=(a, b, c)=>{
    console.log("Yes  i am a good boy" + (a + b + c))
    return a+b+c
}

setTimeout(a, 5000, 1, 2, 3)