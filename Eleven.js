// Вернуть массив тех значений, которые есть и в первом и во втором
'use strict'
const array1 = [5, 2, 7, 3, 6, 8, 2, 9, 1];
const array2 = [4, 2, 9, 4, 5, 4];
function getSameElement(mas_1, mas_2) {
    let sameElement = [];
    for ( let i = 0; i < mas_1.length; i++ ) {
        for ( let j = 0; j < mas_2.length; j++ ) {
            if ( mas_1[i] === mas_2[j] )
                sameElement.push( mas_1[i] );
        }
    }
    return sameElement;
}
console.log(getSameElement(array1,array2));


// let array3 = new Set(array1.filter(function(num) {
//     return array2.includes(num)
//     }
// ))
// console.log(array3)
//11 задание: оно даже не корректно работает, возвращает коллекцию, а не массив чисел.
// Почему ты написал filter(function (num), а не через стрелочную?
// Перепиши без фильтра, new Set можешь использовать.

