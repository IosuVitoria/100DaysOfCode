import React from 'react';
import Reloj from '../../clock/Clock';
import Logo from '../../../assets/logo.png';
import './nav.css';

const NavBar = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-brand">
          <img src={Logo} alt='logo needcarhel' />
          <span>Organization App</span>
        </div>
        <div className="reloj-container">
          <div className="reloj">
            <Reloj />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
