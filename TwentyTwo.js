//Из объекта сформировать 2 массива ключи, значения
'use strict'
const collection =   {
    name: 'test',
    age: 34,
    country: 'RF'
};
const formKeyandValues = (obj) => {
    const arr1 = [];
    const arr2 = [];
    for (let prop in obj) {
        arr1.push(prop);
        arr2.push(collection[prop]);
    }
    return [arr1,arr2];
}
console.log(formKeyandValues(collection));
