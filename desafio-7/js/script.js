let listaDePlataformas = ["Netflix", "HBO Max", "Disney+", "Star+", "Paramount", "Amazon Prime"];

console.log(listaDePlataformas[3]);

listaDePlataformas.sort();

console.log(listaDePlataformas[3]);

console.log(listaDePlataformas);

/*BORRAR SORT DESPUES PORQUE ME CAMBIA EL ORDEN DE LAS PLATAFORMAS*/

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

function calcular(pelicula) {
    switch (pelicula) {
        case pelicula1.titulo:
            return pelicula1.plataforma;
            break;
        case pelicula2.titulo:
            return pelicula2.plataforma;
            break;
        case pelicula3.titulo:
            return pelicula3.plataforma;
            break;
        case pelicula4.titulo:
            return pelicula4.plataforma;
            break;
        default:
            return alert("La pelicula no fue encontrada en ninguna plataforma");
            break;
    }
}


let pelicula = prompt("Ingrese la pelicula que desea buscar");
let resultado = calcular(pelicula);
alert("La pelicula " + pelicula + " esta en: " + resultado);

let listaDePeliculas = [pelicula1, pelicula2, pelicula3, pelicula4];

const pelicula5 = new Pelicula("Probando", "Probando", "Probando", "Probando", "Probando", "Probando");
listaDePeliculas.push(pelicula5);

const resultadoBusqueda = listaDePeliculas.find(pelicula => pelicula.plataforma === listaDePlataformas[5]);

console.log(resultadoBusqueda.titulo);

// let cardList = document.createElement("ul");
// cardList.setAttribute("class", "card__list");
// for (const pelicula of listaDePeliculas) {
//     let cardListItem = document.createElement("li");
//     cardListItem.setAttribute("class", "card__list--item");
//     cardListItem.innerHTML = ``
// }


let cardBody = document.createElement("div");
cardBody.setAttribute("class", "card__body");
let cardText = document.createElement("div");
cardText.setAttribute("class", "card__text");


for (const pelicula of listaDePeliculas) {
    let cardList = document.createElement("ul");
    cardList.setAttribute("class", "card__list");
    cardList.innerHTML = `<li class="card__list--item"><span class="card__list--bold">Genero:</span>${pelicula.genero}</li>
    <li class="card__list--item"><span class="card__list--bold">Duracion:</span>${pelicula.duracion}</li>
    <li class="card__list--item"><span class="card__list--bold">Director:</span>${pelicula.director}</li>
    <li class="card__list--item"><span class="card__list--bold">Elenco:</span>${pelicula.elenco}</li>`
    cardText.appendChild(cardList);
}

cardBody.appendChild(cardText);
document.getElementById("card").appendChild(cardBody);