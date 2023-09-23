import React, { useState } from 'react';
import './Weatherapp.css';

const Weatherapp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (location === "") {
      setError("Por favor, ingresa una ubicación.");
      return;
    }

    callOpenWeatherAPI(location);
  };

  const callOpenWeatherAPI = async (location) => {
    const apiKey = "7f356ff517e14bdba0d05c5b80a2721b";  
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&cnt=8&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.cod === "404") {
        setError("Ciudad no encontrada.");
        setWeatherData(null);
      } else {
        setWeatherData(data);
        setError(null);
      }
    } catch (error) {
      setError("Error al obtener datos del pronóstico.");
      setWeatherData(null);
    }
  };

  return (
    <div className="weather-container">
      <form onSubmit={handleFormSubmit} className="get-weather">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ingresa una ciudad"
        />
        <button type="submit">Consultar Clima</button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {weatherData && weatherData.list && (
        <div className="weather-info">
          {Object.keys(weatherData.list.reduce((acc, forecast) => {
            const date = forecast.dt_txt.split(' ')[0];
            if (!acc[date]) {
              acc[date] = [];
            }
            acc[date].push(forecast);
            return acc;
          }, {})).map((date, index) => (
            <div key={index} className="day-forecast">
              <h3>Día {date}</h3>
              <div className="day-grid">
                {weatherData.list
                  .filter(forecast => forecast.dt_txt.split(' ')[0] === date)
                  .map((forecast, index) => (
                    <div key={index} className={`forecast-item ${index === 0 && 'tomorrow'}`}>
                      <img
                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                        alt="icon"
                        className="weather-icon"
                      />
                      <h2>{forecast.dt_txt}</h2>
                      <p>Temperatura: {Math.round(forecast.main.temp - 273.15)}°C</p>
                      <p>Sensación térmica: {Math.round(forecast.main.feels_like - 273.15)}°C</p>
                      <p>Temp. Mínima: {Math.round(forecast.main.temp_min - 273.15)}°C</p>
                      <p>Temp. Máxima: {Math.round(forecast.main.temp_max - 273.15)}°C</p>
                      <p>Precipitación: {forecast.pop * 100}%</p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Weatherapp;

