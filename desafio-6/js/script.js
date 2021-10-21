let listaDePlataformas = ["Netflix", "HBO Max", "Disney+", "Star+", "Paramount", "Amazon Prime"]

function Pelicula(titulo, genero, duracion, director, elenco, plataforma) {
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.director = director;
    this.elenco = elenco;
    this.plataforma = plataforma;
}

const pelicula1 = new Pelicula("The Avengers", "Accion, Ciencia ficcion", "2:23 hs", "Joss Whedon", "Robert Downey Jr., Chris Evans, Jeremy Renner, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Tom Hiddleston", listaDePlataformas[0] + ", " + listaDePlataformas[1] + ", " + listaDePlataformas[2] + " y " + listaDePlataformas[5]);

const pelicula2 = new Pelicula("Mean Girls", "Comedia", "1:37 hs", "Mark Waters", "Lindsay Lohan, Rachel McAdams, Tim Meadows, Amy Poehler, Ana Gasteyer, Lacey Chabert, Lizzy Caplan", listaDePlataformas[5]);

const pelicula3 = new Pelicula("The Hobbit: An Unexpected Journey", "Aventura, Fantasia epica", "2:49 hs", "Peter Jackson", "Ian Mckellen, Martin Freeman, Richard Armitage, James Nesbitt, Ken Stott, Sylvester McCoy, Barry Humphries", listaDePlataformas[1]);

const pelicula4 = new Pelicula("Charlie and the Chocolate Factory", "Aventuras, Comedia", "1:55 hs", "Tim Burton", "Johnny Depp, Freddie Highmore, David Kelly, Helena Bonham Carter, Noah Taylor, Missi Pyle, James Fox", listaDePlataformas[5]);

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
listaDePeliculas.sort(pelicula1.titulo, pelicula2.titulo, pelicula3.titulo, pelicula4.titulo);
for (const pelicula of listaDePeliculas) {
    console.log(pelicula.titulo);
}