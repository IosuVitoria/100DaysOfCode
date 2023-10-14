import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import makeStyles from '@mui/styles/makeStyles/makeStyles';
import Container from '@mui/material/Container';
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const useStyles = makeStyles((theme) => ({
  selector: {
    marginBottom: theme.spacing(2),
  },
}));

const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

const ContainerFormExample = () => {
  const classes = useStyles();
  const [width, setWidth] = useState('md');

  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };

  useEffect(() => {
    const container = document.getElementById('container');
    if (container) {
      container.style.maxWidth = breakpoints[width];
      container.style.width = '100%';  // Ajustamos el ancho al 100%
    }
  }, [width]);

  const handleButtonClick = () => {
    alert(`Haz hecho clic en el contenedor con maxWidth ${breakpoints[width]}`);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9' }}>
      <Typography variant="h5" gutterBottom style={{ color: '#333' }}>
        Formulario para Cambiar el Ancho del Contenedor
      </Typography>

      <TextField
        label="Elige un tamaño"
        variant="outlined"
        select
        value={width}
        onChange={handleWidthChange}
        SelectProps={{
          native: true,
        }}
        className={classes.selector}
      >
        <option value="xs">Extra Small (xs)</option>
        <option value="sm">Small (sm)</option>
        <option value="md">Medium (md)</option>
        <option value="lg">Large (lg)</option>
        <option value="xl">Extra Large (xl)</option>
      </TextField>

      <Container
        id="container"
        maxWidth = {width}
        onClick={handleButtonClick}
        style={{
          marginTop: '16px',
          padding: '16px',
          border: '1px solid #000',
          cursor: 'pointer',
          backgroundColor: getColorForWidth(width),
        }}
      >
        <Typography style={{ color: getTextcolorForWidth(width) }}>
          Contenedor con maxWidth {breakpoints[width]}
        </Typography>
        <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
          Haz clic aquí
        </Button>
      </Container>
    </div>
  );
};

const getColorForWidth = (width) => {
  switch (width) {
    case 'xs':
      return '#FFCCCB';
    case 'sm':
      return '#FFD700';
    case 'md':
      return '#98FB98';
    case 'lg':
      return '#87CEFA';
    case 'xl':
      return '#FFA07A';
    default:
      return '#FFFFFF';
  }
};

const getTextcolorForWidth = (width) => {
  switch (width) {
    case 'xs':
      return '#333';
    case 'sm':
      return '#333';
    case 'md':
      return '#333';
    case 'lg':
      return '#333';
    case 'xl':
      return '#333';
    default:
      return '#333';
  }
};

export default ContainerFormExample;
