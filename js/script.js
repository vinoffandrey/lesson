window.addEventListener('DOMContentLoaded', function () {

	// Tabs

	let tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items');

	function hideTabContent() {

		tabsContent.forEach(item => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});

		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function showTabContent(i = 0) {
		tabsContent[i].classList.add('show', 'fade');
		tabsContent[i].classList.remove('hide');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabContent();
	showTabContent();

	tabsParent.addEventListener('click', function (event) {
		const target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabContent();
					showTabContent(i);
				}
			});
		}
	});

	// Timer

	const deadline = '2022-05-11';

	function getTimeRemaining(endtime) {
		const t = Date.parse(endtime) - Date.parse(new Date()),
			days = Math.floor((t / (1000 * 60 * 60 * 24))),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60) % 24));

		return {
			'total': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	function getZero(num) {
		if (num >= 0 && num < 10) {
			return '0' + num;
		} else {
			return num;
		}
	}

	function setClock(selector, endtime) {

		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.total <= 0) {
				clearInterval(timeInterval);
			}
		}
	}

	setClock('.timer', deadline);

	//Modal мой вариант

	const btns = document.querySelectorAll('[data-modal]'),
		close = document.querySelector('[data-close]'),
		modal = document.querySelector('.modal');

	btns.forEach(element => {
		element.addEventListener('click', () => {
			modal.classList.toggle('_active');
			document.body.style.overflow = "hidden";
		});
	});
	function closeModal() {
		modal.classList.remove('_active');
		document.body.style.overflow = "";
	}
	close.addEventListener('click', closeModal());

	modal.addEventListener('click', (e) => {
		if (e.target === modal) {
			closeModal();
		}
	});
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.classList.contains('_active')) {
			closeModal();
		}
	});
	//Modal другой вариант

	// const modalTrigger = document.querySelectorAll('[data-modal]'),
	// 	modalWindow = document.querySelector('.modal'),
	// 	modalCloseBtn = document.querySelector('[data-close]');

	// modalTrigger.forEach(btn => {
	// 	btn.addEventListener('click', () => {
	// 		modalWindow.classList.add('show');
	// 		modalWindow.classList.remove('hide');
	// 		document.body.style.overflow = "hidden";
	// 	});
	// 	modalCloseBtn.addEventListener('click', () => {
	// 		modalWindow.classList.add('hide');
	// 		modalWindow.classList.remove('show');
	// 		document.body.style.overflow = "";
	// 	});
	// });

});