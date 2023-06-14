//Проверьте, что строка начинается на http://
'use strict';
const link = 'http://www.figma.com';
const checkStringForHttpFunc = (string) => {
  if (string.substring(0,4) === 'http') {
      return console.log(true);
  }
  else {
      return console.log(false);
  }
}
checkStringForHttpFunc(link);