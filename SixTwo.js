//Сгруппировать объекты заказы по имени
'use strict'
const OrderOne =  {name: 'test', price: 200}
const OrderTwo =    {name: 'test1', price: 300}
const OrderThree = {name: 'test', price: 100}
const OrderFour =   {name: 'test', price: 600}
const Mas = [OrderOne,OrderTwo,OrderThree,OrderFour]
console.log(Mas)
const GroupNamePrice = massive => Object.values(
    massive.reduce((arr, {name, price}) => {
        const key = name
        arr[key] ??= {name, price: 0}
        arr[key].price += price
        return arr
    }, {})
);

console.log(GroupNamePrice(Mas))