import { Container, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
    marginBottom: theme.spacing(3),
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    alignContent: 'center',
    opacity: "0.9",
  },
  example: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    backgroundColor: '#ffffff',
    borderRadius: '4px',
    boxShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
    margin: '0 auto',
    marginBottom: theme.spacing(2),
    maxWidth: '80%',
    alignItems: 'center',
    opacity: "0.8",
  },
  exampleMd: {
    backgroundColor: '#98FB98',
    width: '900px',
    borderRadius: "25px",
  },
  exampleSm: {
    backgroundColor: '#FFD700',
    width: '600px',
    borderRadius: "25px",
  },
  exampleLg: {
    backgroundColor: '#87CEFA',
    width: '1200px',
    borderRadius: "25px",
  },
  exampleXl: {
    backgroundColor: '#FFA07A',
    width: '1536px',
    borderRadius: "25px",
  },
}));

const Explanation = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4" gutterBottom>
        CONCEPTOS DEL ELEMENTO CONTAINER MATERIAL UI
      </Typography>

      <Typography variant="body1" paragraph>
        En Material-UI, un contenedor es un componente utilizado para envolver y
        organizar otros elementos o componentes en una interfaz de usuario.
        Proporciona un espacio estructurado y definido para presentar contenido.
      </Typography>

      <Typography variant="body1" paragraph>
        Los contenedores son esenciales para la maquetación y el diseño
        responsive. Material-UI ofrece varios tamaños de contenedor basados en
        los breakpoints de diseño responsivo, como xs, sm, md, lg y
        xl.
      </Typography>

      <Typography variant="body1" paragraph>
        Un contenedor con tamaño fijo (fixed) tiene un ancho máximo predefinido
        independientemente del tamaño de la pantalla. Por otro lado, un
        contenedor fluido (fluid) tiene un ancho máximo basado en el breakpoint
        actual, lo que lo hace adaptable y flexible en diferentes dispositivos.
      </Typography>

      <Typography variant="body1" paragraph>
        Aquí hay algunos ejemplos de cómo se puede usar el componente de
        contenedor en Material-UI:
      </Typography>

      <div className={`${classes.example} ${classes.exampleMd}`}>
        <Container maxWidth="md">
          <Typography variant="body2">
            Este es un contenedor con tamaño md (medium) y ancho fijo de 900px.
          </Typography>
        </Container>
      </div>

      <div className={`${classes.example} ${classes.exampleSm}`}>
        <Container maxWidth="sm">
          <Typography variant="body2">
            Este es un contenedor con tamaño sm (small) y ancho fijo de 600px.
          </Typography>
        </Container>
      </div>

      <div className={`${classes.example} ${classes.exampleLg}`}>
        <Container maxWidth="lg">
          <Typography variant="body2">
            Este es un contenedor con tamaño lg (large) y ancho fijo de 1200px.
          </Typography>
        </Container>
      </div>

      <div className={`${classes.example} ${classes.exampleXl}`}>
        <Container maxWidth="xl">
          <Typography variant="body2">
            Este es un contenedor con tamaño xl (extra large) y ancho fijo de 1536px.
          </Typography>
        </Container>
      </div>
    </div>
  );
};

export default Explanation;

