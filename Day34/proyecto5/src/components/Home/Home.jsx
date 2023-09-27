import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './home.css'; 

import image1 from '../../assets/libreria1.jpg';
import image2 from '../../assets/libreria2.jpg';
import image3 from '../../assets/libreria3.jpg';
import image4 from '../../assets/libreria4.jpg';
import image5 from '../../assets/libreria5.jpg';
import imageG from '../../assets/Garrison.jpg';
import imageV1 from '../../assets/doctor-1.png';
import imageV2 from '../../assets/message.png';



const images = [image1, image2, image3, image4, image5];

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="home-container">
      <div className="welcome-section">
        <h1>Bienvenid@ a Mundolibro</h1>
      </div>

      <div className="carousel">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Imagen ${index + 1}`} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="content-section">
        <h2>Libros y Citas</h2>
        <p>
          Descubre la sabiduría a través de los libros y las palabras de los grandes pensadores. Explora nuestro extenso catálogo de libros y encuentra el que más te guste:
        </p>

        <div className="quote">
          <blockquote>
            "Un libro es un regalo que puedes abrir una y otra vez." - Garrison Keillor
          </blockquote>
          <img src={imageG} alt="Garrison Keillor" className='image-author'/>
        </div>

      </div>

      <div className="links">
        <div className='link_explore'>
          <a href="/libros">
            <img src={imageV1} alt="Listado de Libros" />
            Explora nuestro catálogo de libros
          </a>
        </div>
        <div className='link_contact'>
          <a href="/contacto">
            <img src={imageV2} alt="Contacto" />
            ¡Contáctanos para cualquier consulta!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
