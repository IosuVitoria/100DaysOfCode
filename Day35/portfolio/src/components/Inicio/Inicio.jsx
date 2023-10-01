import { Link } from "react-router-dom";
import "./inicio.css";
import imageIosu from "../../assets/foto_iosu.jpg";
import imageR1 from "../../assets/resultados1.png"
import imageR from "../../assets/resultados.png"
import imageR2 from "../../assets/resultados2.png"

const proyectos = [
  {
    titulo: "Libreria",
    tecnologias: ["React.js", "Css3", "Email.js", "Slick-Carousel"],
    descripcion:
      "Proyecto Web de Repaso React en el cual se visualizan de manera dinámica los libros de una librería.",
    image: imageR1
  },
  {
    titulo: "Gestor evaluaciones",
    tecnologias: ["React.js", "Css3", "Email.js"],
    descripcion:
      "En este proyecto se quería dar una pequeña solución para técnicos que tengan que evaluar casas fuera de su localidad. La App permite consultar el tiempo y enviar una pequeña evaluación al correo electrónico.",
    image: imageR2
  },
  {
    titulo: "Nueva Pokedex",
    tecnologias: ["React.js", "Css3"],
    descripcion:
      "Proyecto muy sencillo que viene a ser la Pokedex reeditada tras pasar por todo el bootcamp y un mes de estudio.",
    image: imageR
  }
];

const Inicio = () => {
  return (
    <div className="inicio">
      <h1 className="inicio__h1">
        Hola, soy Iosu Gómez y soy Desarrollador Web en Vitoria.
      </h1>
      <h2 className="inicio__h2">
        Diseño creativo y personalizado de aplicaciones web y mejora de SEO.
        <Link to={"/contacto"} className="inicio__h2__link">
          Contacta conmigo.
        </Link>
      </h2>

      <section className="last-works">
        <h2>Algunos de mis proyectos...</h2>
        <p>Estos son algunos de mis últimos trabajos de desarrollo web:</p>
        <div className="works">
          {proyectos.map((proyecto, index) => (
            <div className="project-card" key={index}>
              <h3>{proyecto.titulo}</h3>
              <p>{proyecto.descripcion}</p>
              <div className="technologies">
                Tecnologías: {proyecto.tecnologias.join(", ")}
              </div>
              <img src={proyecto.image} alt={proyecto.titulo} />
            </div>
          ))}
        </div>

        <div className="works"></div>
        <div>
          <img src={imageIosu} alt="" className="myPhoto" />
        </div>
      </section>
    </div>
  );
};

export default Inicio;
