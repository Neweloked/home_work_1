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

    if(lastFilm != null && assessment != null && lastFilm != '' && assessment != '' && lastFilm.length < 50) {
        persnalMovieDB.movies[lastFilm] = assessment;
        console.log('done!');
    }else {
        console.log('error!');
        i--;
    }
}

if(persnalMovieDB.county < 10) {
    console.log('Вы посмотрели достаточно мало фильмов!');
} else if (persnalMovieDB.county >= 10 && persnalMovieDB.county <= 30) {
    console.log('Вы классический зритель!');
} else if(persnalMovieDB.county > 30){
    console.log('Вы киноман!');
} else {
    console.log('Ошибка!');
}


console.log(persnalMovieDB);
