var animal = {
	name:"dog",
	color:"black"
}
undefined
animal
Object {name: "dog", color: "black"}
animal.name
"dog"
animal.color
"black"
animal[name]
undefined
animal["name"]
"dog"
animal["color"]
"black"
animal.legs = 4
4
animal
Object {name: "dog", color: "black", legs: 4}
delete animal.color
true
animal
Object {name: "dog", legs: 4}


////////////////////////constructor/////////////////


var animal = new Object();
undefined
animal
Object {}
animal.name="cow"
"cow"
animal.color="white"
"white"
animal
Object {name: "cow", color: "white"}
animal.name
"cow"
animal.color
"white"


var bob = new Object();
bob.age = 10
bob.setAge = function(newAge){
	bob.age = newAge;
}

var fluffy = new Object();
fluffy.color="red";
fluffy.setCol= function(col){
	fluffy.color=col
}
fluffy.setCol("black")
undefined
fluffy
Object {color: "black", setCol: function}


var setage = function(Nage){
	this.age=Nage;
}

var tony = new Object()
tony.age= 10
tony.setage = setage

var navneth= new Object()
navneth.age = 12;
navneth.setage= setage;

























