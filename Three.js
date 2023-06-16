//Реализуйте функцию, которая принимает на вход массив, состоящий из массивов-пар
// и возвращает объект, полученный из этих пар.
'use strict'
const mas =  [
    [ 'name', 'test' ],
    [ 'age', 12 ],
    [ 'country', 'RF' ]
];
const testFunc = (arr) => {
    const result = {};
    arr.forEach(item => {
        result[item[0]] = item[1];
    });
    return result;

}
console.log(testFunc(mas));
// let obj = {}
// Mas.forEach((item, index) => {
//         obj = {...Mas[item][index]}
// }
// )
// console.log(obj)

// function DestructMas () {
//     return Object.fromEntries(Mas)
// }
// console.log(DestructMas(Mas))

//Давай перепишем без Object.fromEntries
// for (let i = 0, endI = Mas.length; i < endI; i++) {
//     obj[Mas[i]] = {...Mas[i]}
// }