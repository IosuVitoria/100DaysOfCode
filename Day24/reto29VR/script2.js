const peliculas = [
    {
        titulo: "Terminator",
        genero: "Acción",
        anioLanzamiento: 1984,
        imagen: "https://th.bing.com/th/id/OIP.DWalAAxna8FuHZNdb_NPeAHaLH?pid=ImgDet&rs=1",
        descripcion: "Un ciborg asesino del futuro viaja al pasado para eliminar a Sarah Connor, cuyo hijo se convertirá en líder de la resistencia humana contra las máquinas.",
        actores: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn"]
    },
    {
        titulo: "Alien",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1979,
        imagen: "https://th.bing.com/th/id/OIP.LSERxXKandxV4E2C8e-q1gHaLg?pid=ImgDet&rs=1",
        descripcion: "Una tripulación de una nave espacial en una misión de exploración encuentra una forma de vida alienígena letal que amenaza sus vidas.",
        actores: ["Sigourney Weaver", "Tom Skerritt", "John Hurt"]
    },
    {
        titulo: "Die Hard",
        genero: "Acción",
        anioLanzamiento: 1988,
        imagen: "https://th.bing.com/th/id/OIP.FCfXZB2LAUsETXErkVGzTwHaLH?pid=ImgDet&rs=1",
        descripcion: "Un oficial de policía de Nueva York se enfrenta a un grupo de terroristas que toman como rehenes a los ocupantes de un rascacielos en Los Ángeles.",
        actores: ["Bruce Willis", "Alan Rickman", "Bonnie Bedelia"]
    },
    {
        titulo: "Predator",
        genero: "Acción",
        anioLanzamiento: 1987,
        imagen: "https://th.bing.com/th/id/R.ebc94ce6c9ff3458a257b1d7c1c6e1bf?rik=33DnXbU5BixcIg&pid=ImgRaw&r=0",
        descripcion: "Un equipo de fuerzas especiales es perseguido en la selva por un cazador alienígena formidable.",
        actores: ["Arnold Schwarzenegger", "Carl Weathers", "Bill Duke"]
    },
    {
        titulo: "Total Recall",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1990,
        imagen: "https://th.bing.com/th/id/R.321082dd158929d21b798aead8411be3?rik=nr8MSTJvTjRQ9Q&riu=http%3a%2f%2ffr.web.img2.acsta.net%2fpictures%2f20%2f09%2f07%2f11%2f16%2f5690971.jpg&ehk=BVjIQCAqa64mFCoLrI8WicDpKEoFLSDsbrAMyoz%2bhcc%3d&risl=&pid=ImgRaw&r=0",
        descripcion: "Un hombre lucha por descubrir su verdadera identidad mientras se encuentra atrapado en un conflicto entre la realidad y la realidad virtual.",
        actores: ["Arnold Schwarzenegger", "Sharon Stone", "Rachel Ticotin"]
    },
    {
        titulo: "RoboCop",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1987,
        imagen: "https://th.bing.com/th/id/OIP.L4MgDarM-I6MyXlvSLXlOwHaLH?pid=ImgDet&rs=1",
        descripcion: "Un policía herido es transformado en un cyborg policía implacable en una ciudad plagada de crímenes.",
        actores: ["Peter Weller", "Nancy Allen", "Ronny Cox"]
    },
    {
        titulo: "Starship Troopers",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1997,
        imagen: "https://th.bing.com/th/id/R.cb25244a377d68b4b1ddb576b3c86fdb?rik=Wg6sFwgJYF213Q&pid=ImgRaw&r=0",
        descripcion: "Jóvenes reclutas militares luchan contra insectos alienígenas en una guerra interplanetaria futurista.",
        actores: ["Casper Van Dien", "Dina Meyer", "Denise Richards"]
    },
    {
        titulo: "The Fifth Element",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1997,
        imagen: "https://th.bing.com/th/id/OIP.B6NVYU4JRw-b7ro-RSKivgHaLH?pid=ImgDet&rs=1",
        descripcion: "En un futuro distópico, un taxista y una misteriosa mujer se embarcan en una aventura para salvar al mundo de la destrucción.",
        actores: ["Bruce Willis", "Milla Jovovich", "Gary Oldman"]
    },
    {
        titulo: "Armageddon",
        genero: "Acción",
        anioLanzamiento: 1998,
        imagen: "https://th.bing.com/th/id/R.8773615b6c6cc6d5e6f449499390c849?rik=%2fdxGFxDv2ianMg&riu=http%3a%2f%2fmedia.senscritique.com%2fmedia%2f000004739126%2fsource_big%2fArmageddon.jpg&ehk=3qmdk2qbvIWyHZ1A7L8qMTRrG1%2bjcO8cmuSzEPR3iG4%3d&risl=&pid=ImgRaw&r=0",
        descripcion: "Un grupo de perforadores de petróleo es enviado al espacio para evitar que un asteroide impacte la Tierra y cause la extinción masiva.",
        actores: ["Bruce Willis", "Ben Affleck", "Liv Tyler"]
    },
    {
        titulo: "Deep Impact",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1998,
        imagen: "https://th.bing.com/th/id/R.35224e81bba901c00c6ccd116bd22c07?rik=C2xZZJ88RyTisg&pid=ImgRaw&r=0",
        descripcion: "Un cometa mortal se dirige hacia la Tierra, y un grupo de personas lucha por encontrar una manera de evitar la catástrofe.",
        actores: ["Téa Leoni", "Morgan Freeman", "Elijah Wood"]
    },
    {
        titulo: "The Terminator 2: Judgment Day",
        genero: "Acción",
        anioLanzamiento: 1991,
        imagen: "https://th.bing.com/th/id/R.bbee496a3e7131dbd977fa9f643d0a6f?rik=vY2lSkUEqPXv5Q&pid=ImgRaw&r=0",
        descripcion: "Un nuevo Terminator es enviado desde el futuro para asesinar a John Connor, pero esta vez, también hay un Terminator bueno que lo protege.",
        actores: ["Arnold Schwarzenegger", "Linda Hamilton", "Edward Furlong"]
    },
    {
        titulo: "Jurassic Park",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1993,
        imagen: "https://image.tmdb.org/t/p/original/456FcvyTujRwzgoMoKKoheeCOlU.jpg",
        descripcion: "Un parque de dinosaurios genéticamente re-creados se convierte en un caos cuando los dinosaurios escapan y amenazan a los visitantes.",
        actores: ["Sam Neill", "Laura Dern", "Jeff Goldblum"]
    },
    {
        titulo: "The Matrix",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1999,
        imagen: "https://th.bing.com/th/id/OIP.8n3V_HSzCyYRZJ51mD8YNAHaLH?pid=ImgDet&rs=1",
        descripcion: "Un hacker descubre que el mundo en el que vive es una simulación controlada por máquinas, y se une a la resistencia para luchar contra ellas.",
        actores: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
        titulo: "Back to the Future",
        genero: "Ciencia Ficción",
        anioLanzamiento: 1985,
        imagen: "https://th.bing.com/th/id/OIP.sxcgb604zJ2XdRs5ret5ZwHaLD?pid=ImgDet&rs=1",
        descripcion: "Un adolescente viaja en el tiempo con la ayuda de un DeLorean modificado y debe asegurarse de que sus padres se enamoren para salvar su propio futuro.",
        actores: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"]
    },
    {
        titulo: "Indiana Jones and the Last Crusade",
        genero: "Aventura",
        anioLanzamiento: 1989,
        imagen: "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/gallery_big/public/media/image/2016/12/indiana-jones-ultima-cruzada_0.jpg?itok=RPLA7Ils",
        descripcion: "El arqueólogo Indiana Jones se embarca en una aventura para encontrar el Santo Grial y detener a los nazis que también lo buscan.",
        actores: ["Harrison Ford", "Sean Connery", "Denholm Elliott"]
    }
];

// Número de películas por página
const peliculasPorPagina = 6;
// Página actual
let paginaActual = 1;

// Función para mostrar películas en la página actual
function mostrarPeliculasEnPagina(pagina, peliculasFiltradas) {
    const inicio = (pagina - 1) * peliculasPorPagina;
    const fin = inicio + peliculasPorPagina;
    const peliculasEnPagina = peliculasFiltradas.slice(inicio, fin);

    const movieContainer = document.getElementById('movieContainer');
    movieContainer.innerHTML = '';

    peliculasEnPagina.forEach(pelicula => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <img src="${pelicula.imagen}" alt="${pelicula.titulo}">
            <h2>${pelicula.titulo}</h2>
            <p>${pelicula.genero} (${pelicula.anioLanzamiento})</p>
            <p>${pelicula.actores.join(', ')}</p>
            <p>${pelicula.descripcion}</p>
        `;
        movieContainer.appendChild(card);
    });
}

// Función para crear controles de paginación
function crearControlesDePaginacion(totalPeliculas) {
    const totalPaginas = Math.ceil(totalPeliculas / peliculasPorPagina);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPaginas; i++) {
        const botonPagina = document.createElement('button');
        botonPagina.innerText = i;
        botonPagina.addEventListener('click', () => {
            paginaActual = i;
            mostrarPeliculasEnPagina(paginaActual, peliculasFiltradas);
            actualizarEstiloBotones();
        });
        pagination.appendChild(botonPagina);
    }

    // Agregar clases para estilos
    actualizarEstiloBotones();
}

// Función para actualizar el estilo de los botones de paginación
function actualizarEstiloBotones() {
    const botonesPagina = document.querySelectorAll('.pagination button');
    botonesPagina.forEach(boton => {
        if (parseInt(boton.innerText) === paginaActual) {
            boton.classList.add('active');
        } else {
            boton.classList.remove('active');
        }
    });
}

// Event listeners para los cambios en los filtros
document.getElementById('nombre').addEventListener('input', () => {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const genero = document.getElementById('filter-select').value.toLowerCase();
    const anio = document.getElementById('anio').value.toLowerCase();

    const peliculasFiltradas = peliculas.filter(pelicula => {
        const titulo = pelicula.titulo.toLowerCase();
        const generoPelicula = pelicula.genero.toLowerCase();
        const anioLanzamiento = pelicula.anioLanzamiento.toString();

        return (
            (nombre === '' || titulo.includes(nombre)) &&
            (genero === '' || generoPelicula.includes(genero)) &&
            (anio === '' || anioLanzamiento.includes(anio))
        );
    });

    paginaActual = 1; // Reiniciar a la primera página al cambiar el filtro
    mostrarPeliculasEnPagina(paginaActual, peliculasFiltradas);
    crearControlesDePaginacion(peliculasFiltradas.length);
});

document.getElementById('filter-select').addEventListener('change', () => {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const genero = document.getElementById('filter-select').value.toLowerCase();
    const anio = document.getElementById('anio').value.toLowerCase();

    const peliculasFiltradas = peliculas.filter(pelicula => {
        const titulo = pelicula.titulo.toLowerCase();
        const generoPelicula = pelicula.genero.toLowerCase();
        const anioLanzamiento = pelicula.anioLanzamiento.toString();

        return (
            (nombre === '' || titulo.includes(nombre)) &&
            (genero === '' || generoPelicula.includes(genero)) &&
            (anio === '' || anioLanzamiento.includes(anio))
        );
    });

    paginaActual = 1; // Reiniciar a la primera página al cambiar el filtro
    mostrarPeliculasEnPagina(paginaActual, peliculasFiltradas);
    crearControlesDePaginacion(peliculasFiltradas.length);
});

document.getElementById('anio').addEventListener('input', () => {
    const nombre = document.getElementById('nombre').value.toLowerCase();
    const genero = document.getElementById('filter-select').value.toLowerCase();
    const anio = document.getElementById('anio').value.toLowerCase();

    const peliculasFiltradas = peliculas.filter(pelicula => {
        const titulo = pelicula.titulo.toLowerCase();
        const generoPelicula = pelicula.genero.toLowerCase();
        const anioLanzamiento = pelicula.anioLanzamiento.toString();

        return (
            (nombre === '' || titulo.includes(nombre)) &&
            (genero === '' || generoPelicula.includes(genero)) &&
            (anio === '' || anioLanzamiento.includes(anio))
        );
    });

    paginaActual = 1; // Reiniciar a la primera página al cambiar el filtro
    mostrarPeliculasEnPagina(paginaActual, peliculasFiltradas);
    crearControlesDePaginacion(peliculasFiltradas.length);
});

// Renderizar películas y controles de paginación al cargar la página
const peliculasFiltradas = peliculas.slice(); // Copia de todas las películas
mostrarPeliculasEnPagina(paginaActual, peliculasFiltradas);
crearControlesDePaginacion(peliculasFiltradas.length);