//Взять определенное количество элементов из массива
'use strict'
const array = [6, 8, 3, 6, 2, 9, 5, 3, 8, 8, 3];
const getSomeElements = (mas, numbEl) => {
    const someElements = [];
    let i = 0;
    while (mas.length >= numbEl && i < numbEl) {
        someElements.push(array[i]);
        i+=1;
    }
    if (numbEl> mas.length) {
        console.log('Массив меньше числа элементов');
    }
    else {
        return someElements;
    }
}
console.log(getSomeElements(array, 5));
