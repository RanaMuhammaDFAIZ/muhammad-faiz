class Animals{
    constructor(name){
        this._name = name;
    }
fly(){
    console.log('I can fly');

}
get name(){
    return this._name;
}
set name(name){
    this._name = name;

}

}



let a = new Animals('dog');
a.fly();
console.log(a.name);
a._name = 'cat';
console.log(a.name);
let c =58
console.log(a instanceof Animals);
console.log(c instanceof Animals);