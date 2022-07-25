// Stack Overflow
function recurssion(){
  
  return recurssion()
}
// recurssion()
// Cuando llamamos a Recurssion, lo que pasa es que excede el máx stack num y causa un overflow del callstack


// Garbage Collector
// Declaramos un objeto
const human = {
  eyes: 'blue',
  gender: 'male',
  height: 1.90
}
// Lo reasignamos
// Entonces, el Garbage Collector toma el anterior valor de "human" y lo elimina. Haciendo así un código más limpio y rápido

// Memory Leaks
let array = [];
for (let i = 5; i > 1; i++){
  array.push(i-1)
}
// Básicamente el código de arriba, llena la memoria y rompe todo, porque llega al tope de memoria
// console.log(array)



