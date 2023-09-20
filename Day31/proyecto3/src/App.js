import React from 'react';
import PokemonList from './components/PokemonList/PokemonList';
import PokemonDetail from './components/PokemonDetail/PokemonDetail';
import Explicacion from './components/Explicacion/Explicacion.js';
import './App.css';
import imageFondo from "./assets/fondo2.png";
import imageNav from "./assets/nav_img.jpg";
import imageGit from "./assets/GitHub_logo.png";
import imageLik from "./assets/Likedin_logo.png";


const App = () => {
  const [selectedPokemonUrl, setSelectedPokemonUrl] = React.useState(null);

  const handlePokemonClick = (pokemonUrl) => {
    setSelectedPokemonUrl(pokemonUrl);
  };

  return (
    <div className="App">
      <header className='app__header'>
        <nav>
          <h1>REPASO 2: useEffect</h1>
        </nav>
        <img src={imageNav} alt='logo franquicia' className='app__header__logo' />
      </header>
    
    <Explicacion />
    <div className="app__pokedex">
      {/* <img src={imageFondo} alt='imagenfondo' className='imagenfondo'/> */}
      
      <PokemonDetail pokemonUrl={selectedPokemonUrl} />
      <div className="PokemonList">
        <PokemonList onPokemonClick={handlePokemonClick} />
      </div>
    </div>
  
    <footer class="app__footer">
      <div class="footer__content">
        <p>&copy; 2023 Iosu --- INICIATIVA PARA EL REPASO DE REACT</p>
        <div class="footer__social">
          <a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/" target="_blank" rel="noopener noreferrer">
            Iosu Gómez Valdecantos<img src={imageLik} alt="LinkedIn" />
          </a>
          <a href="https://github.com/IosuVitoria" target="_blank" rel="noopener noreferrer">
            IosuVitoria <img src={imageGit} alt="GitHub" />
          </a>
        </div>
      </div>
    </footer>

  </div>
  );
};

export default App;


