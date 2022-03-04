"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
console.log(numberOfFilms);

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

// if (personalMovieDB.count < 10) {
// 	window.alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
// 	window.alert('Вы классический зритель');
// } else if (personalMovieDB.count > 30) {
// 	window.alert('Вы киноман');
// } else {
// 	window.alert('Произошла ошибка');
// }

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




// for (let i = 0; i < 2; i++) {

// 	const a = prompt('Один из последних просмотренных фильмов', ''),
// 		b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('Done');
// 	} else {
// 		console.log('Error');
// 		i--;
// 	}

// }

// let i = 0;
// do {
// 	const a = prompt('Один из последних просмотренных фильмов', ''),
// 		b = prompt('На сколько оцените его?', '');
// 	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// 		personalMovieDB.movies[a] = b;
// 		console.log('Done');
// 		i++;
// 	}
// 	else {
// 		console.log('Error');
// 		i--;
// 	}
// }
// while (i < 2);


let sum = 0;
while (sum < 2) {
	const a = prompt('Один из последних просмотренных фильмов', ''),
		b = prompt('На сколько оцените его?', '');
	if (a != null && b != null && a != '' && b != '' && a.length < 50) {
		personalMovieDB.movies[a] = b;
		console.log('Done');
		sum++;
	}
	else {
		console.log('Error');
		sum--;
	}
}

console.log(personalMovieDB);







// const num = '50';
// while (num <= 55) {
// 	console.log(num)
// 	num++;
// }

// do {
// 	console.log(num);
// 	num++;
// }
// while (num < 55);

// for (let i = 1; i < 8; i++) {
// 	console.log(num);
// 	num++;
// }

// for (let i = 1; i < 10; i++) {
// 	if (i === 6) {
// 		// break;
// 		continue;
// 	}
// 	console.log(i);
// }
