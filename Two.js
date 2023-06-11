//Возвращает рандомный элемент массива(не использовать Math.random).
'use strict'
const RandomMas = [11,12,13,14,15,16,17,18,19,20]

let RandomEl = (min=0, max=10) => Math.floor((new Date().getMilliseconds() * (max - min) + min)/1000)
console.log(RandomMas)
console.log(`Элемент номер ${RandomEl()} :`,RandomMas[RandomEl()])

