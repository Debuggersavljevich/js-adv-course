// reference type
var object1 = {value : 10}
var objetct2 = object1
var object3 = {value : 10}

//context vs scope
//scope
let scope = function(){
  let scope2 = 'something'
}
//console.log(scope2)

//context
const object4 = {
  a: function(){
    console.log(this)
  }
}
//object4.a()

//instatiation
class Player {
  constructor(name, type){
    
    this.name = name;
    this.type = type;
  }
  introduce(){
    console.log(`Hola, soy ${this.name} y soy un ${this.type}`)
  }
}
//Esto es básicamente HERENCIA de objetos

class Mago extends Player {
  constructor(name, type){
    super(name, type)
    
  }
  play(){
    console.log(`ojo que soy un ${this.type}`)
  }
	
}

const magoRyze = new Mago('Ryze', 'Mago Rúnico')
const magoBrand = new Mago('Brand', 'Mago de Fuego')

console.log(magoRyze.introduce())
console.log(magoBrand.introduce())





