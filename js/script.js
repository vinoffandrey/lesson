"use strict";

const box = document.getElementById('box'),
	btns = document.getElementsByTagName('button'),
	circles = document.getElementsByClassName('circle'),
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'),
	oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '300px';

box.style.cssText = `background-color: green; width: 500px;`;

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
// 	hearts[i].style.backgroundColor = 'green';
// }

hearts.forEach(item => {
	item.style.backgroundColor = "blue";
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div);
// wrapper.insertBefore(div, hearts[1]);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// wrapper.removeChild(hearts[1]);

// hearts[0].replaceWith(circles[0]);
// wrapper.replaceChild(circles[0], hearts[0]);

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterend", '<h2>Hello!</h2>');