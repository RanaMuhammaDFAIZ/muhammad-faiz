class complex{
constructor(real,imaginary){
this.real=real;
this.imaginary=imaginary;

}
add(num){
this.real=this.real+num.real;
  this.imaginary=this.imaginary+num.imaginary; 
}
get real(){
return this._real;
}
get imaginary(){
return this._imaginary;
}
set real(newReal){
this._real=newReal;
}
set imaginary(newImaginary){
this._imaginary=newImaginary;
}

}

let c1=new complex(2,3);
c1.real=20;
c1.imaginary=30;
let c2=new complex(3,4);
console.log(c1.add(c2));
console.log(`${c1.real}+${c1.imaginary}i`);


// class Human{
//     constructor(name,fasfood){
//         this.name=name;
//         this.fasfood=fasfood;
//     }
//     walk(){
//         console.log(`${this.name} Human is walking`);
//     }
// }

// class Programmer extends Human{
//     walk(){
//         console.log(`${this.name}  : Student is walking`);
       
//     } 
// }

// let p1=new Programmer("Rahul","Pizza");
// p1.walk();
// console.log(p1);