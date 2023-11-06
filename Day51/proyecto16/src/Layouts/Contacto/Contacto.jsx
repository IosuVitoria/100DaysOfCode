import React from 'react';
import imgEU from './assets/eu.jpg';
import imgES from './assets/es.jpg';
import imgEN from './assets/en.jpg';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'

import { useTranslation } from 'react-i18next';
import "./contacto.css";
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';


function Contacto() {
  const { t, i18n } = useTranslation('contact');


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
        console.log(templateParams)
        console.error('Error al enviar el correo:', error.text);
      });
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Container className='contact__general'>
      <div style={{ textAlign: 'right' }}>
        <Button variant="outlined" color="primary" className='contact__general__button' onClick={() => changeLanguage('en')}>
          <img src={imgEN} alt="idioma" className='idioms'/>
          English
        </Button>
        <Button variant="outlined" color="primary" className='contact__general__button' onClick={() => changeLanguage('es')}>
        <img src={imgES} alt="idioma" className='idioms'/>
          Español
        </Button>
        <Button variant="outlined" color="primary" className='contact__general__button' onClick={() => changeLanguage('eu')}>
        <img src={imgEU} alt="idioma" className='idioms'/>
          Euskera
        </Button>
      </div>
      <section className='general'>
        <h2>{t('contactForm')}</h2>
        <form onSubmit={sendEmail} className='contact-form'>
          <div className='contact__name'>
            <label htmlFor='from_name'>{t('name')}:</label>
            <input type='text' id='from_name' name='from_name' required />
          </div>
          <div className='contact__email'>
            <label htmlFor='email_id'>{t('email')}:</label>
            <input type='email' id='email_id' name='email_id' required />
          </div>
          <div className='contact__text'>
            <label htmlFor='message'>{t('message')}:</label>
            <textarea id='message' name='message' required />
          </div>
          <button type='submit' className='contact__button'>
              {t('send')} <FontAwesomeIcon icon={faPaperPlane} className='fontawesome-icon'/>
          </button>
        </form>
      </section>
    </Container>
  );
}

export default Contacto;
