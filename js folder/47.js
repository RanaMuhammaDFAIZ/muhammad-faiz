let a=document.getElementsByClassName("container")[0];
a.onclick=function(){
    let b=document.getElementsByClassName("container")[0];
    b.innerHTML="Hello World!";
    console.log("Hello World!");
    // alert("Hello World!");
}