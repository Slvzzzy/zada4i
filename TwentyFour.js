//Переставить местами максимальный и минимальный элемент в массиве
'use strict'
const array = [5, 7, 2, 9, 5, 6, 3, 1, 8];
const swapMinMaxElement = (mas) => {
    let min = mas[0];
    let min_key = 0;
    let max = mas[0];
    let max_key = 0;
    const result = [...mas];
    mas.forEach((item,i) => {
        if (item >= max) {
            max = item;
            max_key = i;
        }
        else {
            if (item < min) {
                min = item;
                min_key = i;
            }
        }
    }
    )
    result[max_key]=min;
    result[min_key]=max;
    return result;
}
console.log(swapMinMaxElement(array));