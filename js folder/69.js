let key=prompt("Enter the key");
let value=prompt("Enter the value");
localStorage.setItem(key,value);
console.log(`The value of ${key} is ${localStorage.getItem(key)}`)

if(key=="red"||key=="yello"){
    localStorage.removeItem(key);
}

if(key==0){
    localStorage.clear();
}

window.onload=(e)=>{
    alert("this page is changed")
    console.log(e)
}