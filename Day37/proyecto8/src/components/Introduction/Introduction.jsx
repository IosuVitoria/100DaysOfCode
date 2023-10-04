import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';

const MaterialUIElementsExplanation = () => {
  const sectionStyle = {
    marginBottom: '20px',
    marginTop: "20px",
    lineSpace: "25px",
    background: "grey",
    padding: "10px",
    borderRadius: "25px",
    color: "white"
  };

  const titleStyle = {
    marginBottom: '10px',
    marginTop: "20px",
    fontWeight: "bolder",
    textTransform: "uppercase",
    fontSize: "26px"
  };

  return (
    <Box p={3} sx={{background: "skyblue", padding: "12px", borderRadius: "25px"}}>
      <Typography variant="h4" sx={titleStyle}>
        Elementos de Material-UI utilizados:
      </Typography>
      <Divider sx={{ marginTop: '10px', marginBottom: '20px', justifyContent: "center" }} />

      <div style={sectionStyle}>
        <Typography variant="h6">1. Table, TableBody, TableContainer, TableHead, TableRow, TableCell:</Typography>
        <Typography variant="body1">
          Estos componentes se utilizan para crear una tabla que muestra los datos de los estudiantes. `TableContainer`
          proporciona un contenedor para la tabla, `TableHead` define el encabezado, `TableBody` contiene los datos y
          `TableRow` y `TableCell` representan filas y celdas de la tabla, respectivamente.
        </Typography>
      </div>

      <div style={sectionStyle}>
        <Typography variant="h6">2. Button:</Typography>
        <Typography variant="body1">
          El componente `Button` se utiliza para crear un botón interactivo que cambia la materia mostrada en la tabla.
          Al hacer clic en este botón, se invoca la función `handleSubjectChange` para alternar entre mostrar las notas de
          Matemáticas y Ciencias.
        </Typography>
      </div>

      <div style={sectionStyle}>
        <Typography variant="h6">3. Paper:</Typography>
        <Typography variant="body1">
          El componente `Paper` se utiliza como un contenedor para la tabla y proporciona una apariencia de papel con sombra.
          Es un contenedor estilizado de Material-UI.
        </Typography>
      </div>

      <div style={sectionStyle}>
        <Typography variant="h6">4. makeStyles:</Typography>
        <Typography variant="body1">
          La función `makeStyles` se utiliza para definir estilos personalizados para este componente. Los estilos se aplican
          a diferentes partes del componente, como el contenedor principal, la tabla y los botones.
        </Typography>
      </div>
    </Box>
  );
};

export default MaterialUIElementsExplanation;
