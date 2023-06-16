//Дана строка. Если она начинается на 'abc', то заменить их на 'www',
// иначе добавить в конец строки 'zzz'
"use strict"
const string= "abctestabctext";
const strCorrection = (str) => {
    let newString = "";
    if (str.substring(0,3) === "abc") {
           return newString = str.replace("abc","www");
        }
        else {
           return  newString =  str + "zzz";
        }
}
strCorrection(string);


    // if (string.indexOf("abc") === 0) {
    //     newString = string.replace("abc","www")
    //     console.log(newString)
    // }
    // else {
    //     newString = string.concat(zEnd)
    //     console.log(newString)
    // }
    //С indexOf интересно придумал, но его лучше для такого не использовать. Перепиши на subStr.
//
// concat тоже лучше не использовать, он больше для массивов, и , пока не вдавайся, по памяти много берет.
//
// Тут 2 варианта как переделать:
//
//  1) newString = “zzz” + stroka
// 2) newString = zzz${stroka} — это просто как пример. Чаще всего мы его используем когда какое-то динамическое значение в строку пихаем.
//
// Типо:
//
// Const greetingsMessage = `Hello, dear ${getUserName()}’
