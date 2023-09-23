import emailjs from 'emailjs-com';
import React from 'react';
import "./contact.css";


const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_anpxlr3', 'template_opq0nfq', e.target, 'w1UrEPUYto5hpxBkJ')
      .then((result) => {
        console.log('Correo enviado correctamente:', result.text);
      }, (error) => {
        console.error('Error al enviar el correo:', error.text);
      });
  };

  return (
    <div className='contact'>
      <h2>EVALUACIÓN RÁPIDA</h2>
      <form onSubmit={sendEmail}>
        <div className='contact__name'>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="from_name" required/>
        </div>
        <div className='contact__email'>
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email_id" required />
        </div>
        <div className='contact__text'>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required />
        </div>
        <button type="submit" className='contact__button' >ENVIAR INFORME PRELIMINAR</button>
      </form>
    </div>
  );
};

export default Contact;
