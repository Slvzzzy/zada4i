//Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false.
'use strict'
const array =  ['text', 'education', 'part', '2', 'exceed', 'team'];
const inArray = (elementmas, mas) => {
    if (mas.indexOf(elementmas) > -1) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
console.log(inArray('text', array));
