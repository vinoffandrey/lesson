'use strict';

const btns = document.querySelectorAll('button'),
	overlay = document.querySelector('.overlay');

// btn.onclick = function () {
// 	alert('Клик');
// };

// btn.onclick = function () {
// 	alert('Клик2');
// };


let i = 0;
const deleteElement = (e) => {
	console.log(e.currentTarget);
	console.log(e.type);
	// i++;
	// if (i == 1) {
	// 	btn.removeEventListener('click', deleteElement);
	// }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
	btn.addEventListener('click', deleteElement, { once: true });
});

// btn.addEventListener('click', () => {
// 	alert('Клик2');
// });

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
	event.preventDefault();

	console.log(event.target);
});