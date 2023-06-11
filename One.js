//Дана строка. Если она начинается на 'abc', то заменить их на 'www',
// иначе добавить в конец строки 'zzz'
"use strict"
const Stroka= "abctestabctext"
let NewStroka= "abctestabctext"
let Zend = "zzz"
    if (Stroka.indexOf("abc") === 0) {
        NewStroka = Stroka.replace("abc","www")
        console.log(NewStroka)
    }
    else {
        NewStroka = Stroka.concat(Zend)
        console.log(NewStroka)
    }
