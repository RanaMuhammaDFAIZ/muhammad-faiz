try {
let age=prompt("enter your age")
age=Number.parseInt(age)
if(age<150){
    throw new ReferenceError("faizan is not good")
}
} catch (error) {   
    console.log(error.name)
    console.log(error.message)
    console.log(error.stack)
}

console.log("script is still running")