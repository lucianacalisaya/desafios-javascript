//DESAFIO 4
/*
function calcular(plataformaUno, plataformaDos, plataformaTres, plataformaCuatro, plataformaCinco, plataformaSeis, pelicula) {
    switch (pelicula) {
        case "The Avengers":
            return plataformaUno + " y " + plataformaDos;
            break;
        case "Mean Girls":
            return plataformaUno + " y " + plataformaTres;
            break;
        case "The Hobbit: An Unexpected journey":
            return plataformaDos + "," + plataformaTres + " y " + plataformaCuatro;
            break;
        case "Charlie y la fabrica de chocolate":
            return plataformaCinco + " y " + plataformaSeis;
            break;
        default:
            return alert("La pelicula no fue encontrada en ninguna plataforma");
            break;
    }
}

let plataformaUno = "Netflix";
let plataformaDos = "HBO Max";
let plataformaTres = "Disney+";
let plataformaCuatro = "Star+";
let plataformaCinco = "Paramount";
let plataformaSeis = "Amazon Prime";
let pelicula = prompt("Ingrese la pelicula que desea buscar");
let resultado = calcular(plataformaUno, plataformaDos, plataformaTres, plataformaCuatro, plataformaCinco, plataformaSeis, pelicula);
alert("La pelicula " + pelicula + " esta en: " + resultado);
*/

//DESAFIO 5
function Pelicula(titulo, genero, duracion, director, elenco) {
    this.titulo = titulo;
    this.genero = genero;
    this.duracion = duracion;
    this.director = director;
    this.elenco = elenco;
    this.informar = function() { console.log("Datos de la pelicula " + this.titulo + "\nGénero: " + this.genero + "\nDuración: " + this.duracion + "\nDirector: " + this.director + "\nElenco: " + this.elenco); }
}

const pelicula1 = new Pelicula("The Avengers", "Accion, Ciencia ficcion", "2:23 hs", "Joss Whedon", "Robert Downey Jr., Chris Evans, Jeremy Renner, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Tom Hiddleston");
pelicula1.informar();

const pelicula2 = new Pelicula("Mean Girls", "Comedia", "1:37 hs", "Mark Waters", "Lindsay Lohan, Rachel McAdams, Tim Meadows, Amy Poehler, Ana Gasteyer, Lacey Chabert, Lizzy Caplan");
pelicula2.informar();

const pelicula3 = new Pelicula("The Hobbit: An Unexpected Journey", "Aventura, Fantasia epica", "2:49 hs", "Peter Jackson", "Ian Mckellen, Martin Freeman, Richard Armitage, James Nesbitt, Ken Stott, Sylvester McCoy, Barry Humphries");
pelicula3.informar();

const pelicula4 = new Pelicula("Charlie and the Chocolate Factory", "Aventuras, Comedia", "1:55 hs", "Tim Burton", "Johnny Depp, Freddie Highmore, David Kelly, Helena Bonham Carter, Noah Taylor, Missi Pyle, James Fox");
pelicula4.informar();