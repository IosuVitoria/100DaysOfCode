import { useState, useEffect } from 'react';
import './blog.css';
import imagePC from "../../assets/pc.jpg";

const BlogPost = () => {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState('');
  const [commentText, setCommentText] = useState('');

  // Cargar comentarios desde localStorage al cargar el componente
  useEffect(() => {
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
    setComments(savedComments);
  }, []);

  // Guardar comentarios en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCommentTextChange = (e) => {
    setCommentText(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      name: name,
      text: commentText,
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setName('');
    setCommentText('');
  };

  return (
    <div className="blog__post">
      <div className='blog__post__content'>
        <div className='blog__post__content__data'>
          <img src={imagePC} alt="imagen pc antiguo" className='blog__post__content__img'/>
          <div className="blog__post__content__author">
            <p><b>Autor:</b> Iosu Gómez Valdecantos</p>
            <p><b>Hora publicación: </b> {new Date().toLocaleString()}</p>
          </div>
        </div>
        <div className='blog__post__content__text'>
          <h2>MI VIAJE CON LA INFORMÁTICA</h2>
          <p>Toda la vida me ha gustado la informática. Todavía recuerdo el primer ordenador que vi con 11 años en el colegio. Fue un IBM, distaba mucho de ser moderno en aquella época, pero en el tuve acceso a mi primer editor de textos. No me olvidaré jamás el brillo de esa pantalla azul y de lo alucinado que me quedé por ver que se podían elegir varios colores a la par que se escribía el texto.</p>
          <p>Poco más tarde, llegaría a casa el primer ordenador que pude utilizar a diario. Montaba el sistema operativo Windows 95 y en la torre tenía un poderosísimo Pentium a 133MH, 32MB de RAM y 2GB de disco duro. Esto ahora es un fósil tecnológico, pero en aquel momento me permitió usar el Office de la época y jugar al primer juego de Age of Empires (en el cual mi hermano pequeño y yo pasamos innumerables horas).</p>
          <p>Esta máquina sufrió un ciberataque. Un virus hizo que el disco magnético girara a toda velocidad y la aguja al intentar leerlo lo partió dejándolo inservible. Tras la sustitución por uno de 4GB, la tienda nos devolvió el disco roto y tuve por primera vez un componente de PC en la mano. Una anécdota que no hizo sino avivar más mi interés por la informática y la electrónica.</p>
          <p>Llegaría el final del instituto y mi primer verano trabajando. Mi primer sueldo fue íntegro para la compra de un portátil. Un AH-TEC que me acompañó durante años y que a día de hoy salvo por la batería agotada y la bisagra rota sigue arrancando y funcionando perfectamente. Ruge como un león pero le tengo mucho cariño. Fueron muchas horas de trabajo pasadas delante de esa pantalla, mi primer sueldo y viajes continuos de idas y venidas a la universidad. Ese ordenador es para mí algo así como el primer coche con el que uno conduce tras sacarse el carnet. Se queda viejito y tiene sus cosas, pero lo aprecias por todo el tiempo pasado y el servicio que te ha dado.</p>
          <p>Años más tarde, llegaría mi inicio oficial en la programación con mi tesina de máster. Elegí Python para ponerme a trabajar y desarrollé mi trabajo en este lenguaje. Desde ese momento, quedaría una espina dentro de mí que años más tarde saldría a la luz.</p>
          <p>Y hace nada, un periodo muy duro a nivel personal me hizo darme cuente de lo que quería y deseaba. Gracias al apoyo de mi pareja y los consejos de un buen amigo decidí dar el salto y dedicarme a programar. A seguir formándome y crecer en un campo del que llevo enganchado desde que vi aquellas letras brillantes de IBM mostrándose en la pantalla.</p>
        </div>
      </div>
    

      <div className="comments">
        <h3>Comentarios:</h3>
        {comments.map((comment, index) => (
          <div className="comment" key={index}>
            <strong>{comment.name}:</strong>
            <p>{comment.text}</p>
            <small>{comment.timestamp}</small>
          </div>
        ))}
      </div>
      <div className="comment__form">
        <h3>Deja un comentario</h3>
        <form onSubmit={handleCommentSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
          <label htmlFor="comment">Comentario:</label>
          <textarea
            id="comment"
            name="comment"
            value={commentText}
            onChange={handleCommentTextChange}
            rows="4"
            required
          />
          <button type="submit">Publicar comentario</button>
        </form>
      </div>
    </div>
  );
};

export default BlogPost;
