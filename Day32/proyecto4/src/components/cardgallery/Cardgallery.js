import React from 'react';
import HouseCard from './HouseCard.js'; 
import imageHouse1 from '../../assets/house01.jpg';
import imageHouse2 from '../../assets/house02.jpg';
import imageHouse3 from '../../assets/house03.jpg';
import "./cardgallery.css"

const Cardgallery = () => {
  const housesData = {
    casas_de_campo: [
      {
        // coordenadas: { latitud: 41.3456, longitud: 1.2345 },
        propietario: "Carlos García",
        anio_compra: 2017,
        precio_deseado: 250000,
        fecha_analisis: "2023-09-21",
        imagen: imageHouse1,
        direccion: "Camino de la Montaña, 8, 43210 Campo, España"
      },
      {
        // coordenadas: { latitud: 41.3567, longitud: 1.4567 },
        propietario: "Laura Martínez",
        anio_compra: 2019,
        precio_deseado: 320000,
        fecha_analisis: "2023-09-21",
        imagen: imageHouse2,
        direccion: "Calle del Bosque, 20, 43211 Campo, España"
      },
      {
        // coordenadas: { latitud: 41.3678, longitud: 1.6789 },
        propietario: "Miguel Sánchez",
        anio_compra: 2021,
        precio_deseado: 290000,
        fecha_analisis: "2023-09-21",
        imagen: imageHouse3,
        direccion: "Avenida del Lago, 5, 43212 Campo, España"
      }
    ]
  };

  return (
    <div className='cardgallery'>
        <h3 className='cardgallery__title'>CASAS A EVALUAR</h3>
      {housesData.casas_de_campo.map((house, index) => (
        <HouseCard
          key={index}
          // coordenadas={house.coordenadas}
          dueno={house.dueno}
          anioCompra={house.anio_compra}
          precioDeseado={house.precio_deseado}
          imagen={house.imagen}
          direccion={house.direccion}
        />
      ))}
    </div>
  );
};

export default Cardgallery;
