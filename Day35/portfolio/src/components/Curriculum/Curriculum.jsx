import "./curriculum.css";
import imageExp1 from "../../assets/aralab.jpg";
import imageExp2 from "../../assets/apple.jpg";
import imageExp3 from "../../assets/preoca.jpg";
import imageHTML from "../../assets/logoStack/logoHTML.png";
import imageCSS from "../../assets/logoStack/logoCSS.png";
import imageJS from "../../assets/logoStack/logoJS.png";
import imageAngular from "../../assets/logoStack/logoAngular.png";
import imageREACT from "../../assets/logoStack/logoREACT.png";
import imageMYSQL from "../../assets/logoStack/logoMYSQL.png";
import imageNODE from "../../assets/logoStack/logoNODE.png";
import imagePHP from "../../assets/logoStack/logoPHP.png";
import imageGIT from "../../assets/github_logo.png";
import imageUpgrade from "../../assets/upgradeHub_logo.png";
import imageEHU from "../../assets/ehu_logo.jpg";
import imageDescarga from "../../assets/Descarga_logo.png";
import document from "../../assets/CV_Iosu.pdf"

const Curriculum = () => {
  return (
    <div className='resume'>
      <section className='header'>
        <header className='header__title'>
          <h1 className='header__top__h1'>Iosu Gómez Valdecantos</h1>
          <h4 className='header__top__h4'>Full Stack Developer Jr y Biólogo Molecular</h4>
        </header>
        <div className='header__content'>
          <h6 className='header__content__h6'> "He experimentado en el mundo científico y ahora quiero dedicarme profesionalmente a mi pasión: la programación y el diseño."</h6>
          <a href={document} target="_blank" rel="noopener noreferrer" className="header__cv"> <img src={imageDescarga} alt="logo descarga" />Descarga mi CV</a>
          <nav className='header__content__nav'>
            <ul>
              <li className='header__content__nav__li'><a href="https://github.com/IosuVitoria" target="_blank" rel="noopener noreferrer">Github</a></li>
              <li className='header__content__nav__li'><a href="https://www.linkedin.com/in/iosu-gomez-biologo-analista/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
              <li className='header__content__nav__li'><a href="https://www.instagram.com/iosudev/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </nav>
        </div>
      </section>

      <section className="laboral__experience">
        <header className="laboral__experience__header">
          <h1 className="laboral__experience__header__h1">EXPERIENCIA LABORAL</h1>
        </header>
        <div className="experience__last">
          <header>
            <img src={imageExp1} alt="logo empresa" />
            <div className="experience__header">
              <h4>Microbiólogo</h4>
              <h5>Sep 2018 - Actualmente</h5>
              <h6>Laboratorios Araba - Meriux Nutriscience</h6>
            </div>
          </header>
          <div className="experience__content">
            <p>Responsable del servicio de calibraciones.</p>
            <p>Análisis microbiológico y químico de aguas, alimentos y cosméticos.</p>
          </div>
        </div>

        <div className="experience__previous">
          <div className="experience__second">
            <header>
              <img src={imageExp2} alt="logo empresa" />
              <div className="experience__header">
                <h4>Técnico certificado de Apple</h4>
                <h5>Junio 2016 - Agosto 2018</h5>
                <h6>Iraxkor S.L.</h6>
              </div>
            </header>
            <div className="experience__content">
              <p>Técnico oficial IOS. Reparación de equipos Apple con S.O IOS.</p>
              <p>Formador one to one y grupal de sistemas Apple.</p>
            </div>
          </div>

          <div className="experience__first">
            <header>
              <img src={imageExp3} alt="logo empresa" />
              <div className="experience__header">
                <h4>Técnico informático y medioambiental</h4>
                <h5>Septiembre 2014 - Marzo 2015</h5>
                <h6>Preoca Servicios Ambientales</h6>
              </div>
            </header>
            <div className="experience__content">
              <p>Revisión y generación de documentación asociada a cursos de formación.</p>
              <p>Revisión de documentación legal asociada al ámbito ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="education">
        <header>
          <h1 className="education__header__h1">FORMACIÓN</h1>
        </header>

        <div className="bootcamp__formation">
          <header className="bootcamp__formation__header">
            <img src={imageUpgrade} alt="logro upgrade" />
            <div className="bootcamp__formation__header__dates">
              <h4>Upgrade Hub</h4>
              <h5>Mayo 2023 - Julio 2023</h5>
            </div>
          </header >
          <div className="bootcamp__formation__header__content">
            <p><b>Formación Frontend:</b> HTML, CSS y Javascript. Diseño responsivo y concepto 'Mobile First'. Uso de preprocesador SASS</p>
            <p>Clonación de webs y diseño responsivo.</p>
            <p><b>Integrando conceptos y usando frameworks:</b> React.js y Angular.js.</p>
            <p><b>Primeros pasos con el backend:</b> MongoDB y Node.js. Introducción a MYSQL.</p>
            <p><b>GIT: Control de versiones.</b></p>
            <p>PHP y Symphony, Frontend y Backend diferentes.</p>
          </div>

          <div className="bootcamp__formation__tec">
          <h5>STACK TECNOLÓGICO</h5>
            <div className="bootcamp__formation__stack">
              <ul>
                <li>
                  <img src={imageHTML} alt="imagen HTML" className="bootcamp__formation__stack__img"/>
                </li>
                <li>
                  <img src={imageCSS} alt="image CSS" className="bootcamp__formation__stack__img"/>
                </li>
                <li>
                  <img src={imageJS} alt="image JS" className="bootcamp__formation__stack__img" />
                </li>
                <li>
                  <div>
                    <img src={imageAngular} alt="logo Angular" className="bootcamp__formation__stack__img" />
                    <img src={imageREACT} alt="logo React" className="bootcamp__formation__stack__img" />
                  </div>
                </li>
                <li>
                  <img src={imageNODE} alt="logo node" className="bootcamp__formation__stack__img"/>
                </li>
                <li>
                  <img src={imagePHP} alt="logo PHP" className="bootcamp__formation__stack__img"/>
                </li>
                <li>
                  <img src={imageMYSQL} alt="logo MYSQL" className="bootcamp__formation__stack__img" />
                </li>
                <li>
                  <img src={imageGIT} alt="logo Github" className="bootcamp__formation__stack__img" />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="university__formation">
            <img src={imageEHU} alt="university logo" />
            <div className="university__formation__degree">
              <header className="university__formation__degree__header">
                <h3>Licenciatura en Biología</h3>
                <p>Universidad del País Vasco</p>
                <p>2003 - 2012</p>
              </header>
              <p>Introducción al lenguaje Python de programación. Prácticas de Bioinformática para el análisis de secuencias genómicas.</p>
            </div>

            <div className="university__formation__degree">
              <header className="university__formation__degree__header">
                <h3>Máster en Biología Molecular</h3>
                <p>Universidad del País Vasco</p>
                <p>2013 - 2014</p>
              </header>
              <p>80% de la formación en inglés. Tesina defendida en inglés. Prácticas de 2 meses en Neiker-Teknalia. Tesina desarrollada en lenguaje Python. 3 Meses de trabajo con Python.</p>
            </div>
        </div>
      </section>


    </div>
  )
}

export default Curriculum