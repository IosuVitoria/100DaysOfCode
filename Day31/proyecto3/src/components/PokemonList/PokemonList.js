// import React, { useState, useEffect } from 'react';
// import imagePoke from "../../assets/pokeball_negra.jpg";
// import "./pokemonlist.css"

// const PokemonList = ({ onPokemonClick }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [page, setPage] = useState(1);
//   const perPage = 10;

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${(page - 1) * perPage}`);
//       const data = await response.json();
//       setPokemonData(data.results);
//     };
//     fetchData();
//   }, [page]);

//   const handleNextPage = () => {
//     setPage(prevPage => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     if (page > 1) {
//       setPage(prevPage => prevPage - 1);
//     }
//   };

//   return (
//     <div>
//       <ul className="pokemon-list">
//         {pokemonData.map((pokemon, index) => {
   
//           const pokemonNumber = (page - 1) * perPage + index + 1;

//           return (
//             <li key={pokemonNumber} onClick={() => onPokemonClick(pokemon.url)}>
//               <img src={imagePoke} alt='imagen pokeball' className="pokemon-list__pokeball" />
//               {pokemon.name}
//               <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={pokemon.name} className='img__list'/>
//             </li>
//           );
//         })}
//       </ul>
//       <div className='button-container'>
//         <button onClick={handlePrevPage} disabled={page === 1}><img src={imagePoke} alt='imagenPokeball' className='pokeball__pag' style={{marginRight: "8px"}}/>Anterior</button>
//         <button onClick={handleNextPage}>Siguiente <img src={imagePoke} alt='imagenPokeball' className='pokeball__pag' style={{marginLeft: "8px"}}/> </button>
//       </div>
//     </div>
//   );
// };

// export default PokemonList;

import React, { useState, useEffect } from 'react';
import imagePoke from "../../assets/pokeball_negra.jpg";
import "./pokemonlist.css";

const PokemonList = ({ onPokemonClick }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const perPage = 10;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${perPage}&offset=${(page - 1) * perPage}`
      );
      const data = await response.json();
      setPokemonData(data.results);
    };
    fetchData();
  }, [page]);

  const handleNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <div className={`PokemonList ${selectedPokemon ? 'selected' : ''}`}>
      <ul className="pokemon-list">
        {pokemonData.map((pokemon, index) => (
          <li key={index + 1} onClick={() => onPokemonClick(pokemon.url)}>
            <img src={imagePoke} alt="imagen pokeball" className="pokemon-list__pokeball" />
            {pokemon.name}
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                index + 1
              }.png`}
              alt={pokemon.name}
              className="img__list"
            />
          </li>
        ))}
      </ul>
      <div className="button-container">
        <button onClick={handlePrevPage} disabled={page === 1}>
          <img src={imagePoke} alt="imagenPokeball" className="pokeball__pag" style={{ marginRight: "8px" }} />
          Anterior
        </button>
        <button onClick={handleNextPage}>
          Siguiente
          <img src={imagePoke} alt="imagenPokeball" className="pokeball__pag" style={{ marginLeft: "8px" }} />
        </button>
      </div>
    </div>
  );
};

export default PokemonList;
