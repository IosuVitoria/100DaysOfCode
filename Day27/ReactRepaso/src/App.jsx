import Formulario from "./components/formulario/Formulario"
import Header from "./shared/header/Header"
import ListadoPacientes from "./components/listadopacientes/ListadoPacientes"
import Footer from "./shared/footer/Footer"
import Main from "./components/main/Main"
import pacientesData from "./data/db.json"
import { useState } from "react"

function App() {
  const [pacientes, setPacientes] = useState(pacientesData.pacientes);

  // Función para editar un paciente
  const handleEditar = (pacienteEditado) => {
    // Encuentra el índice del paciente en el arreglo
    const pacienteIndex = pacientes.findIndex((paciente) => paciente.nombre === pacienteEditado.nombre);

    if (pacienteIndex !== -1) {
      // Copia el arreglo de pacientes
      const pacientesActualizados = [...pacientes];

      // Reemplaza el paciente existente con el paciente editado
      pacientesActualizados[pacienteIndex] = pacienteEditado;

      // Actualiza el estado con los pacientes editados
      setPacientes(pacientesActualizados);
    }
  };

  // Función para eliminar un paciente
  const handleEliminar = (pacienteEliminar) => {
    // Filtra los pacientes para eliminar el paciente seleccionado
    const nuevosPacientes = pacientes.filter((paciente) => paciente.nombre !== pacienteEliminar.nombre);

    // Actualiza el estado con los pacientes restantes
    setPacientes(nuevosPacientes);
  };
  return (
    <div className="App">
        <Header />
        <Main />
        <Formulario />
        <ListadoPacientes  pacientes={pacientes} onEditar={handleEditar} onEliminar={handleEliminar} />
        <Footer />
    </div>

  )
}

export default App
