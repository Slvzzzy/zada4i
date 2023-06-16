//Реализуйте функцию, котора параметром принимает строку.
// Выведите сформированный объект из параметров строки браузера.
'use strict'
const str = 'https://underscorejs.org?a=4&b=8';
const objectInUrl = (url) => {
    const result =[];
    for (let i = 0; i< str.length; i++) {
        if (url[i] ==='a' && url[i+1] ==='='){
            result.push(url[i]);
            result.push(url[i+2]);
        }
        if (url[i] ==='b' && url[i+1] ==='='){
           result.push(url[i]);
            result.push(url[i+2]);
        }
    }
    let i = 0;
    const masNew = [];
    while (i < result.length) {
        masNew.push(result.slice(i, i + 2));
        i += 2;
    }
   masNew.forEach(item => {
        masNew[item[0]] = item[1];
    });
    for (let i = 0; i < masNew.length; i++) {
        delete masNew[i];
    }
    return Object.assign({}, masNew);
}
console.log(objectInUrl(str));


// const obj1 = new URL(url);
// const obj2 = Object.fromEntries(new URLSearchParams(obj1.search));
// return  console.log(obj2);