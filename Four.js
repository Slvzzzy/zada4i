//Добавить все значения из второго массива в первый
'use strict'
const MasOne = [4,1,2]
const MasTwo = [5,6,7]
function MasCon (arr1,arr2) {
    return MasOne.concat(MasTwo)
}
console.log(MasOne)
console.log(MasTwo)
console.log(MasCon(MasOne,MasTwo))