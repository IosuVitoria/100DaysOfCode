import React, { useState, useEffect } from 'react';
import './explicacion.css'; // Agregar el archivo CSS

const UseEffectExplanation = () => {
  const [message, setMessage] = useState("Mensaje inicial");

  useEffect(() => {
    console.log(`El mensaje ha cambiado: ${message}`);

    // Limpieza del efecto (opcional)
    return () => {
      console.log('Limpieza del efecto');
    };
  }, [message]);

  const handleMessageChange = () => {
    setMessage("Nuevo mensaje");
  };

  return (
    <div className='explanation'>
      <h1>Explorando useEffect en React</h1>
      <p>
        <code>useEffect</code> es un hook en React que permite ejecutar efectos secundarios
        en componentes funcionales. Estos efectos pueden ser operaciones asíncronas, suscripciones
        a eventos, manipulación del DOM y más. <code>useEffect</code> es similar a
        <code>componentDidMount</code>, <code>componentDidUpdate</code> y <code>componentWillUnmount</code> en
        las clases de componentes.
      </p>

      <h2>useEffect para el mensaje</h2>
      <p>
        En este ejemplo, utilizamos <code>useEffect</code> para mostrar un mensaje cada vez que
        cambia el estado <code>message</code>. Inicializamos el estado con un valor inicial de
        <code>"Mensaje inicial"</code>. Cuando hacemos clic en el botón "Cambiar Mensaje", se
        actualiza el estado y se ejecuta el efecto para mostrar el mensaje actual en la consola.
      </p>
      <p>
        Mensaje actual: <strong>{message}</strong>
      </p>

      <div className='button__container'>
        <button onClick={handleMessageChange} className='button'>Cambiar Mensaje</button>
      </div>

      <h2>Más Ejemplos de useEffect</h2>
      <p>
        Aquí hay más ejemplos para ilustrar cómo utilizar <code>useEffect</code> en diferentes
        situaciones:
      </p>

      <h3>Efecto que se ejecuta solo al montar el componente (equivalente a componentDidMount)</h3>
      <p>
        <code>
          useEffect(() =&gt; {'{'} console.log('Componente montado'); {'}'}, []);
        </code>
      </p>

      <h3>Efecto que se ejecuta al cambiar una variable específica (equivalente a componentDidUpdate)</h3>
      <p>
        <code>
          useEffect(() =&gt; {'{'} console.log('La variable count ha cambiado:', count); {'}'}, [count]);
        </code>
      </p>

      <h3>Limpieza del efecto (equivalente a componentWillUnmount)</h3>
      <p>
        <code>
          useEffect(() =&gt; {'{'} return () =&gt; console.log('Componente desmontado'); {'}'}, []);
        </code>
      </p>
    </div>
  );
};

export default UseEffectExplanation;
