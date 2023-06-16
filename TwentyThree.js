//Из объекта сформировать  массива ключей
'use strict'
const collection =   {
    name: 'test',
    age: 34,
    country: 'RF'
};
const formKeyandValues = (obj) => {
    const arr1 = [];
    for (let prop in obj) {
        arr1.push(prop);
    }
    return arr1;
}
console.log(formKeyandValues(collection));