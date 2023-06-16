// Отфильтровать коллекцию, где у свойства есть хоть какое-то значение
'use strict'
const friends = [
    { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 35, sex: 'm' },
    { passport: '03005989', name: 'Chandler Muriel Bing', age: 31, sex: 'm' },
    { passport: '03005990', name: 'Ross Eustace Geller', age: 32, sex: 'm' },
    { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
    { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
    { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
]

const filterBySexFunc = (arr) => {
    const result = [];
    arr.forEach((element,i) => {
        if (element.sex !== 'f') {
        result.push(arr[i]);
    }
}  )
    return groupByAgeFunc(result)
}
const groupByAgeFunc = (arr) => {
    for (let i = 0, endI = arr.length - 1; i < endI; i++) {
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j]['age'] > arr[j + 1]['age']) {
                let swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}
console.log(filterBySexFunc(friends))

// const FriendsMen = Friends.filter((mas) => {
//     if (mas.sex !== 'f' && mas.age < 33) return mas.sex
// })
// console.log(FriendsMen)
// фильтр нельзя, второе, сделай так, чтобы у тебя не было привязки к конкретному полю,
//     если я объект с другими полями запихну, не отработает