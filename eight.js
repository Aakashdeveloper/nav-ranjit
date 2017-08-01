function Dog(breed){
    this.breed = breed;
    this.legs = 4
}

Dog.prototype.bark=function(){
     console.log("booooooo")
}


var pug = new Dog("pug");
pug.bark();



var buddy = new Dog("aabc");






function Person(age){
    this.location="India";
    this.age = age;
}

var aakash = new Person(24)

var nav = new Person();


var  ranjith = new Person();
