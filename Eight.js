// наиболее часто встречаемый элемент массива.
'use strict'
const Mas = [6, 3, 8, 2, 6, 8, 2, 8, 7, 2, 6, 8, 8, 8, 6]
let MaxEl = 0
function MoreEl(arr) {
    let el = 0
    for (let i = 0; i < Mas.length; i++) {
        let count = 0
        for (let j = 0; j < Mas.length; j++) {
            if (arr[i] === arr[j])
                count++
        }
        if (count > el) {
            el = count
            MaxEl = arr[i]
        }
    }
    return MaxEl
}
console.log(MoreEl(Mas))
