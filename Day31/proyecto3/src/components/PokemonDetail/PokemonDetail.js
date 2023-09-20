import React, { useState, useEffect } from 'react';
import "./pokemondetail.css"

const PokemonDetail = ({ pokemonUrl }) => {
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [pokemonSpecies, setPokemonSpecies] = useState(null);

  const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    steel: '#B8B8D0',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!pokemonUrl) return;

      const response = await fetch(pokemonUrl);
      const data = await response.json();
      setPokemonInfo(data);
    };
    fetchData();
  }, [pokemonUrl]);

  useEffect(() => {
    const fetchSpeciesData = async () => {
      if (!pokemonInfo) return;

      const response = await fetch(pokemonInfo.species.url);
      const data = await response.json();
      setPokemonSpecies(data);
    };
    fetchSpeciesData();
  }, [pokemonInfo]);

  if (!pokemonInfo || !pokemonSpecies) {
    return null;
  }

  const getDescription = () => {
    const entry = pokemonSpecies.flavor_text_entries.find(entry => entry.language.name === 'en');
    return entry ? entry.flavor_text : 'No description available.';
  };

  const getStat = (statName) => {
    const stat = pokemonInfo.stats.find(stat => stat.stat.name === statName);
    return stat ? stat.base_stat : 0;
  };

  const getTypes = () => {
    return pokemonInfo.types.map(typeInfo => ({
      type: typeInfo.type.name,
      color: `${typeColors[typeInfo.type.name] || '#777777'}80` 
    }));
  };

  return (
    <div className="pokemon-detail" style={{ backgroundColor: getTypes()[0].color }}>
      <h2>{pokemonInfo.name}</h2>
      <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
      <div className='detail'>
        <p> <b>Descripción</b>: {getDescription()}</p>
        <p><b>Altura</b>: {pokemonInfo.height}</p>
        <p><b>Peso</b>: {pokemonInfo.weight}</p>
        {getTypes().map((type, index) => (
          <p key={index} style={{ backgroundColor: type.color, borderRadius: '5px', padding: '8px', margin: '3px', display: 'inline-block', color: 'white', textTransform:"capitalize"}}>{type.type}</p>
        ))}
      </div>
      <h3>Estadísticas Base:</h3>
      <ul>
        <div className='ul__li'>
          <li><b>HP</b>: {getStat('hp')}</li>
          <li><b>Ataque</b>: {getStat('attack')}</li>
          <li><b>Defensa</b>: {getStat('defense')}</li>
        </div>
        <div className='ul__li2'>
          <li><b>Ataque especial</b>: {getStat('special-attack')}</li>
          <li><b>Defensa especial</b>: {getStat('special-defense')}</li>
          <li><b>Velocidad</b>: {getStat('speed')}</li>
        </div>
      </ul>
    </div>
  );
};

export default PokemonDetail;
