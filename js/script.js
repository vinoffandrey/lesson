"use strict";

// if (1) {
// 	console.log('Ok!');
// } else {
// 	console.log('Error!');
// }

const num = '50';

// if (num < 49) {
// 	console.log('Error!');
// } else if (num > 100) {
// 	console.log('Много');
// } else {
// 	console.log('Верно!');
// }

// (num === 50) ? console.log('Верно') : console.log('Error!');

switch (num) {
	case '49':
		console.log('Неверно');
		break;
	case '100':
		console.log('Неверно');
		break;
	case '50':
		console.log('Верно');
		break;
	default:
		console.log('Не получилось!');
		break;
}