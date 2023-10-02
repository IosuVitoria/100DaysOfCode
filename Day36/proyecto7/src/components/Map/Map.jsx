import  { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Mapa = () => {
  const [direccion, setDireccion] = useState('');
  const [ubicacion, setUbicacion] = useState({ lat: 40.7128, lng: -74.0060 }); 

  const handleBuscarUbicacion = async () => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${direccion}`);
      const data = await response.json();

      if (data && data.length > 0) {
        const { lat, lon } = data[0];
        setUbicacion({ lat: parseFloat(lat), lng: parseFloat(lon) });
      } else {
        console.error('No se encontraron resultados para la dirección proporcionada.');
      }
    } catch (error) {
      console.error('Error al obtener la ubicación:', error);
    }
  };

  const MapComponent = () => {
    const map = useMap();
    map.setView([ubicacion.lat, ubicacion.lng], 12); 

    return (
      <>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={ubicacion}>
          <Popup>
            Ubicación: {direccion}
          </Popup>
        </Marker>
      </>
    );
  };

  return (
    <div style={{ height: '800px', width: '800px', margin: '0 auto', marginTop: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          value={direccion}
          onChange={(e) => setDireccion(e.target.value)}
          placeholder="Ingrese una dirección"
        />
        <button onClick={handleBuscarUbicacion}>Buscar</button>
      </div>
      <MapContainer center={ubicacion} zoom={12} style={{ height: '80%', width: '100%' }}>
        <MapComponent />
      </MapContainer>
    </div>
  );
};

export default Mapa;

