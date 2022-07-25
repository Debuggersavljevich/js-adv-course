// El hoisting se encarga de subir las var o las funciones a lo más alto del stack para que se ejecuten primero
// por ejemplo:

console.log('1------')
console.log(teddy)
console.log(sing())
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
// Hosting. 

