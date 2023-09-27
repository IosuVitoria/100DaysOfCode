
import React from 'react';
import './footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Biblioteca Virtual</p>
        <p>Avenida de la Cultura, 123, 01005 Vitoria-Gasteiz, España</p>
        <p>Correo: info@bibliotecavirtual.com</p>
      </div>
      <div className="footer-legal">
        <p>
          <a href="/politica-privacidad">Política de Privacidad</a> |{' '}
          <a href="/terminos-condiciones">Términos y Condiciones</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
