import React, { useState } from 'react';
import Main from '../../../Layouts/Main/Main';
import Rutas from '../../../Layouts/Rutas/Rutas';
import Contact from '../../../Layouts/Contacto/Contacto';
import logoImage from '../../../assets/logo.png';
import "./nav.css"


function Nav() {
  const [route, setRoute] = useState('main');

  const renderRoute = () => {
    switch (route) {
      case 'main':
        return <Main />;
      case 'rutas-carrera':
        return <Rutas />;
      case 'contacto':
        return <Contact />;
      default:
        return <Main />;
    }
  };

  return (
    <div>
      <nav className="nav">
        <img src={logoImage} alt='logo ametsak'className='nav__img'/>
        <ul className='nav__options'>
          <li onClick={() => setRoute('main')} className={route === 'main' ? 'active' : ''}>
            Página Principal
          </li>
          <li onClick={() => setRoute('rutas-carrera')} className={route === 'rutas-carrera' ? 'active' : ''}>
            Rutas Carrera
          </li>
          <li onClick={() => setRoute('contacto')} className={route === 'contacto' ? 'active' : ''}>
            Contacto
          </li>
        </ul>
      </nav>
      {renderRoute()}
    </div>
  );
}

export default Nav;