//Отсортировать коллекцию по конкретному свойству
'use strict'
const collection = [
    {name: 'test', age: 34, country: 'BR'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
]
const groupByNameFunc = (arr) => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j]['name'] > arr[j + 1]['name']) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
console.log(groupByNameFunc(collection))
//10 задание: ты в функцию прокидываешь три аргумента, но она принимает всего один.
// Ты обращаешься к внешней переменной collection, а не к массиву который прокидываешь. а если я захочу использовать её на другом массиве?
// Метод sort - мутирующий(он изменет твой исходный массив), сделай так, чтобы он его не изменял, подсказка: в одном из комментариев выше я давал намёк на это
