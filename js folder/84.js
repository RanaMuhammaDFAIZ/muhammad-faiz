submit.addEventListener("click", (event) =>{
    event.preventDefault();
let titlec=title.value;
let Descc=Desc.value;
localStorage.setItem("todo", JSON.stringify ([titlec,Descc]));
    console.log(event);
   todo.innerHTML=`
    <h1>${titlec} </h1>
    <h4>${Descc}</h4>
    `;
});
DeleteBTN.addEventListener("click", (event) =>{
  localStorage.removeItem("todo");
  todo.innerHTML="";
});

