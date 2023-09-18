
// import './Listado.css';

// const ListadoPacientes = ({ pacientes }) => {
//   const handleEditar = (paciente) => {
//     // Simulación de edición
//     console.log('Editando paciente:', paciente);
//   };

//   const handleEliminar = (paciente) => {
//     // Simulación de eliminación
//     console.log('Eliminando paciente:', paciente);
//   };

//   return (
//     <div className="listado-container">
//       <div className="listado-header">
//         <h2>Listado de Pacientes</h2>
//       </div>
//       {pacientes.map((paciente, index) => (
//         <div key={index} className="paciente-card">
//           <div className="paciente-info">
//             <strong>Nombre:</strong> {paciente.nombre} <br />
//             <strong>Edad:</strong> {paciente.edad} <br />
//             <strong>Causa de Visita:</strong> {paciente.causa_de_visita} <br />
//             <strong>Medicamento Recetado:</strong> {paciente.medicamento_recetado} <br />
//             <strong>Observaciones:</strong> {paciente.observaciones} <br />
//           </div>
//           <div className="paciente-buttons">
//             <button className="editar-button" onClick={() => handleEditar(paciente)}>
//               <i className="fas fa-pencil-alt"></i> Editar
//             </button>
//             <button className="eliminar-button" onClick={() => handleEliminar(paciente)}>
//               <i className="fas fa-times"></i> Eliminar
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ListadoPacientes;

import { useState } from 'react';
import './Listado.css';

const ListadoPacientes = ({ pacientes, onEditar, onEliminar }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [datosEditados, setDatosEditados] = useState({
    nombre: '',
    edad: '',
    causa_de_visita: '',
    medicamento_recetado: '',
    observaciones: ''
  });

  // Función para editar un paciente
  const handleEditar = (paciente) => {
    // Asigna los datos del paciente a las variables de estado de edición
    setDatosEditados({
      nombre: paciente.nombre,
      edad: paciente.edad,
      causa_de_visita: paciente.causa_de_visita,
      medicamento_recetado: paciente.medicamento_recetado,
      observaciones: paciente.observaciones
    });

    // Muestra la ventana modal
    setModalVisible(true);
  };

  // Función para guardar los cambios editados
  const guardarCambios = () => {
    const pacienteIndex = pacientes.findIndex((paciente) => paciente.nombre === datosEditados.nombre);

    if (pacienteIndex !== -1) {
      const pacientesActualizados = [...pacientes];
      pacientesActualizados[pacienteIndex] = { ...pacientesActualizados[pacienteIndex], ...datosEditados };
      onEditar(pacientesActualizados);  // Llama a la función de editar proporcionada por el padre
      setModalVisible(false);
    }
  };
  

  return (
    <div>
      <h2>Listado de Pacientes</h2>
      <ul>
        {pacientes.map((paciente, index) => (
          <li key={index} className="paciente-card">
            <div className="paciente-info">
              <strong>Nombre:</strong> {paciente.nombre} <br />
              <strong>Edad:</strong> {paciente.edad} <br />
              <strong>Causa de Visita:</strong> {paciente.causa_de_visita} <br />
              <strong>Medicamento Recetado:</strong> {paciente.medicamento_recetado} <br />
              <strong>Observaciones:</strong> {paciente.observaciones} <br />
            </div>
            <div className="paciente-buttons">
              <button onClick={() => handleEditar(paciente)}>Editar</button>
              <button onClick={() => onEliminar(paciente)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>

      {modalVisible && (
        <div className="modal-container">
          <div className="modal">
            <h2>Editar Paciente</h2>
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={datosEditados.nombre}
                onChange={(e) => setDatosEditados({ ...datosEditados, nombre: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="edad">Edad:</label>
              <input
                type="text"
                id="edad"
                name="edad"
                value={datosEditados.edad}
                onChange={(e) => setDatosEditados({ ...datosEditados, edad: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="causa_de_visita">Causa de Visita:</label>
              <input
                type="text"
                id="causa_de_visita"
                name="causa_de_visita"
                value={datosEditados.causa_de_visita}
                onChange={(e) => setDatosEditados({ ...datosEditados, causa_de_visita: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="medicamento_recetado">Medicamento Recetado:</label>
              <input
                type="text"
                id="medicamento_recetado"
                name="medicamento_recetado"
                value={datosEditados.medicamento_recetado}
                onChange={(e) => setDatosEditados({ ...datosEditados, medicamento_recetado: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="observaciones">Observaciones:</label>
              <input
                type="text"
                id="observaciones"
                name="observaciones"
                value={datosEditados.observaciones}
                onChange={(e) => setDatosEditados({ ...datosEditados, observaciones: e.target.value })}
              />
            </div>

            <div className="modal-buttons">
              <button onClick={guardarCambios}>Guardar Cambios</button>
              <button onClick={() => setModalVisible(false)}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListadoPacientes;
