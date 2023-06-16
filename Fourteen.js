//Проверьте, что строка начинается на http://
'use strict';
const link = 'http://www.figma.com';
const checkStringForHttpFunc = (string) => {
  if (string.startsWith('http:')) {
      return console.log(true);
  }
  else {
      return console.log(false);
  }
}
checkStringForHttpFunc(link);