// Напишите функцию, которая преобразует массив
'use strict'
let array = [
    {name: 'width', value: 300},
    {name: 'height', value: 100}
];
const convertArray = (arr) => Object.fromEntries(arr.map(obj => [obj.name, obj.value]));
console.log(convertArray(array));

// const convertArray = (mas) => {
//     mas.forEach(val => {
//         mas[val.name] = val.value;
//     });
//     for (let i = 0; i < array.length; i++) {
//         delete array[i]
//     }
//
//     return Object.assign({}, mas);
//
// }
// console.log(convertArray(array))




