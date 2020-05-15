'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');


const persnalMovieDB = {
    county: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

for (let i = 0; i < 2; i++) {
    let lastFilm = prompt('Какой фильм вы посмотрели последним?', '');
    let assessment = prompt('На сколько вы его оцените по 5 бальной шкале?', '');

    persnalMovieDB.movies[lastFilm] = assessment;
}


console.log(persnalMovieDB);
