// Реализуйте функцию, которая принимает на вход массив и число,
// которое задает размер чанка (куска).
'use strict'
const Mas = [ 'a', 'b', 'c', 'd' ]
const MasNew = []
let Number = 3
const chunkFunc = (arr, size) => {
    let i = 0
    while (i < Mas.length) {
        MasNew.push(Mas.slice(i, i + size))
        i += size
    }
    return MasNew
}
console.log(chunkFunc(Mas,Number))
