"use strict";

let num = 50;
let numberOfFilms;
// console.log(numberOfFilms);

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
	}

}
start();
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}
writeYourGenres();


function rememberMyFilms() {
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
}
//rememberMyFilms();

function detectPersonalLevel() {
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
}
//detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);
