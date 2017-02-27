var face = ["nose", "ear", "eye"];

function iterativeLog(array) {
  array.forEach((el, i) => {
    console.log(`${i}: ${el}`)
  })
}

function iterate(callback) {
  face.forEach(callback)
  return face
}

function doToArray(array, callback) {
  face.forEach(callback)
}
