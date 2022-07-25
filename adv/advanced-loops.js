// Advanced Loops

const frutas = ['Banana', 'Manzana', 'Sandia']
for (item of frutas){
  console.log(item)
}

// For Of
// Iterating - arrays y strings
const cantidadDeFrutas = {
  banana: 20,
  manzana: 5,
  sandia: 1
}

// For In - en las propiedades del objeto
// Enumerating, para objetos (no es iterar)
for (item in cantidadDeFrutas){
  console.log(item)
}