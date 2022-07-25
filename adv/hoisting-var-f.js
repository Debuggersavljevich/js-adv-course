// El hoisting se encarga de subir las var o las funciones a lo más alto del stack para que se ejecuten primero
// por ejemplo:

console.log('1------')
console.log(teddy)
console.log(sing())
console.log(sing2) //Si llamamos a sing2 sin los paréntesis, sí nos hoistea porque no es una función
var teddy = 'Bear'
function sing(){
    console.log('oh lalala')
}

// No funciona con LET ni con CONST, sólo con VAR y Function()
// Lo que sucede es que las declaraciones de variables y funciones
//  son asignadas en memoria durante la fase de compilación, 
//  pero quedan exactamente en dónde las has escrito en el código.
// Por ejemplo, si a la funcino sing() la enriendo primero en un paréntesis
// (function sing(){
//     console.log('oh lalala')
// })
// Va a dar error, porque el compilador lo primero que lee es el paréntesis

// function expression
var sing2 = function(){
    console.log('Callejeros - Function Expression')
}
console.log(sing2)
// Ésto tiene que estar abajo de la declaración, porque sino tirra error "sing2 is not a function" 

// function declaration
function sing3(){
    console.log('Los piojos - Functino Declaration')
}



// Hosting. 

