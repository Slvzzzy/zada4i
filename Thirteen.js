// Обрезать строку по определенному кол-ву символов
'use strict'
const link = 'text education part 2'
function sliceFunc(mas,num) {
        let trimmedString = mas.substring(0, num)
return trimmedString + ('...')
}
console.log(sliceFunc(link, 12))
//13 задание: зачем тебе переменная text? Она не кажется тебе лишней?

