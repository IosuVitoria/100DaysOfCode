import React, { useState } from 'react';
import "./navbar.css";

function NavigationMenu() {
  const [activeOption, setActiveOption] = useState('editor');

  const navigateTo = (option) => {
    setActiveOption(option);
  };

  return (
    <div>
      <nav className="navigation-menu">
        <ul>
          <li>
            <button className={activeOption === 'editor' ? 'active' : ''} onClick={() => navigateTo('editor')}>
              Editor de Texto
            </button>
          </li>
          <li>
            <button className={activeOption === 'paint' ? 'active' : ''} onClick={() => navigateTo('paint')}>
              Paint
            </button>
          </li>
          <li>
            <button className={activeOption === 'buscaminas' ? 'active' : ''} onClick={() => navigateTo('buscaminas')}>
              Buscaminas
            </button>
          </li>
        </ul>
      </nav>
      {/* {activeOption === 'editor' && (
        <div className="editor-content">
        </div>
      )}
      {activeOption === 'paint' && (
        <div className="paint-content">
        </div>
      )}
      {activeOption === 'buscaminas' && (
        <div className="buscaminas-content">
        </div>
      )} */}
    </div>
  );
}

export default NavigationMenu;
