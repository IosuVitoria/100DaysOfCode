const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
const pokemonId = 25; // Número de Pokédex de Pikachu

fetch(`${apiUrl}/${pokemonId}`)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error en la solicitud. Código de estado: ${response.status}`);
    }
    return response.json();
  })
  .then(pokemonData => {
    console.log('Información de Pokémon:', pokemonData);
    console.log('Nombre:', pokemonData.name);
    console.log('Altura:', pokemonData.height);
    console.log('Peso:', pokemonData.weight);
    console.log('Habilidades:', pokemonData.abilities.map(ability => ability.ability.name));
  })
  .catch(error => {
    console.error('Error en la solicitud:', error);
  });

