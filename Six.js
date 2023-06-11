//Сгруппировать объекты заказы по имени
'use strict'
const OrderOne =  {name: 'test', price: 200}
const OrderTwo =    {name: 'test1', price: 300}
const OrderThree = {name: 'test', price: 100}
const OrderFour =   {name: 'test', price: 600}
const Mas = [OrderOne,OrderTwo,OrderThree,OrderFour]
console.log(Mas)


const GroupNamePrice =(r, arr) => {
    const key = arr.name
    const item = r.get(key) || Object.assign({}, arr, {
        price: 0,
    })
    item.price += arr.price
    return r.set(key, item)
}
const MasNew = [...Mas.reduce(GroupNamePrice, new Map).values()]
console.log(MasNew)
























// const OrderOne = { name: 'test', price: 200 }
// const OrderTwo =   { name: 'test1', price: 300 }
// const OrderThree = { name: 'test', price: 100 }
// const OrderFour =  { name: 'test', price: 600 }
// let MasObj = [OrderOne,OrderTwo,OrderThree,OrderFour]
// console.log(MasObj)
//
// MasObj.reduce(
//     function (arr, sum1 = 0,sum2 = 0){
//         if (arr.name === 'test'){
//             sum1 += arr.price
//         }
//         else {
//             sum2 += arr.price
//         }
//         return sum1, sum2
//     }, 0
// )




















// let MasTwo= []
// const res = [];
// function Name (mas) {
//     let MasOne= []
//     let MasTwo= []
//     let priceend1 = 0
//     let priceend2= 0
//     if (name === "test") {
//         priceend1+=obj.price
//         MasOne = [obj.name, obj.price]
//         console.log(MasOne)
//     }
//     else {
//         priceend2+=obj.price
//         console.log(priceend2)
//     }
//
// }
// console.log(Name(OrderOne))
