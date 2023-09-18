import "./Header.css"
import imagenA from "../../assets/doctor-b.svg"


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicios</a></li>
          <li><a href="#">Sobre Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>
      <h1>Consulta Médica</h1>
      <img className="header__image" src={imagenA} alt="imagen doctor" />
    </header>
  );
}

export default Header;