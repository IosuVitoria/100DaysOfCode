import React from 'react';
import './footer.css';
import imageLinkedin from "../../../assets/linkedin_logo.png";
import imageInstagram from "../../../assets/instagram_logo.jpg";
import imageTikTok from "../../../assets/tiktok_logo.png";
import imageFacebook from "../../../assets/facebook_logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="app-info">
        <p>App para técnic@s</p>
      </div>
      <div className="social-links">
        <h3>REDES SOCIALES DE LA EMPRESA </h3>
        <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer">
          <img src={imageLinkedin} alt="LinkedIn" />
        </a>
        <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer">
          <img src={imageInstagram} alt="Instagram" />
        </a>
        <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer">
          <img src={imageTikTok} alt="TikTok" />
        </a>
        <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer">
          <img src={imageFacebook} alt="Facebook" />
        </a>
      </div>
      <div className="legal-info">
        <a href="https://www.idealista.com/" target="_blank" rel="noopener noreferrer">
          Aviso legal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
