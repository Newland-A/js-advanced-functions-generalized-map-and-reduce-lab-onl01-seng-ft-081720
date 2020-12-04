// Add your functions here
function reduce(all, night, long) {
  let result = (!!long) ? long : all[0]
  let i = (!!long) ? 0 : 1
  for(; i < all.length; i++) {
    result = night(all[i], result)
  } 
  return result
}

function map(srcArray, element) {
  let result = []
  for(let i = 0; i < srcArray.length; i++) {
    let array = srcArray[i]
    result.push(element(array))
  }
  return result
}