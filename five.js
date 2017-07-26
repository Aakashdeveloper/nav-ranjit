var a = 10
if(a>10){
	alert("10")
}else{
	alert("no")
}

function add(a,b){
	return a+b
}

function isEven(a,b){
	if(a%2==0){
		var out = a +"-"+b
		return out;
	}
	else{
		return out
	}
}

var isEven = function(a,b){
	if(a%2==0){
		var out = a +"-"+b
		return out;
	}
	else{
		return out
	}
}


function access(name){
	if(name=="ranjit" || name=="navneth"){
		console.log("allow access")
	}else if(name=="aakash"){
		console.log("do not allow accees")
	}else{
		console.log(" i dot know")
	}
	
}




