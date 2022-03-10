"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');

		while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
			personalMovieDB.count = +prompt('Сколько фильмов вы уже смотрели?', '');
		}
	},
	rememberMyFilms: function () {
		for (let i = 0; i < 2; i++) {
			const a = prompt('Один из последних просмотренных фильмов', ''),
				b = prompt('На сколько оцените его?', '');
			if (a != null && b != null && a != '' && b != '' && a.length < 50) {
				personalMovieDB.movies[a] = b;
				console.log('Done');
			} else {
				console.log('Error');
				i--;
			}

		}
	},
	detectPersonalLevel: function () {
		for (let i = 0; i < 1; i++) {
			if (personalMovieDB.count < 10) {
				window.alert('Просмотрено довольно мало фильмов');
				break;
			}
			if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
				window.alert('Вы классический зритель');
				break;
			}
			if (personalMovieDB.count > 30) {
				window.alert('Вы киноман');
				break;
			}
			else {
				window.alert('Произошла ошибка');
				break;
			}
		}
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieDB);
		}
	},
	toggleVisibleMyDB: function () {
		if (personalMovieDB.privat) {
			personalMovieDB.privat = false;
		} else {
			personalMovieDB.privat = true;
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i < 2; i++) {
			// let genre = prompt(`Ваш любимый жанр под номером ${i}`);
			// if (genre == '' || genre == null) {
			// 	console.log('Вы  ввели дичь');
			// 	i--;
			// } else {
			// 	personalMovieDB.genres[i - 1] = genre;
			// }
			let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

			if (genres == '' || genres == null) {
				console.log('Вы  ввели дичь');
				i--;
			} else {
				personalMovieDB.genres = genres.split(', ');
				personalMovieDB.genres.sort();
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} это ${item}`);
		});
	}
};

