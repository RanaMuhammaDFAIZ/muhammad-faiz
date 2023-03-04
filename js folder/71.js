let url=("https://kontests.net/api/v1/all");

let responce=fetch(url);
responce.then((contants)=>{
    return contants.json();
}).then((contants )=>{
    console.log(contants );
    ihtml="";
    for(item in contants ){
        console.log(contants [item]);
        ihtml +=`
        <div class="card mx-3" style="width: 22rem;     justify-content: center !important; align-items: center !important;">
        <img src="https://thumbs.dreamstime.com/b/modern-computer-programming-code-screen-showing-random-scripts-113805394.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contants [item].name} </h5>
          <p class="card-text">statis is  ${contants [item].statis } </p>
          <p class="card-text">on 24 houe  ${contants [item].in_24_hours } </p>
          <p>Start Time: ${contants [item].start_time}</p>
            <p>End Time: ${contants [item].end_time}</p>
          <a href="${contants [item].name [url] } " class="btn btn-primary">visit PAGE</a>
        </div>
      </div>
        `
    }
    cardcontainer.innerHTML=ihtml;
   })

// let n =localStorage.getItem("note");
// alert("Your Note is: "+n);

// let a =prompt("Enter Your Note");
// if(a){
//   localStorage.setItem("note",a);
// }

// let c =confirm("i will write conform do you want to this delete");
// if (c){
//   localStorage.removeItem("note");
// }
