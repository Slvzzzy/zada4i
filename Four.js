//Добавить все значения из второго массива в первый
'use strict'
const masOne = [4,1,2];
const masTwo = [5,6,7];
const masPlusOneTwo = (arr1,arr2) => [...arr1,...arr2]
console.log(masPlusOneTwo(masOne,masTwo));

//Перепиши через spread