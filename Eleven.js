// Вернуть массив тех значений, которые есть и в первом и во втором
'use strict'
const array1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const array2 = [4, 2, 9, 4, 5, 4]
let array3 = new Set(array1.filter(function(num) {
    return array2.includes(num)
    }
))
console.log(array3)