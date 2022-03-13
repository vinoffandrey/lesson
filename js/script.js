'use strict';

document.addEventListener('DOMContentLoaded', () => {

	const movieDB = {
		movies: [
			"Логан",
			"Лига справедливости",
			"Ла-ла лэнд",
			"Одержимость",
			"Скотт Пилигрим против..."
		]
	};

	const adv = document.querySelectorAll('.promo__adv img'),
		promo = document.querySelector('.promo__bg'),
		genre = promo.querySelector('.promo__genre'),
		movieList = document.querySelector('.promo__interactive-list'),
		form = document.querySelector('form.add'),
		input = form.querySelector('.adding__input'),
		checkbox = form.querySelector('[type="checkbox"'),
		button = form.querySelector('button');


	form.addEventListener('submit', (event) => {
		event.preventDefault();

		let inputValue = input.value;
		const favorite = checkbox.checked;

		if (inputValue) {
			if (inputValue.length > 21) {
				inputValue = `${inputValue.substring(0, 22)}...`;
			}
			if (favorite) {
				alert(`${inputValue} - ваш любимый фильм`);
			}
			movieDB.movies.push(inputValue);
			sortArr(movieDB.movies);

			createMovieList(movieDB.movies, movieList);
		} else {
			alert('Введите название фильма');
		}
		event.target.reset();
	});

	const deleteAdv = (arr) => {
		arr.forEach(item => {
			item.remove();
		});
	};

	const makeChanges = () => {
		genre.textContent = 'Драма';
		promo.style.cssText = 'background-image: url("img/bg.jpg")';
	};

	const sortArr = (arr) => {
		arr.sort();
	};

	function createMovieList(films, parent) {
		parent.innerHTML = "";
		sortArr(movieDB.movies);
		films.forEach((film, i) => {
			parent.innerHTML += `
<li class= "promo__interactive-item" > ${i + 1}) ${film} <div class="delete"></div></ > `;
			i++;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);
				createMovieList(films, movieList);
			});
		});
	}

	deleteAdv(adv);
	makeChanges();
	createMovieList(movieDB.movies, movieList);
});