

window.addEventListener('DOMContentLoaded', function () {
	const tabs = require('./js/modules/tabs'),
		modal = require('./js/modules/modal'),
		timer = require('./js/modules/timer'),
		cards = require('./js/modules/cards'),
		forms = require('./js/modules/forms'),
		slider = require('./js/modules/slider'),
		calc = require('./js/modules/calc');

	tabs();
	modal();
	timer();
	cards();
	forms();
	slider();
	calc();
});