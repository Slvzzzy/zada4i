//Строка состоит из слов, разделенных одним или несколькими пробелами. Найдите слово наибольшей длины.
'use strict'
const string = 'text education exceed.team part 2 for test';
const longestWordInString = (str) => {
    let wordLongest = '';
    str.split(' ').forEach(word => wordLongest.length < word.length ? wordLongest = word : null);
    return wordLongest;
}
console.log(longestWordInString(string));
