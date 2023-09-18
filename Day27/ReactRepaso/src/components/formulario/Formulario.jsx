// import { useState } from 'react';
// import './Formulario.css';
// import pacientesData from "../../data/db.json"

// const Formulario = () => {
//   const [datos, setDatos] = useState({
//     nombre: '',
//     edad: '',
//     causa_de_visita: '',
//     medicamento_recetado: '',
//     observaciones: ''
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     // Obtener los pacientes actuales del JSON
//     const pacientesActuales = pacientesData.pacientes;
    
//     // Crear un nuevo paciente con los datos del formulario
//     const nuevoPaciente = {
//       nombre: datos.nombre,
//       edad: parseInt(datos.edad),
//       causa_de_visita: datos.causa_de_visita,
//       medicamento_recetado: datos.medicamento_recetado,
//       observaciones: datos.observaciones
//     };
    
//     // Actualizar los pacientes con el nuevo paciente
//     const nuevosPacientes = [...pacientesActuales, nuevoPaciente];
    
//     // Crear un nuevo objeto JSON con los datos actualizados
//     const nuevoJSON = { pacientes: nuevosPacientes };
    
//     // Guardar el nuevo JSON en el archivo
//     const fs = require('fs');
//     fs.writeFileSync('../data/db.json', JSON.stringify(nuevoJSON, null, 2));

//     // Limpiar el formulario
//     setDatos({
//       nombre: '',
//       edad: '',
//       causa_de_visita: '',
//       medicamento_recetado: '',
//       observaciones: ''
//     });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDatos({
//       ...datos,
//       [name]: value
//     });
//   };

//   return (
//     <div className="formulario-container">
//       <form className="formulario" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label htmlFor="nombre" className="label">Nombre:</label>
//           <input type="text" id="nombre" name="nombre" value={datos.nombre} onChange={handleChange} className="input" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="edad" className="label">Edad:</label>
//           <input type="text" id="edad" name="edad" value={datos.edad} onChange={handleChange} className="input" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="causa_de_visita" className="label">Causa de Visita:</label>
//           <input type="text" id="causa_de_visita" name="causa_de_visita" value={datos.causa_de_visita} onChange={handleChange} className="input" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="medicamento_recetado" className="label">Medicamento Recetado:</label>
//           <input type="text" id="medicamento_recetado" name="medicamento_recetado" value={datos.medicamento_recetado} onChange={handleChange} className="input" />
//         </div>
//         <div className="form-group">
//           <label htmlFor="observaciones" className="label">Observaciones:</label>
//           <input type="text" id="observaciones" name="observaciones" value={datos.observaciones} onChange={handleChange} className="input" />
//         </div>

//         <button type="submit" className="button">Guardar</button>
//       </form>
//     </div>
//   );
// }

// export default Formulario;

import { useState } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    causa_de_visita: '',
    medicamento_recetado: '',
    observaciones: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un nuevo paciente con los datos del formulario
    const nuevoPaciente = {
      nombre: datos.nombre,
      edad: parseInt(datos.edad),
      causa_de_visita: datos.causa_de_visita,
      medicamento_recetado: datos.medicamento_recetado,
      observaciones: datos.observaciones,
    };

    try {
      const response = await fetch('http://localhost:3000/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevoPaciente),
      });

      if (response.status === 201) {
        alert('Paciente guardado con éxito');
      } else {
        alert('Error al guardar el paciente');
      }

      // Limpiar el formulario
      setDatos({
        nombre: '',
        edad: '',
        causa_de_visita: '',
        medicamento_recetado: '',
        observaciones: '',
      });
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
      alert('Error al guardar el paciente');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value,
    });
  };

  return (
    <div className="formulario-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre" className="label">
            Nombre:
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datos.nombre}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="edad" className="label">
            Edad:
          </label>
          <input
            type="text"
            id="edad"
            name="edad"
            value={datos.edad}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="causa_de_visita" className="label">
            Causa de Visita:
          </label>
          <input
            type="text"
            id="causa_de_visita"
            name="causa_de_visita"
            value={datos.causa_de_visita}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="medicamento_recetado" className="label">
            Medicamento Recetado:
          </label>
          <input
            type="text"
            id="medicamento_recetado"
            name="medicamento_recetado"
            value={datos.medicamento_recetado}
            onChange={handleChange}
            className="input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="observaciones" className="label">
            Observaciones:
          </label>
          <input
            type="text"
            id="observaciones"
            name="observaciones"
            value={datos.observaciones}
            onChange={handleChange}
            className="input"
          />
        </div>

        <button type="submit" className="button">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Formulario;


