'use strict';

// new RegExp('pattern', 'flags');
// /pattern/f

// const ans = prompt('Введите ваше число');

// const reg = /\d/;
// console.log(ans.match(reg));

const str = 'My name is R2D2';

console.log(str.match(/\D/ig));


// \D не числа
// \W не буквы

// \d все числа
// \w все буквы
// \s все пробелы

// i - не зависимо от регистра
// g - все значения
// m - многострочный режим

// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));

// console.log('12-34-56'.replace(/-/g, ':'));

