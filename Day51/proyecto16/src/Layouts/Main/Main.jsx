import React from 'react';
import Slider from '../../Components/Slider/Slider';
import imgGrupal from '../../assets/grupal.jpg';
import "./main.css"

const Main = () => {
  return (
    <div>
      <section className='presentation'>
          <header className='header__presentation'>
              <h1 className='header__title'>BIENVENIDO A AMETSAK RUNNING CLUB</h1>
              <h2 className='header introduction'>Cuando el deporte es pasión!</h2>
              <h2>¿Quiénes somos?</h2>
          </header>
          <div className='content__presentation'>
            <img src={imgGrupal} alt="imagen de grupo" />
            <div className='content__presentation__text'>
              <p>Ametsak Running Group es un grupo de atletismo que no entiende de niveles o fronteras. Sólo buscamos pasión y respeto mútuo. </p>
              <p>Si te apetece conocernos te proponemos un plan: </p>
              <ol>
                <li>Escribe a nuestro correo: ametsakrunning@gmail.com y pregunta por nuestros horarios.</li>
                <li>Vente y disfruta!!!!</li>
              </ol>
              <p>El grupo tiene una grupeta principal para realizar los entrenos pero hay muchos integrantes que por exigencias personales entrenan a temporadas por su parte. ¡Preséntate, busca tu nivel y a correr!</p>
            </div>
          </div>
      </section>
      <Slider />
ç
    </div>
  )
}

export default Main