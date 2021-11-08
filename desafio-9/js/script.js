let listaDePlataformas = ["Netflix", "HBO Max", "Disney+", "Star+", "Paramount", "Amazon Prime"];

//INICIO LISTA DE PELICULAS
function Pelicula(titulo, genero, duracion, director, elenco, plataforma) {
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.director = director;
    this.elenco = elenco;
    this.plataforma = plataforma;
}

const pelicula1 = new Pelicula("The Avengers", "Accion, Ciencia ficcion", 143, "Joss Whedon", "Robert Downey Jr., Chris Evans, Jeremy Renner, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Tom Hiddleston", listaDePlataformas[0] + ", " + listaDePlataformas[1] + ", " + listaDePlataformas[2] + " y " + listaDePlataformas[5]);

const pelicula2 = new Pelicula("Mean Girls", "Comedia", 97 + "hs", "Mark Waters", "Lindsay Lohan, Rachel McAdams, Tim Meadows, Amy Poehler, Ana Gasteyer, Lacey Chabert, Lizzy Caplan", listaDePlataformas[5]);

const pelicula3 = new Pelicula("The Hobbit: An Unexpected Journey", "Aventura, Fantasia epica", 169, "Peter Jackson", "Ian Mckellen, Martin Freeman, Richard Armitage, James Nesbitt, Ken Stott, Sylvester McCoy, Barry Humphries", listaDePlataformas[1]);

const pelicula4 = new Pelicula("Charlie and the Chocolate Factory", "Aventuras, Comedia", 115, "Tim Burton", "Johnny Depp, Freddie Highmore, David Kelly, Helena Bonham Carter, Noah Taylor, Missi Pyle, James Fox", listaDePlataformas[5]);

let listaDePeliculas = [pelicula1, pelicula2, pelicula3, pelicula4];
//FIN LISTA DE PELICULAS

//BUSCADOR DE PELICULAS
let searchboxForm = document.getElementById("searchboxForm");
searchboxForm.addEventListener("submit", buscarPelicula)
let searchboxText = document.getElementById("peliculaBuscada");

function buscarPelicula(ev) {
    let peliculaBuscada = searchboxText.value;
    const resultadoBusqueda = listaDePeliculas.find(pelicula => pelicula.titulo === peliculaBuscada)

    let cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card__body");
    let cardText = document.createElement("div");
    cardText.setAttribute("class", "card__text");

    let cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card__title");
    cardTitle.innerHTML = `${resultadoBusqueda.titulo}`;
    cardText.appendChild(cardTitle);

    let cardPlatform = document.createElement("ul");
    cardPlatform.setAttribute("class", "card__platform");
    cardPlatform.innerHTML = `<li class="card__platform--item">${resultadoBusqueda.plataforma}</li>
    `;
    cardText.appendChild(cardPlatform);

    let cardList = document.createElement("ul");
    cardList.setAttribute("class", "card__list");
    cardList.innerHTML = `<li class="card__list--item"><span class="card__list--bold">Genero:</span>${resultadoBusqueda.genero}</li>
    <li class="card__list--item"><span class="card__list--bold">Duracion:</span>${resultadoBusqueda.duracion}</li>
    <li class="card__list--item"><span class="card__list--bold">Director:</span>${resultadoBusqueda.director}</li>
    <li class="card__list--item"><span class="card__list--bold">Elenco:</span>${resultadoBusqueda.elenco}</li>`;
    cardText.appendChild(cardList);

    cardBody.appendChild(cardText);
    document.getElementById("resultado").appendChild(cardBody);

    ev.preventDefault();
    //FALTARIA AGREGAR ALGUN CARTEL QUE DIGA "PRUEBE OTRA PELICULA" y QUE NO SE QUEDEN GUARDADAS LAS BUSQUEDAS POR AHORA
}
//FIN BUSCADOR DE PELICULAS