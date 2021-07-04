
exports.min = function min (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let newArr = array.sort((a,b) => {
    return a-b;
  })
  return newArr[0];
}

exports.max = function max (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let newArr = array.sort((a,b) => {
    return b-a;
  })
  return newArr[0];
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || array.length === 0) {
    return 0;
  }
  let sum = array.reduce((a,b)=> {
    return a+b;
  })
  return sum/array.length;
}
