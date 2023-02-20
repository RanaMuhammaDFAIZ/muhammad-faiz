let u =document.getElementsByTagName("div")[0];
//    u.innerHTML="<h1>Hello world</h1>";

let v=document.createElement("div");
v.innerHTML="<h1>Hello world</h1>";
// u.append(v);
u.prepend(v);
// u.before(v);
// u.after(v);
// u.replaceWith(v);