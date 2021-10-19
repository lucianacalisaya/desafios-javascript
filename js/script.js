function calcular(plataformaUno, plataformaDos, plataformaTres, plataformaCuatro, plataformaCinco, plataformaSeis, pelicula) {
    switch (pelicula) {
        case "Avengers":
            return plataformaUno + " y " + plataformaDos;
            break;
        case "Mean Girls":
            return plataformaUno + " y " + plataformaTres;
            break;
        case "El Hobbit":
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