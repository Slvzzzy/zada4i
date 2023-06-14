//Реализуйте функцию, которая параметром принимает строку вида '__|----|_|-|____|--'.
// Где '_' - это 0, а '-' - это 1. Нужно вернуть строку вида '00111101000011', где символы заменены на их обозначение.
// Длина строки может быть любой. Повторение одного символа тоже может быть различное количество раз.
'use strict'
const string = '__----_-____--';
const replaceStringOnZeroOne = (str) =>{
    let replaceString = '';
    if ( typeof str === "string" ) {
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '_' || str[i] === '-') {
                if (str[i] === '_') {
                    replaceString += 0;
                }
                if (str[i] === '-') {
                    replaceString += 1;
                }
            }
        }
    }
    else {
        console.log('Строки не найдено');
    }
    return replaceString;
}
console.log(replaceStringOnZeroOne(string));
