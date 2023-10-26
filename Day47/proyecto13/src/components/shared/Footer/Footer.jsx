import React from 'react';
import "./footer.css";
import imageLinkedin from "../../../assets/linkedin.png"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h4>Aplicaciones:</h4>
          <ul>
            <li>Editor de Texto</li>
            <li>Paint</li>
            <li>Buscaminas</li>
          </ul>
        </div>
        <div>
          <p>&copy; 2023 Iosu Gómez Valdecantos</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/" target="_blank" rel="noopener noreferrer">
            <img src={imageLinkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
