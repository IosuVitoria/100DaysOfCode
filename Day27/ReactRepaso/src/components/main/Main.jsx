import "./Main.css"

const Main = () => {
  return (
    <div className = "main__section">
      
      <header className="main__section__header">
          <h1 className="header__h1">
            LISTADO DE PACIENTES DEL DOCTOR GÓMEZ
          </h1>
      </header>

      <section className="main__section__text">
          <h3  className="main__section__text--h3">Instrucciones</h3>
          <ol className="main__section__text--ol">
            <li>Revisar la tabla para comprobar que el paciente está introducido.</li>
            <li>En caso de no estar introducirlo, crearlo y introducir los datos oportunos.</li>
            <li>Guardar el paciente e informar por correo al supervisor si hay algún problema con ellos</li>
          </ol>
      </section>
    </div>
  )
}

export default Main