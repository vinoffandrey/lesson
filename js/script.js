"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
console.log(numberOfFilms);

const personalMovieB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const a = prompt('Один из последних просмотренных фильмов', ''),
	b = prompt('На сколько оцените его?', ''),
	c = prompt('Один из последних просмотренных фильмов', ''),
	d = prompt('На сколько оцените его?', '');


personalMovieB.movies[a] = b;
personalMovieB.movies[c] = d;

console.log(personalMovieB);