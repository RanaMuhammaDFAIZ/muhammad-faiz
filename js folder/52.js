// let a =prompt("Enter a number");
// let b =prompt("Enter a number");

// console.log("start");
// setTimeout(function()  {
//     console.log("i am a fast function");
// }, 3000);

// console.log("end");

function loadScript(src, callback) {
var script=document.createElement("script");
script.src=src;
script.onload = function(){
    console.log("script loaded" + src );
    callback(new console.error("got some error"));
}
document.body.appendChild(script);
}

function hello(){
    alert("hello world");
}

function hi(){
    alert("hi world");
}


loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js,hello);")