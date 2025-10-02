function lowerCaseWords(array){
    let arrayResult = array.filter(e => typeof e === 'string')
    .map(e => e.toLowerCase())
    
    return arrayResult
}

const mixedArray = ["PIZZA", 10, true, 25, false, 'Wings']
console.log(lowerCaseWords(mixedArray))