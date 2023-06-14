//Определить, содержит ли строка только символы 'a', 'b', 'c' или нет.
'use strict'
const string = 'ajbcbakkcabcbcabcbaba'
const findABCinString = (str) => {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' && str[i] === 'b' && str[i] === 'c') {
            return true
        }
        else {
            return false
        }
    }
}
console.log(findABCinString(string))