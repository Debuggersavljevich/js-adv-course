//Scopes

//Root scope
var perro = "éste perro es un root scope, o sea, general"

function auto(){
  //Child scope
  var perro = "éste perro es un scope hijo, o sea, sólo 	puede llamarse desde dentro de la función para 			  	retornar el valor";
	console.log(perro)
  }
function camioneta(){
  var perro = "éste perro es un scope hijo bla bla"
	console.log(perro)
  }


auto();
camioneta();
console.log(perro)
