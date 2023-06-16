// Реализуйте функцию, которая принимает на вход массив и число,
// которое задает размер чанка (куска).
'use strict'
const mas = [ 'a', 'b', 'c', 'd' ];
const chunkFunc = (arr, size) => {
    let i = 0;
    const masNew = [];
    while (i < mas.length) {
        masNew.push(mas.slice(i, i + size));
        i += size;
    }
    return masNew;
}
console.log(chunkFunc(mas,3));
//почему ты создал переменную massNew не внутри функции?