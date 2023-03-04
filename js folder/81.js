class animals{
    constructor(name){
        this.name = animals.capitalize (name);
    }
    walk(){
      console.log("I am walking " + this.name + "!" + " I am an animal");
    }
    static capitalize(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

let h=new animals("iog");
h.walk();
