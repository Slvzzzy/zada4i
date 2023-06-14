// наиболее часто встречаемый элемент массива.
'use strict'
const mas = [6, 3, 8, 2, 6, 8, 2, 8, 7, 2, 6, 8, 8, 8, 6];

function moreElinMas(arr) {
    let el = 0;
    let maxEl = 0;
    for (let i = 0; i < mas.length; i++) {
        let count = 0;
        for (let j = 0; j < mas.length; j++) {
            if (arr[i] === arr[j])
                count++;
        }
        if (count > el) {
            el = count;
            maxEl = arr[i];
        }
    }
    return maxEl;
}
console.log(moreElinMas(mas));
