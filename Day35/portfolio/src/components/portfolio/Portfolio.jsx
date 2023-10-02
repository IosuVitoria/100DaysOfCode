import { useState } from 'react';
import imagenTODO from '../../assets/img_portfolio/TODOLIST.png';
import imagenHTMLNODE from '../../assets/img_portfolio/HTMLNODE.png';
import imagenAvengers from '../../assets/img_portfolio/Proyecto Avengers.png';
import imagenFinal from '../../assets/img_portfolio/Proyectofinal.png';
import imagenShopeame from '../../assets/img_portfolio/Shopeame.png';
import imagenTrivial from '../../assets/img_portfolio/Trivial.png';
import imagenHarry from '../../assets/img_portfolio/harrypoterreact.png';
import imagenTronos from '../../assets/img_portfolio/juegodetronos.png';
import imagenPokedex from '../../assets/img_portfolio/pokedex.png';
import imagenComics from '../../assets/img_portfolio/tiendacomics.png';
import './portfolio.css';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerRow = 2; // Proyectos por fila
  const itemsPerColumn = 2; // Proyectos por columna
  const itemsPerPage = itemsPerRow * itemsPerColumn; // Total de proyectos por página

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const images = [
    {
      src: imagenTODO,
      caption: 'TODO LIST',
      description: 'PROYECTO REALIZADO CON HTML CSS Y JAVASCRIPT. Elementos interesantes en formación: Objeto Date y su uso. Manejo del DOM.',
      tags: "HTML, CSS y Javascript",
      githubLink: 'https://github.com/IosuVitoria/proyectoTODO',
    },
    {
      src: imagenAvengers,
      caption: 'PROYECTO AVENGERS',
      description: 'Realizado con Angular.JS. Elementos interesantes aplicados: Se puede hacer un CRUD sobre los elementos de la galería y ver más elementos sobre ellos.',
      tags: "Angular.JS, Typescript",
      githubLink: 'https://github.com/IosuVitoria/Avengers',
    },
    {
      src: imagenTronos,
      caption: 'JUEGO DE TRONOS',
      description: 'Realizado con HTML, CSS y Javascript. Elemento interesante para formación: Uso de fetch y consumo siguiente de una API mostrando un personaje.',
      tags: "HTML, CSS y Javascript",
      githubLink: 'https://github.com/IosuVitoria',
    },
    {
      src: imagenTrivial,
      caption: 'TRIVIAL',
      description: 'Realizado con HTML, CSS y Javascript. Elemento interesante para formación: Uso de fetch y consumo siguiente de una API mostrando un personaje.',
      tags: "HTML, CSS y Javascript",
      githubLink: 'https://github.com/IosuVitoria/trivial',
    },
    {
      src: imagenShopeame,
      caption: 'PROYECTO SHOPEAME',
      description: 'Realizado con Angular.JS. Elementos interesantes aplicados: Se puede hacer un CRUD sobre los elementos de la galería y ver más elementos sobre ellos.',
      tags: "HTML, CSS y Javascript",
      githubLink: 'https://github.com/IosuVitoria/Shopeame-Upgrade',
    },
    {
      src: imagenPokedex,
      caption: 'POKEDEX',
      description: 'Realizado con HTML, CSS y Javascript. Elemento interesante para formación: Uso de fetch y consumo siguiente de una API mostrando un personaje.',
      tags: "HTML, CSS y Javascript",
      githubLink: 'https://github.com/IosuVitoria/APIPOKEMON',
    },
    {
      src: imagenComics,
      caption: 'PROYECTO Tienda de Cómics GRUPAL',
      description: 'Realizado con Angular.JS. Elementos interesantes aplicados: Se puede hacer un CRUD sobre los elementos de la galería y ver más elementos sobre ellos.',
      tags: "Angular.JS, Typescript",
      githubLink: 'https://github.com/IosuVitoria/ProyectoAngular',
    },
    {
      src: imagenFinal,
      caption: 'PROYECTO FINAL: ANGULAR.JS Proyecto Grupal',
      description: '3 CRUD, login y register integrados con NODE.',
      tags: "Angular.JS, Typescript",
      githubLink: 'https://github.com/IosuVitoria/FrontFinal',
    },
    {
      src: imagenHarry,
      caption: 'Proyecto Harry potter',
      description: 'Contenido en construcción. Proyecto que toma contenido de la API de Harry Potter. Proyecto grupal.',
      tags: "React.JS",
      githubLink: 'https://github.com/IosuVitoria/Proyecto-REACT',
    },
    {
      src: imagenHTMLNODE,
      caption: 'Proyecto HTML-NODE',
      description: 'Proyecto grupal con HTML-CSS, JS y Node.JS. Base de datos y gestión de supermercado.',
      tags: "HTML, CSS, Javascript y Node.jS",
      githubLink: 'https://github.com/IosuVitoria/ProyectoFinalNode',
    },
  ];

  const filteredImages = images.filter((image) =>
    image.caption.toLowerCase().includes(filter.toLowerCase())
  );

  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const visibleImages = filteredImages.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(filteredImages.length / itemsPerPage);

  return (
    <div className="gallery">
      <div className="filter__container">
        <label className="filter__container__label" htmlFor="filter">Filtrar por nombre de proyecto:</label>
        <input
          type="text"
          id="filter"
          placeholder="Ingrese el nombre del proyecto"
          className='filter__container__input'
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="image-grid" style={{
        gridTemplateColumns: `repeat(${itemsPerRow}, 1fr)`,
        gridTemplateRows: `repeat(${itemsPerColumn}, 1fr)`
      }}>
        {visibleImages.map((image, index) => (
          <div className="image" key={index}>
            <img src={image.src} alt={image.caption} className="image__grid__images" onClick={() => openModal(image)} />
            <div className="caption">
              <h3>{image.caption}</h3>
              <p>{image.description}</p>
              <a href={image.githubLink}>Ver en GitHub</a>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active__pagination' : ''}
            onClick={() => handlePageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" src={selectedImage.src} alt={selectedImage.caption} />
          <div id="caption">{selectedImage.caption}</div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
