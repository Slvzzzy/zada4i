//Отсортировать коллекцию по конкретному свойству
'use strict'
const collection = [
    {name: 'test', age: 34, country: 'RF'},
    {name: 'test2', age: 12, country: 'RF'},
    {name: 'test1', age: 54, country: 'RF'}
]
function sortFunction (mas) {
    return collection.sort((x, y) => x.age - y.age)
}
console.log(sortFunction(collection, 'desc', 'age'))
