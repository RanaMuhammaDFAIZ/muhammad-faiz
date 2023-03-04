class Animals{
    constructor(name, colour){
        this.name = name;
        this.colour = colour;
    }
    fun(){
        console.log("i am a funing! ")
    }
    shout(){
        console.log("i am a Shouting ! ")
    }
}

class monkey extends Animals{
    eatBanana(){
        console.log( this.name +  " i  am eating banana")
    }
    hide(){
        console.log(` ${this.name} i am hiding`)
    }
}

let ani = new Animals("dog", "black");
let m = new monkey ("monkey", "red");


ani.shout();
m.eatBanana();
m.hide();