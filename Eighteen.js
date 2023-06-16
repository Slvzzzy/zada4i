//Определить, содержит ли строка только символы 'a', 'b', 'c' или нет.
'use strict'
const string = 'ajbcbakkcabcbcabcbaba';

const findABCinString = (str) => {
    let c = 0
    if (typeof str === "string") {
        for (let i = 0; i < str.length; i++) {
            if ((str[i].indexOf('a') > -1 || str[i].indexOf('b') > -1 || str[i].indexOf('c') > -1)) {
                c+=1
            }
        }
        if (c === str.length) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
    else {
        console.log('No string');
    }

}
findABCinString(string);


// const findABCinString = (str) => {
//         if ( typeof str === "string" && (str >= "a" && str <= "c" && !(str > "c" ))) {
//             console.log(true)
//         }
//         else {
//             console.log(false)
//         }
//     }
//
// findABCinString(string)



