import tabs from './js/modules/tabs';
import modal from './js/modules/modal';
import timer from './js/modules/timer';
import cards from './js/modules/cards';
import forms from './js/modules/forms';
import slider from './js/modules/slider';
import calc from './js/modules/calc';
import { openModal } from './js/modules/modal';

window.addEventListener('DOMContentLoaded', function () {

	const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

	tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
	modal('[data-modal]', '.modal', modalTimerId);
	timer('.timer', '2022-06-11');
	cards();
	forms('form', modalTimerId);
	slider({
		container: '.offer__slider',
		slide: '.offer__slide',
		nextArrow: '.offer__slider-next',
		prevArrow: '.offer__slider-prev',
		totalCounter: '#total',
		currentCounter: '#current',
		wrapper: '.offer__slider-wrapper',
		field: '.offer__slider-inner'

	});
	calc();
});