//Реализуйте функцию, которая принимает на вход массив, состоящий из массивов-пар
// и возвращает объект, полученный из этих пар.
'use strict'
const Mas =  [
    [ 'name', 'test' ],
    [ 'age', 12 ],
    [ 'country', 'RF' ]
]
console.log(Mas)
function DestructMas (mas) {
    return Object.fromEntries(Mas)
}
console.log(DestructMas(Mas))
