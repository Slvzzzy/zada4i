//Добавить все значения из второго массива в первый
'use strict'
const masOne = [4,1,2];
const masTwo = [5,6,7];
function masPlusOneTwo (arr1,arr2) {
    let masNew = [...arr1,...arr2];
    return masNew;
}
console.log(masPlusOneTwo(masOne,masTwo));

//Перепиши через spread