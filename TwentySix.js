// Заполните массив следующим образом: в первый элемент запишите 'x',
// во второй 'xx', в третий 'xxx' и так далее.
'use strict'
const fillFunc = (number) => {
    const result = [];
    let string = 'x';
    for (let i = 0; i < number; i++) {
        result.push(string);
        string += 'x';
    }
return result;
}
console.log(fillFunc(7));