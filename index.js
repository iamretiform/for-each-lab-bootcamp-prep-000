function iterativeLog(array) {
  array.forEach(function (element, index){
  console.log(`${index}: ${element}`)
})
}

function iterate(callback) {
  var animalArray = ["cat", "dog", "zebra"]
  animalArray.forEach(callback)
    return animalArray
  }

function doToArray(array, callback) {
  array.forEach(callback)
}
