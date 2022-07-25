//advanced arrays

const array = [1,2,5,24]

const double = []
const newArray = array.forEach((num) => {
  double.push(num * 2)
})

console.log(double)

//map, filter y reduce

//map
const mapArray = array.map((num) => {
  return num * 2
})
console.log(mapArray)

//filter
const filterArray = array.filter(num => {
  return num >= 5
})
console.log(filterArray)
//reduce
const reduceArray = array.reduce((accumulator, num) =>{
  return accumulator + num
}, 0)
console.log(reduceArray)