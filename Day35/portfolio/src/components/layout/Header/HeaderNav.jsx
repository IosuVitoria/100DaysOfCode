import { NavLink } from 'react-router-dom';
import PersonalLogo from '../../../assets/logoIosu.png'
import "./headernav.css";

const HeaderNav = () => {
  return (
    <header>
        <div className='header__top'>
            <img src={PersonalLogo} alt="Imagen de marca" />
            <h2>Iosu Gómez - Full Stack Developer Jr</h2>
        </div>
        <div className='header__top__decorator'></div>  
        <nav>
            <ul className='header__top__nav__ul'>
                <li>
                    <NavLink to="/inicio" className={({isActive}) => isActive ? "active": ""}>Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/portfolio" className={({isActive}) => isActive ? "active": ""}>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink to="/blog" className={({isActive}) => isActive ? "active": ""}>Blog</NavLink>
                </li>
                <li>
                    <NavLink to="/curriculum" className={({isActive}) => isActive ? "active": ""}>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto" className={({isActive}) => isActive ? "active": ""}>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    
    </header>

  )
}

export default HeaderNav