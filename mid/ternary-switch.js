//Operacion Ternaria
//sintaxis: condicion ? expr1 : expr2
//se evalua condicion para saber si es true o false, y dependiendo de su valor va por expr1 o expr2
//expr1 es true
//expr2 es false

//Ejemplo porque sino la teoría es una paja

function usuarioBooleano(bool){
  return bool;
}

//Acá si cambiamos el true por un false, va a cambiar la decisión del patovica
var patovica = usuarioBooleano(true) ? "Entrá rocho dale" : "Cambiate las zapatillas si queres entrar"

console.log(patovica);

//Switch
//Un switch es una operacion donde podemos agregar multiples if de una forma re fácil y práctica todo gucci animal bestia mastondonte marino
//Ejemplo con un minijuego porque es más fácil

console.log("punga: e amigo banca")
console.log("yo: emmmm")
function punga(decision) {
  var elPunga;
  switch (decision){
    case "le doy la hora":
      elPunga = "jaja te robaron";
    	break;
    case "corro":
      elPunga = "te corre y casi te alcanza";
      break;
    case "hago que lo conozco":
      elPunga = "escapo ileso porque simio no mata simio";
      break;
    default:
      elPunga = "tené hora?";
  }
  return elPunga;
}

//Lo ejecutas en la consola de chrome y lo llamas como window.punga("algun case")

