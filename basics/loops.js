// Explicamos un poco los loops
// Primero invocamos un array de frutas

var frutas = ["Manzana", "Banana", "Pera", "Anana", "Sandía"];

//Usamos el nuevo FOR EACH de EcmaScript
//Printeamos las frutas y le pedimos que nos muestre el index de cada una

frutas.forEach(function(frutas, i){
  console.log(frutas, i)
})


// Ahora declaramos el loop con un FOR 
// Y hacemos una iteración para concatenar un string en todos los objetos del array
for (var i=0; i < frutas.length; i++){
	console.log(frutas[i] = frutas[i] + " fresca!")
}



//Mostramos un while loop
var contadorsito = 10;
while (contadorsito > 10){
  console.log("While", contadorsito);
  contadorsito--;
}


//Ahora mostramos un Do While haciendo un contador desde 10 hasta 1
var contador = 10
do {
  console.log("Do While", contador)
  contador--;
} while(contador > 0) 

//Siempre toma primero el DO WHILE


