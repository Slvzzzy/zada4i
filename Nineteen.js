//Заменить все символы 'a' и 'b' на 'A' и 'B' соответственно.
'use strict'
const string = 'abcetgbabctest';

const upStringABSymbol = (str) => {
    const resulString = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'b') {
            resulString.push(str[i].toUpperCase())
        }
        else {
            resulString.push(str[i]);
        }
    }
    return resulString.toString();
}
console.log(upStringABSymbol(string));



//попробуй такой подход: сделать пустой массив и все те буквы которые подходят - пушить с вызванным методом toUpperCase,
// а в else пушить просто и потом возвращать массив привращенный в строку(вспомни как)