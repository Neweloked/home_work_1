'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели', '');
    }
}

start();

function rememberMyFilms() {
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
}

rememberMyFilms();

const persnalMovieDB = {
    county: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

function detectedPersonalLevel() {
    if(persnalMovieDB.county < 10) {
        console.log('Вы посмотрели достаточно мало фильмов!');
    } else if (persnalMovieDB.county >= 10 && persnalMovieDB.county <= 30) {
        console.log('Вы классический зритель!');
    } else if(persnalMovieDB.county > 30){
        console.log('Вы киноман!');
    } else {
        console.log('Ошибка!');
    }
}

detectedPersonalLevel();


function showMyDB (hidden) {
    if(!hidden) {
        console.log(persnalMovieDB);
    }
}
showMyDB();


function writeYourGenres() {
    for(let i = 1; i <= 3; i ++){
        persnalMovieDB.genres[i - 1] = prompt(`Ваш люимый жанр под номером ${i}`, '');
    }
}
writeYourGenres();

console.log(persnalMovieDB);
