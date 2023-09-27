import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import imageBe from '../../assets/españa.jpg';
import imageBi from '../../assets/inglesa.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  const [idioma, setIdioma] = useState('es'); 

  const sendEmail = (e) => {
    e.preventDefault();

    const templateParams = {
      to_name: e.target.from_name.value,
      message: e.target.message.value,
      email_id: e.target.email_id.value
    };

    emailjs
      .send('service_anpxlr3', 'template_opq0nfq', templateParams, 'w1UrEPUYto5hpxBkJ')
      .then((result) => {
        console.log('Correo enviado correctamente:', result.text);
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error.text);
      });
  };

  return (
    <div className={`contact ${idioma}`}>
      <div className="language-buttons">
        <button className={`language-button ${idioma === 'es' ? 'active' : ''}`} onClick={() => setIdioma('es')}>
          🇪🇸 <img src={imageBe} alt="Castellano" className='button-img'/>
        </button>
        <button className={`language-button ${idioma === 'en' ? 'active' : ''}`} onClick={() => setIdioma('en')}>
          🇬🇧 <img src={imageBi} alt='Inglés' className='button-img' />
        </button>
      </div>

      <h2 className='header'>{idioma === 'es' ? 'EVALUACIÓN RÁPIDA' : 'QUICK ASSESSMENT'}</h2>

      <div className='contact__info'>
        <p>{idioma === 'es' ? 'Dirección de la biblioteca:' : 'Library Address:'}</p>
        <p>Avenida de la Cultura, 123, 01005 Vitoria-Gasteiz, España</p>
        <p>{idioma === 'es' ? 'Correo:' : 'Email:'} info@bibliotecavirtual.com</p>
      </div>

      <form onSubmit={sendEmail} className='contact-form'>
        <div className='contact__name'>
          <label htmlFor='name'>{idioma === 'es' ? 'Nombre:' : 'Name:'}</label>
          <input type='text' id='name' name='from_name' required />
        </div>
        <div className='contact__email'>
          <label htmlFor='email'>{idioma === 'es' ? 'Correo electrónico:' : 'Email:'}</label>
          <input type='email' id='email' name='email_id' required />
        </div>
        <div className='contact__text'>
          <label htmlFor='message'>{idioma === 'es' ? 'Mensaje:' : 'Message:'}</label>
          <textarea id='message' name='message' required />
        </div>
        <button type='submit' className='contact__button'>
            {idioma === 'es' ? 'ENVIAR MENSAJE' : 'SEND MESSAGE'}
            <FontAwesomeIcon icon={faPaperPlane} className='fontawesome-icon'/>
        </button>
      </form>
    </div>
  );
};

export default Contacto;
