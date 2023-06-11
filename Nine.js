// Отфильтровать коллекцию, где у свойства есть хоть какое-то значение
'use strict'
const Friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 35, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 31, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 32, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
]
const FriendsMen = Friends.filter((mas) => {
    if (mas.sex !== 'f' && mas.age < 33) return mas.sex
})
console.log(FriendsMen)