//RENDERIZAR
$(document).ready(function() {
    //No estoy segura si tengo que poner todo el get json aca dentro
});

const URLJSON = "js/movies.json";

$.getJSON(URLJSON, function(respuesta, estado) {
    if (estado == "success") {
        let movies = respuesta.movies;
        for (const movie of movies) {
            //<img class="card__poster--image" src="${movie.poster} alt="Poster de ${movie.title}">
            //agregar plataformas
            $("#movie").append(`<div class="movie__item">
                    <div class="movie__favorite">
                        <button class="movie__favorite--button" id="btn${movie.id}"><i class="movie__favorite--icon fas fa-ticket-alt"></i></button>
                    </div>
                    <div class="movie__poster">
                    </div>
                    <div class="movie__details">
                        <h4 class="movie__title">${movie.title}</h4>
                        <ul class="movie__list">
                            <li class="movie__list--item"><span class="movie__list--bold">Genero:</span>${movie.genre}</li>
                            <li class="movie__list--item"><span class="movie__list--bold">Duracion:</span>${movie.duration}</li>
                        </ul>
                    </div>
            </div>`); //agregar director y elenco con un +
            $(`#btn${movie.id}`).on('click', function() {
                addToLibrary(movie);
            });
        };
    }
});

let library = [];


//BUSCADOR DE PELICULAS
let searchboxForm = document.getElementById("searchboxForm");
searchboxForm.addEventListener("submit", findMovie);
let searchboxText = document.getElementById("searchbox");


function findMovie(ev) {
    let movieSearched = searchboxText.value;
    const movieFound = movies.find(movie => movie.title === movieSearched)

    $("#result").append(`<div class="movie__item">
            <div class="movie__favorite">
                <button class="movie__favorite--button" onclick="addToLibrary(${movieFound});"><i class="movie__favorite--icon fas fa-ticket-alt"></i></button>
            </div>
            <div class="movie__poster">
            </div>
            <div class="movie__details">
                <h4 class="movie__title">${movieFound.title}</h4>
                <p class="movie__plataform">${movieFound.platform}</p>
                <ul class="movie__list">
                    <li class="movie__list--item"><span class="movie__list--bold">Genero:</span>${movieFound.genre}</li>
                    <li class="movie__list--item"><span class="movie__list--bold">Duracion:</span>${movieFound.duration}</li>
                    <li class="movie__list--item"><span class="movie__list--bold">Director:</span>${movieFound.director}</li>
                    <li class="movie__list--item"><span class="movie__list--bold">Elenco:</span>${movieFound.cast}</li>
                </ul>
            </div>
    </div>`);

    ev.preventDefault();
    //FALTARIA AGREGAR ALGUN CARTEL QUE DIGA "PRUEBE OTRA PELICULA" y QUE NO SE QUEDEN GUARDADAS LAS BUSQUEDAS POR AHORA
};
//FIN BUSCADOR DE PELICULAS

//INICIO LIBRERIA DE PELICULAS

function addToLibrary(newLibraryMovie) {
    library.push(newLibraryMovie);
    console.log(library);
    Swal.fire(
        newLibraryMovie.title,
        'Ha sido agregada a tu libreria',
        'success'
    );
    localStorage.setItem("myLibrary", JSON.stringify(library));
};

let probando = localStorage.getItem("myLibrary");
console.log(probando);
/*
function moviesInLibrary() {
    for (const addMovie of probando) {
        $("#guardados").append(`<div class="movie__item">
        <div class="movie__favorite">
            <button class="movie__favorite--button" onclick="addToLibrary(${addMovie});"><i class="movie__favorite--icon fas fa-ticket-alt"></i></button>
        </div>
        <div class="movie__poster">
        </div>
        <div class="movie__details">
            <h4 class="movie__title">${addMovie.title}</h4>
            <p class="movie__plataform">${addMovie.platform}</p>
            <ul class="movie__list">
                <li class="movie__list--item"><span class="movie__list--bold">Genero:</span>${addMovie.genre}</li>
                <li class="movie__list--item"><span class="movie__list--bold">Duracion:</span>${addMovie.duration}</li>
                <li class="movie__list--item"><span class="movie__list--bold">Director:</span>${addMovie.director}</li>
                <li class="movie__list--item"><span class="movie__list--bold">Elenco:</span>${addMovie.cast}</li>
            </ul>
        </div>
</div>`);
    };
};
*/
//FIn LIBRERIA DE PELICULAS

//BUSCADOR DE PELICULAS CON SWAL

function buscar() {
    let movieSearched = searchboxText.value;
    const movieFound = movies.find(movie => movie.title === movieSearched);
    $("#buscar").submit(function(e) {
        e.preventDefault();
        Swal.fire(
            movieFound.title + ' se encuentra en',
            movieFound.platform,
            "info"
        );
    });

};

//FIN BUSCADOR CON SWAL