// Aca si le pasamos el valor Santiago o Marcos, nos va a saludar, en cambio, si le pasamos cualquier otro nombre, va a retornar que no nos conoce

var name = 'Santiago'
if (name === "Santiago" || name === "Marcos"){
  console.log("Hola, " + name)
} else{
  console.log("No te conozco, " + name)
}



// Acá hacemos una mini app para saber si podemos subir o no a una montaña rusa, donde si medimos más y sólo más de 1.79 y tenemos más ó 18 años, podemos subir

var edad = '18';
var estatura = 1.79;

if (edad => 18 && estatura > 1.79){
  console.log('Podes subirte a la atraccion')
} else {
  console.log('ups, no cumplis los requisitos')
}





