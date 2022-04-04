//import $ from 'jquery';

//import { reduce } from "core-js/core/array";

$(document).ready(function () {
	$('.header__link:first').hover(function () {
		$(this).toggleClass('active');
	});

	$('.header__link:eq(1)').on('click', function () {
		//$('.header__link:even').fadeToggle(300);
		$('.header__link:even').animate({
			opacity: ".8"
		}, 2000);
	});
});