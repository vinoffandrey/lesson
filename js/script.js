"use strict";

function hello() {
	console.log('Привет');
	debugger;
}
hello();
function hi() {
	console.log('Hi');
}
hi();

const arr = [1, 2, 5, 43, 23],
	sorted = arr.sort(compareNum);

function compareNum(a, b) {
	return a - b;
}
console.log(sorted);