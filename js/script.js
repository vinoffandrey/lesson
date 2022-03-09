"use strict";

let num = 20;

function showFirstMessage(text) {
	console.log(text);
	let num = 30;
}


showFirstMessage('Hello!');
console.log(num);

// function calc(a, b) {
// 	return (a + b);
// }
// console.log(calc(1, 5));

function ret() {
	let num = 50;
	return num;
}
const anotherUrl = ret();
console.log(anotherUrl);

const logger = function () {
	console.log("Hello");
};

logger();

const calc = (a, b) => {
	console.log("1");
	return a + b;
};