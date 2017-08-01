function Animal(name, numlegs){
    this.name=name;
    this.numlegs=numlegs;
    this.isAlive=true;
}

function Cat(name){
    this.name=name;
    this.numlegs=4;
}

function Person(name){
    this.name=name;
    this.saying = "hiiiii"
}

Cat.prototype =new Animal();
Person.prototype = new Cat()

var aakash = new Person();
aakash.name;
aakash.saying;
aakash.isAlive;
aakash.numlegs;