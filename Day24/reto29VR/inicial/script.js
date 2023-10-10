const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 },
    { titulo: "The Terminator 2: Judgment Day", genero: "accion", anioLanzamiento: 1991 },
    { titulo: "Jurassic Park", genero: "ciencia ficción", anioLanzamiento: 1993 },
    { titulo: "The Matrix", genero: "ciencia ficción", anioLanzamiento: 1999 },
    { titulo: "Back to the Future", genero: "ciencia ficción", anioLanzamiento: 1985 },
    { titulo: "Indiana Jones and the Last Crusade", genero: "aventura", anioLanzamiento: 1989 }
];

let filtroGenre = [];
let filtroDecade80 = [];
let filtroDecade90 = [];
// console.log(peliculas[0].genero);

const filmGenre = (array, genre) => {
    for(let i = 0; i < array.length; i++){
        // console.log(array[i].genero);
        if(array[i].genero === genre){
            filtroGenre.push(array[i]);
        }
    }
    console.log(filtroGenre);
}


const filmDecade = (array) => {
    for(let i = 0; i < array.length; i++){
        // console.log(array[i].anioLanzamiento);
        if(array[i].anioLanzamiento >= 1980 && array[i].anioLanzamiento <=1989){
            // console.log("Estas son las películas de los 80s");
            filtroDecade80.push(array[i]);
        }else if(array[i].anioLanzamiento >= 1990 && array[i].anioLanzamiento <=1999){
            // console.log("Estas son las películas de los 90s");
            filtroDecade90.push(array[i]);
        }
    }
}

filmDecade(peliculas);

console.log(filtroDecade80);
console.log(filtroDecade90);




