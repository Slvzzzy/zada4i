//Сгруппировать объекты заказы по имени
'use strict'
const orderOne =  {name: 'test', price: 200};
const orderTwo =    {name: 'test1', price: 300};
const orderThree = {name: 'test', price: 100};
const orderFour =   {name: 'test', price: 600};
const mas = [orderOne,orderTwo,orderThree,orderFour];
console.log(mas);
const groupNamePrice = massive => Object.values(
    massive.reduce((arr, {name, price}) => {
        const key = name;
        arr[key] ??= {name, price: 0};
        arr[key].price += price;
        return arr;
    }, {})
);

console.log(groupNamePrice(mas));