import React from 'react';
import './housecard.css';

const CarCard = ({ propietario, anioCompra, precioDeseado, imagen, direccion }) => {
  return (
    <div className="house-card">
      <img src={imagen} alt="House" />
      <div className="house-details">
        {/* <h2>Coordenadas: {coordenadas}</h2> */}
        <p><b>Propietario</b>: {propietario}</p>
        <p><b>Año de compra</b>: {anioCompra}</p>
        <p><b>Precio deseado</b>: {precioDeseado}</p>
        <p><b>Dirección</b>: {direccion}</p>
      </div>
    </div>
  );
};

export default CarCard;